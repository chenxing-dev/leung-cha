import { useState } from "react";
import { HerbList } from './components/HerbList';
import { PotArea, type BoiledTea } from './components/PotArea';
import { RecipeInfo } from './components/RecipeInfo';
import { HerbDragPreview } from './components/HerbDragPreview';

export const herbs: { name: string; id: string }[] = [
  { name: "白朮", id: "bai_shu" },
  { name: "薄荷", id: "mint" },
  { name: "當歸", id: "angelica" },
  { name: "甘草", id: "liquorice" },
  { name: "枸杞", id: "goji" },
  { name: "桂圓肉", id: "longan" },
  { name: "槐花", id: "sophora_flower" },
  { name: "雞蛋花", id: "frangipani" },
  { name: "金銀花", id: "honeysuckle" },
  { name: "菊花", id: "chrysanthemum" },
  { name: "決明子", id: "cassia_seed" },
  { name: "羅漢果", id: "monk_fruit" },
  { name: "木棉花", id: "kapok_flower" },
  { name: "人參", id: "ginseng" },
  { name: "桑葉", id: "mulberry_leaf" },
  { name: "生姜", id: "ginger" },
];

function App() {
  const [potHerbs, setPotHerbs] = useState<string[]>([]);
  const [boiledTeas, setBoiledTeas] = useState<BoiledTea[]>([]);

  return (
    <div className="h-screen p-3 text-4xl font-serif font-semibold bg-herb border-dark-brown text-dark-brown/95">
      <HerbDragPreview herbs={herbs} />
      <div id="layout"
        className="flex h-full bg-scroll border-6 border-wood">
        <aside className="w-80 overflow-x-hidden">
          <HerbList herbs={herbs} />
        </aside>
        <div id="divider"
          className="border-x-6 border-light-brown w-4 bg-scroll-border"></div>
        <main className="flex-1 flex overflow-hidden relative bg-scroll">
          {/* Perspective ground grid overlay */}
          <div className="absolute bottom-0 w-full h-full bg-gold">
            <svg width="100%" height="100%" viewBox="0 0 100 96" preserveAspectRatio="none" className="opacity-30">
              {[...Array(6)].map((_, i) => {
                // y: 66 (horizon) to 96 (bottom), spacing evenly
                const y = 66 + (30 * i) / 5;
                return <line key={i} x1={0} y1={y} x2={100} y2={y} stroke="var(--color-light-brown)" strokeWidth="0.7" />;
              })}
              {/* Vertical perspective lines */}
              {[...Array(12)].map((_, i) => {
                // x: -16 (left) to 136 (right), converge toward center at top
                const x = -16 + (152 * i) / 11;
                return <polyline
                  key={i + 20}
                  points={`24,0 ${x},96`}
                  stroke="var(--color-light-brown)"
                  strokeWidth="0.7"
                  fill="none"
                />;
              })}
            </svg>
          </div>
          {/* Square grid background */}
          <div className="absolute top-0 w-full h-3/4"
            style={{
              backgroundImage: `linear-gradient(to right, var(--color-scroll-border) 6px, transparent 2px), linear-gradient(to bottom, var(--color-scroll-border) 6px, transparent 2px)`,
              backgroundSize: '85px 85px',
              backgroundPosition: 'left 36px bottom 4px',
              backgroundColor: 'var(--color-scroll)',
            }}></div>
          <div className="flex flex-col items-center justify-around w-1/2 relative">
            <div>
              <h2 className="px-13 bg-scroll w-fit border-6 border-cinnabar text-cinnabar font-black text-7xl leading-normal">涼茶鋪</h2>
              <a href="https://github.com/chenxing-dev/leung-cha"
                className="block text-2xl text-right font-bold hover:underline hover:text-cinnabar"
              >陳刑制</a>
            </div>
            <PotArea potHerbs={potHerbs} setPotHerbs={setPotHerbs} setBoiledTeas={setBoiledTeas} />
          </div>
          <div className="z-10 mr-8 my-6 flex flex-1">
            <RecipeInfo potHerbs={potHerbs} herbs={herbs} boiledTeas={boiledTeas} />
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;
