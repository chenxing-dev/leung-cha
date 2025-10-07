import type { Herb } from './HerbItem';

export function RecipeInfo({ potHerbs, herbs }: { potHerbs: string[]; herbs: Herb[] }) {
  return (
    <section className="mr-8 my-6 p-6 border-6 border-dark-brown flex flex-1 flex-col items-center overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
      <div className="mb-4 p-2 bg-red-brown w-fit border-6 border-dark-brown">
        <h2 className="font-bold text-6xl">涼茶鋪</h2>
      </div>
      <hr className="w-full border-scroll-border my-4 border-3" />
      <div className="flex flex-col w-full text-4xl">
        <div className="font-bold border-6 border-brown-red mb-4 px-4 py-2 w-fit mx-auto text-center text-5xl">五花茶</div>
        <p className="font-bold">藥材：</p>
        <p>{potHerbs.length > 0 ? potHerbs.map(id => {
          const herb = herbs.find(h => h.id === id);
          if (!herb) return null;
          return `${herb.name}、`;
        }) : '空'}</p>
      </div>
      <hr className="w-full border-scroll-border my-4 border-3" />
      <div className="flex flex-col w-full text-4xl gap-2">
        <p className="flex items-center"><img src="/props/pot.png" className="inline-block w-8 h-8 mr-2" style={{ imageRendering: "pixelated" }} />煎煮中...</p>
        <p className="flex items-center"><img src="/props/time.png" className="inline-block w-8 h-8 mr-2" style={{ imageRendering: "pixelated" }} /><span>01:12</span></p>
        <div className="flex items-center font-bold mt-4">
          <img src="/containers/gourd_24x24.png" className="inline-block w-24 aspect-ratio" style={{ imageRendering: "pixelated" }} />
          <div>
            <p>涼茶剩餘量</p>
            <span>7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
