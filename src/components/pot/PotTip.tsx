export default function PotTip({ children }: { children: React.ReactNode }) {
    let content: React.ReactNode;
    if (typeof children === 'string') {
        const lines = children.split(/\n/g);
        content = lines.map((line, i) => <div key={i}>{line}</div>);
    } else {
        content = children;
    }
    return (
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 text-center text-xl font-bold border-6 border-bamboo-scroll bg-paper z-[999] pointer-events-none w-66">
            <div className="bg-gold/25 px-4 py-2">
                {content}
            </div>
        </div>
    );
}
