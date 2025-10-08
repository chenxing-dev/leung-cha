export default function Steam({ isBoiled }: { isBoiled: boolean }) {
    const steamClass = `w-48 aspect-square object-contain drop-shadow absolute top-0 transition-opacity duration-700 ${isBoiled ? 'animate-steam-float opacity-100' : 'opacity-0'}`;
    return (
        <img src="decor/steam.png" className={steamClass} style={{ imageRendering: "pixelated" }} />
    );
}
