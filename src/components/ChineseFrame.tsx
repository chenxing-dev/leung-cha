/**
 * ChineseFrame - 中式裝飾紋樣邊框元件
 * 用法：<ChineseFrame>內容</ChineseFrame>
 * 支持自定義 className/style
 */
export const ChineseFrame: React.FC<{
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}> = ({ className = '', style = {}, children }) => (
    <section className={`relative overflow-hidden p-3 w-full ${className}`} style={style}>
        {/* 四角紋樣 */}
        <img src="ui/corner_5x5.png" className="absolute left-0 top-0 w-5 h-5 pointer-events-none select-none" style={{ imageRendering: 'pixelated' }} alt="corner" />
        <img src="ui/corner_5x5.png" className="absolute right-0 top-0 w-5 h-5 pointer-events-none select-none rotate-90" style={{ imageRendering: 'pixelated' }} alt="corner" />
        <img src="ui/corner_5x5.png" className="absolute left-0 bottom-0 w-5 h-5 pointer-events-none select-none -rotate-90" style={{ imageRendering: 'pixelated' }} alt="corner" />
        <img src="ui/corner_5x5.png" className="absolute right-0 bottom-0 w-5 h-5 pointer-events-none select-none rotate-180" style={{ imageRendering: 'pixelated' }} alt="corner" />
        {/* 邊框紋樣 */}
        <div className="absolute top-0 left-5 right-5 h-3 pointer-events-none select-none" style={{ background: 'repeat-x url(ui/mid_1x3.png)', backgroundSize: 'auto 100%', imageRendering: 'pixelated' }} />
        <div className="absolute bottom-0 left-5 right-5 h-3 pointer-events-none select-none" style={{ background: 'repeat-x url(ui/mid_1x3.png)', backgroundSize: 'auto 100%', imageRendering: 'pixelated', rotate: '180deg' }} />
        <div className="absolute left-0 top-5 bottom-5 w-3 pointer-events-none select-none" style={{ background: 'repeat-y url(ui/mid_3x1.png)', backgroundSize: '100% auto', imageRendering: 'pixelated' }} />
        <div className="absolute right-0 top-5 bottom-5 w-3 pointer-events-none select-none" style={{ background: 'repeat-y url(ui/mid_3x1.png)', backgroundSize: '100% auto', imageRendering: 'pixelated', rotate: '180deg' }} />
        {/* 內容區域 */}
        <div className="bg-paper w-full h-full">
            {children}
        </div>
    </section>
);

export default ChineseFrame;
