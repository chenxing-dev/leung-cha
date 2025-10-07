import { useEffect, useRef } from "react";
import { useDrag, type DragSourceMonitor } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend'

export interface Herb {
    name: string;
    id: string;
}

export function HerbItem({ herb }: { herb: Herb }) {
    const liRef = useRef<HTMLLIElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const iconPath = `/herbs/${herb.id}.png`;
    const [{ isDragging }, drag, preview] = useDrag({
        type: 'HERB',
        item: { id: herb.id },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drag(liRef)

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    return (
        <li ref={liRef}
            className={`pl-4 pr-8 font-bold hover:bg-gold transition cursor-grab flex items-center ${isDragging ? 'opacity-40' : ''}`}>
            <div className="w-32 aspect-square mr-2">
                <img
                    ref={imgRef}
                    src={iconPath}
                    className="w-32 aspect-square object-contain"
                    style={{ imageRendering: "pixelated" }}
                    onError={() => {
                        if (imgRef.current) imgRef.current.style.display = "none";
                    }}
                />
            </div>
            <span>{herb.name}</span>
        </li>
    );
}
