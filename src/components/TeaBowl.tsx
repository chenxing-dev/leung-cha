import { useState, useEffect } from 'react';

/**
 * 雞公碗像素涼茶元件
 * - show: 是否顯示碗
 * - onDrink: 點擊碗時觸發
 */
export const TeaBowl: React.FC<{ show: boolean; onDrink?: () => void }> = ({ show, onDrink }) => {

    const [drinking, setDrinking] = useState(false);
    const [pouringStep, setPouringStep] = useState(0); // 0~3

    // 倒茶動畫總時長
    const pouringDuration = 2000;
    // 延遲後開始
    const delay = 375;
    // 計算每步時長
    const stepDuration = pouringDuration / 4;
    // 倒茶動畫：show 時觸發

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (show) {
            setTimeout(() => {
                setPouringStep(0);
                let step = 0;
                interval = setInterval(() => {
                    step++;
                    setPouringStep(step);
                    if (step >= 3) {
                        clearInterval(interval);
                    }
                }, stepDuration);
            }, delay);
        } else {
            setPouringStep(0);
        }
        return () => clearInterval(interval);
    }, [show]);

    // 點擊碗觸發服用動畫（只在最滿狀態可點擊）
    const handleClick = () => {
        if (!drinking && show && pouringStep === 3) {
            setDrinking(true);
            setTimeout(() => {
                setDrinking(false);
                onDrink && onDrink();
            }, 1500 - 100); // 动画时长 - 100ms 提前触发 onDrink
        }
    };

    // 根據 pouringStep 顯示對應 sprite
    const bowlSprites = [
        'containers/rooster_bowl_0.png',
        'containers/rooster_bowl_1.png',
        'containers/rooster_bowl_2.png',
        'containers/rooster_bowl_3.png',
    ];

    return show ? (
        <>
            <img
                src={bowlSprites[0]}
                className={`w-48 aspect-ratio absolute bottom-0 left-1/2 -translate-x-1/2 blur-md scale-120 brightness-120 ${drinking ? 'hidden' : ''}`}
                draggable={false}
            />
            <img
                src={bowlSprites[Math.min(pouringStep, 3)]}
                className={`w-48 aspect-ratio absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-200 animate-tea-bowl-in ${pouringStep === 3 && !drinking ? 'hover:scale-105' : ''}`}
                style={{
                    imageRendering: 'pixelated',
                    cursor: !drinking && pouringStep === 3 ? 'pointer' : 'default',
                    animation: drinking ? 'var(--animate-drink)' : undefined,
                }}
                onClick={handleClick}
                draggable={false}
            />
        </>
    ) : null;
}

export default TeaBowl;
