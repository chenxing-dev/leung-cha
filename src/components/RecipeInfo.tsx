import type { Herb } from './HerbItem';

// 配方定义
const RECIPES = [
    {
        name: '五花茶',
        herbs: ['chrysanthemum', 'kapok_flower', 'frangipani', 'sophora_flower', 'honeysuckle'],
        description: '清热解毒，消暑降火',
    },
];

function matchRecipe(potHerbs: string[]) {
    for (const recipe of RECIPES) {
        if (recipe.herbs.every(h => potHerbs.includes(h)) && potHerbs.length === recipe.herbs.length) {
            return recipe;
        }
    }
    return null;
}

export function RecipeInfo({ potHerbs, herbs }: { potHerbs: string[]; herbs: Herb[] }) {
    const recipe = matchRecipe(potHerbs);
    // 药材中文名列表
    const herbNames = potHerbs
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
            <div className="flex flex-col w-full h-54 text-3xl">
                <p className="font-bold">壺內藥材：</p>
                <p>{herbNames.length > 0 ? herbNames.join('、') : '空'}</p>
                {recipe && (
                    <div className="mt-2 p-2 bg-gold/30 border-6 border-gold rounded text-3xl font-bold text-brown">
                        {recipe.name}<br />
                        <span className="text-2xl font-normal">{recipe.description}</span>
                    </div>
                )}
            </div>
            <hr className="w-full border-scroll-border my-4 border-3" />
            <div className="flex flex-col w-full text-4xl gap-2">
                <div className="flex items-center font-bold">
                    <img src="/containers/gourd_24x24.png" className="inline-block w-24 aspect-ratio" style={{ imageRendering: "pixelated" }} />
                    <div>
                        <p>煲好的涼茶：</p>
                        {/* 列出煲好的涼茶，例如「五花茶」 */}
                    </div>
                </div>
            </div>
        </section>
    );
}
