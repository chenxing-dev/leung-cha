import { useRef } from "react";
import { useDrop } from 'react-dnd';

export function PotArea({ setPotHerbs }: { setPotHerbs: (fn: (prev: string[]) => string[]) => void }) {
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

    return (
        <div className="relative w-48 h-96 pointer-events-auto" ref={potDivRef}
            style={{ background: isOver ? 'rgba(255,215,0,0.2)' : 'transparent' }}>
            {/* 炉像素图 */}
            <img src="/decor/stove.png" alt="爐"
                className="w-48 aspect-square object-contain drop-shadow absolute bottom-0"
                style={{ imageRendering: "pixelated" }} />
            {/* 藥壺像素图 */}
            <img src="/containers/teapot.png" alt="藥壺"
                className="w-48 aspect-square object-contain drop-shadow absolute bottom-30"
                style={{ imageRendering: "pixelated" }}
            />
            {/* 火像素图 */}
            <img src="/decor/fire.png" alt="火"
                className="w-48 aspect-square object-contain drop-shadow absolute bottom-0"
                style={{ imageRendering: "pixelated" }} />
            {/* 蒸汽像素图 */}
            <img src="/decor/steam.png" alt="蒸汽"
                className="w-48 aspect-square object-contain drop-shadow absolute top-0"
                style={{ imageRendering: "pixelated" }} />
        </div>
    );
}
