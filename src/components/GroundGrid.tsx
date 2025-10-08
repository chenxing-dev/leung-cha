/**
 * 地面透視格線與背景
 */
export const GroundGrid: React.FC = () => (
    <>
        {/* Perspective ground grid overlay */}
        <div className="absolute bottom-0 w-full h-full bg-gold">
            <svg width="100%" height="100%" viewBox="0 0 100 96" preserveAspectRatio="none" className="opacity-30">
                {[...Array(6)].map((_, i) => {
                    const y = 66 + (30 * i) / 5;
                    return <line key={i} x1={0} y1={y} x2={100} y2={y} stroke="var(--color-light-brown)" strokeWidth="0.7" />;
                })}
                {[...Array(12)].map((_, i) => {
                    const x = -16 + (152 * i) / 11;
                    return <polyline
                        key={i + 20}
                        points={`24,0 ${x},96`}
                        stroke="var(--color-light-brown)"
                        strokeWidth="0.7"
                        fill="none"
                    />;
                })}
            </svg>
        </div>
        {/* Square grid background */}
        <div className="absolute top-0 w-full h-3/4"
            style={{
                backgroundImage: `linear-gradient(to right, var(--color-scroll-border) 6px, transparent 2px), linear-gradient(to bottom, var(--color-scroll-border) 6px, transparent 2px)`,
                backgroundSize: '7.2vw 6.95vw',
                backgroundPosition: 'left 2.7vw bottom 4px',
                backgroundColor: 'var(--color-scroll)',
            }}></div>
    </>
);

export default GroundGrid;
