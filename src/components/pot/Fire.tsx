
import { useEffect, useState } from 'react';

/**
 * fire_2.png: 火在爐內，先出現，動畫較穩定
 * fire.png: 火在爐上，延遲出現，動畫較跳動
 */
export default function Fire({ isFireOn }: { isFireOn: boolean }) {
    // 控制爐上火焰延遲出現
    const [showTopFire, setShowTopFire] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | undefined;
        if (isFireOn) {
            // 爐內火立即顯示，爐上火延遲 350ms
            timer = window.setTimeout(() => setShowTopFire(true), 350);
        } else {
            setShowTopFire(false);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isFireOn]);

    // 爐內火：穩定閃爍
    const stoveFireClass = `w-48 aspect-square object-contain absolute bottom-0 pointer-events-none transition-opacity duration-400 ${isFireOn ? 'opacity-100 animate-stove-fire' : 'opacity-0'}`;
    // 爐上火：跳動、延遲
    const topFireClass = `w-48 aspect-square object-contain absolute bottom-0 pointer-events-none transition-opacity duration-600 ${showTopFire && isFireOn ? 'opacity-100 animate-top-fire' : 'opacity-0'}`;

    return (
        <>
            {/* 爐內火焰 fire_2.png */}
            <img src="/decor/fire_2.png" alt="爐內火" className={stoveFireClass} style={{ imageRendering: 'pixelated' }} />
            {/* 爐上火焰 fire.png，延遲顯示 */}
            <img src="/decor/fire.png" alt="爐上火" className={topFireClass} style={{ imageRendering: 'pixelated' }} />
        </>
    );
}
