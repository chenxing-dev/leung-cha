export default function ProgressBar({ progress }: { progress: number }) {
    return (
        <div className="absolute inset-x-0 top-0 h-16 bg-paper overflow-hidden border-6 border-inkstone">
            <div
                className="h-full bg-gold transition-all duration-300"
                style={{ width: `${progress}%` }}
            />
            <span className="absolute top-1/2 -translate-y-1/2 text-brown text-3xl font-bold w-full text-center">煎煮中…</span>
        </div>
    );
}
