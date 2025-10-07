export default function Fire({ isFireOn }: { isFireOn: boolean }) {
    const fireClass = `w-48 aspect-square object-contain absolute bottom-0 pointer-events-none transition-opacity duration-500 ${isFireOn ? 'opacity-100 animate-fire-on' : 'opacity-0'}`;
    return (
        <img src="/decor/fire.png" alt="火" className={fireClass} style={{ imageRendering: 'pixelated' }} />
    );
}
