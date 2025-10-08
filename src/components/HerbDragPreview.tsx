import { useDragLayer } from 'react-dnd';
import type { Herb } from './HerbItem';

export function HerbDragPreview({ herbs }: { herbs: Herb[] }) {
    const {
        isDragging,
        itemType,
        item,
        currentOffset,
    } = useDragLayer((monitor) => ({
        isDragging: monitor.isDragging(),
        itemType: monitor.getItemType(),
        item: monitor.getItem(),
        currentOffset: monitor.getSourceClientOffset(),
    }));

    if (!isDragging || itemType !== 'HERB' || !item || !currentOffset) return null;
    const herb = herbs.find(h => h.id === item.id);
    if (!herb) return null;

    return (
        <div style={{
            position: 'fixed',
            pointerEvents: 'none',
            left: currentOffset.x,
            top: currentOffset.y,
            zIndex: 9999,
        }}>
            <img
                src={`herbs/${herb.id}.png`}
                className="w-32 aspect-square object-contain"
                style={{ imageRendering: 'pixelated' }}
            />
        </div>
    );
}
