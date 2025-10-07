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
        <section className="px-6 py-4 bg-scroll border-6 border-dark-brown/90 w-full" style={{ scrollbarWidth: 'none' }}>
            <div className="flex flex-col w-full h-60 text-3xl">
                <div className="flex items-center">
                    <img src="/decor/mortar_24x24.png" className="inline-block w-24 aspect-ratio" style={{ imageRendering: "pixelated" }} />
                    <p className="font-bold">壺內藥材：</p>
                    {herbList.length > 0 ? null : <span>空</span>}
                </div>
                {herbList.length > 0 ? (
                    <ul className="list-disc ml-4 px-8 text-3xl grid grid-cols-2 gap-x-4 gap-y-2 max-h-40 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                        {herbList.map((name, idx) => (
                            <li key={idx} className="">{name}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
            <hr className="w-full border-scroll-border my-4 border-3" />
            <div className="flex flex-col flex-1 w-full text-3xl gap-2" >
                <div className="flex items-center">
                    <img src="/containers/gourd_24x24.png" className="inline-block w-24 aspect-ratio" style={{ imageRendering: "pixelated" }} />
                    <p className="font-bold">煲好的涼茶：</p>{boiledTeas.length > 0 ? null : <span>無</span>}
                </div>
                {boiledTeas.length > 0 ? (
                    <div className="h-72 overflow-y-auto"> {boiledTeas.slice().reverse().map((tea, idx) => (
                        <div key={idx} className="mt-2 p-2 bg-gold/30 border-6 border-gold rounded text-3xl font-bold text-brown">
                            <p>{tea.name}</p>
                            <span className="text-2xl font-normal">{tea.description}</span>
                        </div>
                    ))}
                    </div>
                ) : null}

            </div>
        </section>
    );
}
