import type { Herb } from './HerbItem';
import type { BoiledTea } from './PotArea';
import ChineseFrame from './ChineseFrame';

export function RecipeInfo({ potHerbs, herbs, boiledTeas }: { potHerbs: string[]; herbs: Herb[]; boiledTeas: BoiledTea[] }) {
    // 药材中文名列表
    const herbList = potHerbs
        .map(id => {
            const herb = herbs.find(h => h.id === id);
            return herb ? herb.name : null;
        })
        .filter(Boolean);

    return (
        <ChineseFrame>
            <div className="px-4 py-2">
                <div className="flex flex-col w-full h-60 text-3xl">
                    <div className="flex items-center">
                        <img src="decor/mortar_24x24.png" className="inline-block w-24 aspect-ratio" style={{ imageRendering: "pixelated" }} />
                        <p className="font-bold flex-1 text-center">壺內藥材</p>
                    </div>
                    {herbList.length > 0 ? (
                        <ul className="list-disc px-8 text-3xl grid xl:grid-cols-2 gap-x-4 gap-y-2 max-h-40 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                            {herbList.map((name, idx) => (
                                <li key={idx} className="">{name}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>
                <hr className="w-full border-scroll my-3 border-3" />
                <div className="flex flex-col flex-1 w-full text-3xl gap-2" >
                    <div className="flex items-center">
                        <img src="containers/gourd_24x24_2.png" className="inline-block w-24 aspect-ratio" style={{ imageRendering: "pixelated" }} />
                        <p className="font-bold flex-1 text-center">煲過的涼茶</p>
                    </div>
                    {boiledTeas.length > 0 ? (
                        <div className="h-72 overflow-y-auto"> {boiledTeas.slice().reverse().map((tea, idx) => (
                            <div key={idx} className="mt-2 p-1.5 bg-gold/30 border-6 border-gold rounded text-xl xl:text-3xl font-bold text-brown">
                                <p>{tea.name}</p>
                                <span className="text-lg xl:text-2xl font-normal">{tea.description}</span>
                            </div>
                        ))}
                        </div>
                    ) : null}

                </div>
            </div>
        </ChineseFrame>
    );
}
