import { useEffect } from "react";

export function useBoiling(potHerbs: string[], isFireOn: boolean, isBoiled: boolean, setBoilProgress: (n: number) => void, setIsBoiled: (b: boolean) => void) {
    const hasHerbs = potHerbs && potHerbs.length > 0;
    useEffect(() => {
        let timer: number | null = null;
        if (isFireOn && hasHerbs && !isBoiled) {
            const totalTime = Math.max(1, potHerbs.length) * 1000;
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
}

export function usePotTip(potHerbs: string[], isFireOn: boolean, isBoiled: boolean, hasTeaBowl: boolean) {
    if (!potHerbs || potHerbs.length === 0) {
        return "請從左側藥材欄\n拖拽藥材到壺內";
    } else if (hasTeaBowl) {
        return "涼茶已煮好\n點擊雞公碗可服用~";
    } else if (!isFireOn) {
        return "可繼續放藥材\n或點擊爐點火煎煮";
    } else if (isBoiled) {
        return "煎煮完成！\n請點擊爐關火，倒出涼茶";
    }
    return null;
}
