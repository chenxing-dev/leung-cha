import { useState, useRef, useEffect } from "react";
import { useDrop } from 'react-dnd';
import Stove from "./pot/Stove";
import Teapot from "./pot/Teapot";
import Fire from "./pot/Fire";
import Steam from "./pot/Steam";
import ProgressBar from "./pot/ProgressBar";
import TeaReadyTip from "./pot/TeaReadyTip";

export function PotArea({ potHerbs, setPotHerbs }: { potHerbs: string[]; setPotHerbs: (fn: (prev: string[]) => string[]) => void }) {
    const [isFireOn, setIsFireOn] = useState(false);
    const [showTeaReady, setShowTeaReady] = useState(false);
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
            const totalTime = Math.max(1, potHerbs.length) * 2000; // 每味药材2秒
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
                setShowTeaReady(true);
                setPotHerbs(() => []);
                setTimeout(() => setShowTeaReady(false), 2000);
            }
            setIsBoiled(false);
        }
    }

    return (
        <div className="relative w-48 h-96 pointer-events-auto" ref={potDivRef}>
            <Stove hasHerbs={hasHerbs()} onClick={handleStoveClick} />
            <Teapot isOver={isOver} />
            <Fire isFireOn={isFireOn} />
            <Steam isBoiled={isBoiled} />
            {isFireOn && hasHerbs() && !isBoiled && <ProgressBar progress={boilProgress} />}
            {showTeaReady && <TeaReadyTip />}
        </div>
    );
}

