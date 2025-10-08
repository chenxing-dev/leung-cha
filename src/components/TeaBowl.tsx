import { useState } from 'react';

/**
 * 雞公碗像素涼茶元件
 * - show: 是否顯示碗
 * - onDrink: 點擊碗時觸發
 */
export const TeaBowl: React.FC<{ show: boolean; onDrink?: () => void }> = ({ show, onDrink }) => {
    const [drinking, setDrinking] = useState(false);

    // 點擊碗觸發服用動畫
    const handleClick = () => {
        if (!drinking && show) {
            setDrinking(true);
            setTimeout(() => {
                setDrinking(false);
                onDrink && onDrink();
            }, 600); // 動畫時長
        }
    };

    return show ? (
        <img
            src="/containers/rooster_bowl_48x48.png"
            className={`w-48 aspect-ratio absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-200 animate-tea-bowl-in ${drinking ? 'animate-drink' : ''}`}
            style={{ imageRendering: 'pixelated', cursor: !drinking ? 'pointer' : 'default' }}
            onClick={handleClick}
            draggable={false}
        />
    ) : null;
};

export default TeaBowl;
