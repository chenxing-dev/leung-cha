export default function Teapot({ isOver }: { isOver: boolean }) {
    return (
        <img src="/containers/teapot.png" alt="藥壺"
            className="select-none w-48 aspect-square object-contain drop-shadow absolute bottom-30 transition-all duration-300 pointer-events-none"
            style={{
                imageRendering: "pixelated",
                filter: isOver ? 'drop-shadow(0 0 4px var(--color-dark-brown)) drop-shadow(0 0 10px var(--color-gold))' : 'none',
            }}
        />
    );
}
