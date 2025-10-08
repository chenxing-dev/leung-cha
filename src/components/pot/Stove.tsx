export default function Stove({ hasHerbs, onClick }: { hasHerbs: boolean; onClick: () => void }) {
    return (
        <img src="decor/stove.png" alt="爐"
            className="select-none w-48 aspect-square object-contain drop-shadow absolute bottom-0"
            draggable={false}
            style={{
                imageRendering: "pixelated",
                cursor: hasHerbs ? 'pointer' : '',
            }}
            onClick={onClick}
        />
    );
}
