export default function Teapot({ isOver, pouring }: { isOver: boolean; pouring?: boolean }) {
    return (
        <img src="containers/teapot.png" alt="藥壺"
            className={`select-none w-48 aspect-square object-contain drop-shadow absolute bottom-30 transition-all duration-300 pointer-events-none origin-top-center ${pouring ? 'animate-pour' : ''}`}
            style={{
                imageRendering: "pixelated",
                filter: isOver ? 'drop-shadow(0 0 4px var(--color-inkstone)) drop-shadow(0 0 10px var(--color-gold))' : 'none',
            }}
        />
    );
}
