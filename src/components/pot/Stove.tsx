export default function Stove({ hasHerbs, onClick }: { hasHerbs: boolean; onClick: () => void }) {
    return (
        <img src="/decor/stove.png" alt="爐"
            className="w-48 aspect-square object-contain drop-shadow absolute bottom-0"
            style={{
                imageRendering: "pixelated",
                cursor: hasHerbs ? 'pointer' : '',
            }}
            onClick={onClick}
        />
    );
}
