import type { Herb } from './HerbItem';
import type { BoiledTea } from './PotArea';

// 配方定义
const RECIPES = [
    {
        name: '五花茶',
        herbs: ['chrysanthemum', 'kapok_flower', 'frangipani', 'sophora_flower', 'honeysuckle'],
        description: '清热解毒，消暑降火',
    },
];

export function matchRecipe(potHerbs: string[]) {
    for (const recipe of RECIPES) {
        if (recipe.herbs.every(h => potHerbs.includes(h)) && potHerbs.length === recipe.herbs.length) {
            return recipe;
        }
    }
    return null;
}

export function RecipeInfo({ potHerbs, herbs, boiledTeas }: { potHerbs: string[]; herbs: Herb[]; boiledTeas: BoiledTea[] }) {
    // 药材中文名列表
    const herbList = potHerbs
        .map(id => {
            const herb = herbs.find(h => h.id === id);
            return herb ? herb.name : null;
        })
        .filter(Boolean);

    return (
        <section className="mr-8 my-6 p-6 border-6 border-dark-brown flex flex-1 flex-col items-center overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
            <div className="mb-4 p-2 bg-red-brown w-fit border-6 border-dark-brown">
                <h2 className="font-bold text-6xl">涼茶鋪</h2>
            </div>
            <hr className="w-full border-scroll-border my-4 border-3" />
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
                    <div className="h-72 overflow-y-auto"> {boiledTeas.map((tea, idx) => (
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
