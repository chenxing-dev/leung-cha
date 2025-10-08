import type { Herb } from './HerbItem';
import type { BoiledTea } from './PotArea';

export function RecipeInfo({ potHerbs, herbs, boiledTeas }: { potHerbs: string[]; herbs: Herb[]; boiledTeas: BoiledTea[] }) {
    // 药材中文名列表
    const herbList = potHerbs
        .map(id => {
            const herb = herbs.find(h => h.id === id);
            return herb ? herb.name : null;
        })
        .filter(Boolean);

    return (
        <section className="relative p-3 w-full overflow-hidden" style={{ scrollbarWidth: 'none' }}>
            {/* 中式裝飾紋樣：四角 */}
            <img src="/ui/corner_5x5.png" className="absolute left-0 top-0 w-5 h-5 pointer-events-none select-none" style={{ imageRendering: 'pixelated' }} alt="corner" />
            <img src="/ui/corner_5x5.png" className="absolute right-0 top-0 w-5 h-5 pointer-events-none select-none rotate-90" style={{ imageRendering: 'pixelated' }} alt="corner" />
            <img src="/ui/corner_5x5.png" className="absolute left-0 bottom-0 w-5 h-5 pointer-events-none select-none -rotate-90" style={{ imageRendering: 'pixelated' }} alt="corner" />
            <img src="/ui/corner_5x5.png" className="absolute right-0 bottom-0 w-5 h-5 pointer-events-none select-none rotate-180" style={{ imageRendering: 'pixelated' }} alt="corner" />

            {/* 中式裝飾紋樣：邊框（用 repeat-x/y 疊加） */}
            <div className="absolute top-0 left-5 right-5 h-3 pointer-events-none select-none" style={{
                background: 'repeat-x url(/ui/mid_1x3.png)',
                backgroundSize: 'auto 100%',
                imageRendering: 'pixelated'
            }} />
            <div className="absolute bottom-0 left-5 right-5 h-3 pointer-events-none select-none" style={{
                background: 'repeat-x url(/ui/mid_1x3.png)',
                backgroundSize: 'auto 100%',
                imageRendering: 'pixelated',
                rotate: '180deg'
            }} />
            <div className="absolute left-0 top-5 bottom-5 w-3 pointer-events-none select-none" style={{
                background: 'repeat-y url(/ui/mid_3x1.png)',
                backgroundSize: '100% auto',
                imageRendering: 'pixelated'
            }} />
            <div className="absolute right-0 top-5 bottom-5 w-3 pointer-events-none select-none" style={{
                background: 'repeat-y url(/ui/mid_3x1.png)',
                backgroundSize: '100% auto',
                imageRendering: 'pixelated',
                rotate: '180deg'
            }} />
            {/* 內容區域 */}
            <div className="bg-paper h-full px-4 py-2">
                <div className="flex flex-col w-full h-60 text-3xl">
                    <div className="flex items-center">
                        <img src="/decor/mortar_24x24.png" className="inline-block w-24 aspect-ratio" style={{ imageRendering: "pixelated" }} />
                        <p className="font-bold flex-1 text-center">壺內藥材</p>
                    </div>
                    {herbList.length > 0 ? (
                        <ul className="list-disc ml-4 px-8 text-3xl grid grid-cols-2 gap-x-4 gap-y-2 max-h-40 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                            {herbList.map((name, idx) => (
                                <li key={idx} className="">{name}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>
                <hr className="w-full border-scroll my-3 border-3" />
                <div className="flex flex-col flex-1 w-full text-3xl gap-2" >
                    <div className="flex items-center">
                        <img src="/containers/gourd_24x24_2.png" className="inline-block w-24 aspect-ratio" style={{ imageRendering: "pixelated" }} />
                        <p className="font-bold flex-1 text-center">煲過的涼茶</p>
                    </div>
                    {boiledTeas.length > 0 ? (
                        <div className="h-72 overflow-y-auto"> {boiledTeas.slice().reverse().map((tea, idx) => (
                            <div key={idx} className="mt-2 p-1.5 bg-gold/30 border-6 border-gold rounded text-3xl font-bold text-brown">
                                <p>{tea.name}</p>
                                <span className="text-2xl font-normal">{tea.description}</span>
                            </div>
                        ))}
                        </div>
                    ) : null}

                </div>
            </div>
        </section>
    );
}
