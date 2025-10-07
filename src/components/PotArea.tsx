import { herbs as HERB_LIST } from "../App";
import { useState, useRef, useEffect } from "react";
import { useDrop } from 'react-dnd';
import Stove from "./pot/Stove";
import Teapot from "./pot/Teapot";
import Fire from "./pot/Fire";
import Steam from "./pot/Steam";
import ProgressBar from "./pot/ProgressBar";
import PotTip from "./pot/PotTip";
import { matchRecipe } from "./RecipeInfo";

export interface BoiledTea {
    name: string;
    description?: string;
}
interface PotAreaProps {
    potHerbs: string[];
    setPotHerbs: (fn: (prev: string[]) => string[]) => void;
    setBoiledTeas: (fn: (prev: BoiledTea[]) => BoiledTea[]) => void;
}

export function PotArea({ potHerbs, setPotHerbs, setBoiledTeas }: PotAreaProps) {
    const [isFireOn, setIsFireOn] = useState(false);
    const [boilProgress, setBoilProgress] = useState(0); // 0~100
    const [isBoiled, setIsBoiled] = useState(false);
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

    function hasHerbs() {
        return potHerbs && potHerbs.length > 0;
    }

    // 进度条动画
    useEffect(() => {
        let timer: number | null = null;
        if (isFireOn && hasHerbs() && !isBoiled) {
            const totalTime = Math.max(1, potHerbs.length) * 1000; // 每味药材1秒
            const start = Date.now();
            timer = setInterval(() => {
                const elapsed = Date.now() - start;
                const percent = Math.min(100, Math.round((elapsed / totalTime) * 100));
                setBoilProgress(percent);
                if (percent >= 100) {
                    setIsBoiled(true);
                    clearInterval(timer!);
                }
            }, 100);
        } else {
            setBoilProgress(0);
        }
        return () => { if (timer) clearInterval(timer); };
    }, [isFireOn, potHerbs, isBoiled]);

    function handleStoveClick() {
        if (!hasHerbs()) return;
        if (!isFireOn) {
            setIsFireOn(true);
            setIsBoiled(false);
        } else {
            setIsFireOn(false);
            if (isBoiled) {
                // 检查当前壶内药材是否为配方，若是则加入 boiledTeas
                const recipe = matchRecipe(potHerbs);
                if (recipe) {
                    setBoiledTeas(prev => prev.some(t => t.name === recipe.name) ? prev : [...prev, { name: recipe.name, description: recipe.description }]);
                } else if (potHerbs.length > 0) {
                    // 自动生成自制涼茶名字
                    const herbNames = potHerbs.map(id => {
                        const herb = HERB_LIST.find(h => h.id === id);
                        return herb ? herb.name : id;
                    });
                    const customName = `自制涼茶（${herbNames.join('、')}）`;
                    setBoiledTeas(prev => prev.some(t => t.name === customName) ? prev : [...prev, { name: customName }]);
                }
                setPotHerbs(() => []);
            }
            setIsBoiled(false);
        }
    }

    // 新手/步骤提示逻辑
    let tip: string | null = null;
    if (!hasHerbs()) {
        tip = "請從左側藥材欄\n拖拽藥材到煲內";
    } else if (!isFireOn && hasHerbs()) {
        tip = "可繼續放藥材\n或點擊爐點火煎煮";
    }
    else if (isBoiled) {
        tip = "煎煮完成！\n再次點擊爐關火";
    }

    return (
        <div className="relative w-48 h-96 pointer-events-auto" ref={potDivRef}>
            <Stove hasHerbs={hasHerbs()} onClick={handleStoveClick} />
            <Teapot isOver={isOver} />
            <Fire isFireOn={isFireOn} />
            <Steam isBoiled={isBoiled} />
            {isFireOn && hasHerbs() && !isBoiled && <ProgressBar progress={boilProgress} />}
            {tip && <PotTip>{tip}</PotTip>}
        </div>
    );
}

