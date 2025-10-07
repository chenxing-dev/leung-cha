import { type Herb, HerbItem } from './HerbItem';

export function HerbList({ herbs }: { herbs: Herb[] }) {
    return (
        <ul className="h-full overflow-y-auto w-80 overflow-x-hidden" style={{ scrollbarWidth: 'none' }}>
            {herbs.map(herb => (
                <HerbItem herb={herb} key={herb.id} />
            ))}
        </ul>
    );
}
