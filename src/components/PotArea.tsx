import { herbs as HERB_LIST } from "../App";
import { useState, useRef } from "react";
import { useDrop } from 'react-dnd';
import Stove from "./pot/Stove";
import Teapot from "./pot/Teapot";
import Fire from "./pot/Fire";
import Steam from "./pot/Steam";
import ProgressBar from "./pot/ProgressBar";
import PotTip from "./pot/PotTip";
import { matchRecipe } from "./recipes";
import { useBoiling, usePotTip } from "./pot/potHooks";
import TeaBowl from "./TeaBowl";


export interface BoiledTea {
    name: string;
    description?: string;
}
interface PotAreaProps {
    potHerbs: string[];
    setPotHerbs: (fn: (prev: string[]) => string[]) => void;
    setBoiledTeas: (fn: (prev: BoiledTea[]) => BoiledTea[]) => void;
}

export const PotArea: React.FC<PotAreaProps> = ({ potHerbs, setPotHerbs, setBoiledTeas }) => {
    const [isFireOn, setIsFireOn] = useState(false);
    const [boilProgress, setBoilProgress] = useState(0); // 0~100
    const [isBoiled, setIsBoiled] = useState(false);
    const [showBowl, setShowBowl] = useState(false);
    const [{ isOver }, dropRef] = useDrop({
        accept: 'HERB',
        drop: (item: { id: string }) => {
            setPotHerbs(prev => prev.includes(item.id) ? prev : [...prev, item.id]);
        },
        collect: (monitor: any) => ({
            isOver: monitor.isOver(),
        }),
    });
    const potDivRef = useRef<HTMLDivElement>(null);
    dropRef(potDivRef);

    // boiling/animation logic
    useBoiling(potHerbs, isFireOn, isBoiled, setBoilProgress, setIsBoiled);
    // tip logic
    const tip = usePotTip(potHerbs, isFireOn, isBoiled);

    function handleStoveClick() {
        const hasHerbs = potHerbs && potHerbs.length > 0;
        if (!hasHerbs) return;
        if (!isFireOn) {
            setIsFireOn(true);
            setIsBoiled(false);
        } else {
            setIsFireOn(false);
            if (isBoiled) {
                // 煲茶完成且關火，顯示茶碗
                setShowBowl(true);
            }
            setIsBoiled(false);
        }
    }

    // 點擊茶碗後服用，重置壺狀態
    function handleDrink() {
        // 收錄涼茶
        const recipe = matchRecipe(potHerbs);
        if (recipe) {
            setBoiledTeas(prev => prev.some(t => t.name === recipe.name) ? prev : [...prev, { name: recipe.name, description: recipe.description }]);
        } else if (potHerbs.length > 0) {
            const herbNames = potHerbs.map(id => {
                const herb = HERB_LIST.find(h => h.id === id);
                return herb ? herb.name : id;
            });
            const customName = `自制涼茶（${herbNames.join('、')}）`;
            setBoiledTeas(prev => prev.some(t => t.name === customName) ? prev : [...prev, { name: customName }]);
        }
        setPotHerbs(() => []);
        setShowBowl(false);
    }

    return (
        <div className="relative w-48 h-96 pointer-events-auto" ref={potDivRef}>
            <Stove hasHerbs={potHerbs.length > 0} onClick={handleStoveClick} />
            <Teapot isOver={isOver} />
            <Fire isFireOn={isFireOn} />
            <Steam isBoiled={isBoiled} />
            {isFireOn && potHerbs.length > 0 && !isBoiled && <ProgressBar progress={boilProgress} />}
            {tip && <PotTip>{tip}</PotTip>}
            {/* 煲茶完成且關火後顯示茶碗，點擊服用 */}
            <TeaBowl show={showBowl} onDrink={handleDrink} />
        </div>
    );
}

