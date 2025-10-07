export default function PotTip({ children }: { children: React.ReactNode }) {
    if (typeof children === 'string') {
        const lines = children.split(/\n/g);
        return (
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 text-center text-xl font-bold border-6 border-scroll-border bg-scroll z-[999] pointer-events-none w-56">
                <div className="bg-gold/25 px-4 py-2">
                    {lines.map((line, i) => (
                        <div key={i}>{line}</div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 text-center text-xl font-bold border-6 border-scroll-border bg-scroll z-[999] pointer-events-none w-56">
            <div className="bg-gold/25 px-4 py-2">
                {children}
            </div>
        </div>
    );
}
