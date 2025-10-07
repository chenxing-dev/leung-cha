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
    <div className="h-screen p-3 font-mono text-4xl bg-herb border-dark-brown text-dark-brown/95">
      <HerbDragPreview herbs={herbs} />
      <div className="flex h-full bg-scroll border-6 border-wood">
        <aside className="w-80 overflow-x-hidden">
          <HerbList herbs={herbs} />
        </aside>
        <div className="border-x-6 border-light-brown w-4 bg-scroll-border"></div>
        <main className="flex-1 flex overflow-hidden">
          <div className="flex flex-col items-center justify-center w-1/2">
            <PotArea potHerbs={potHerbs} setPotHerbs={setPotHerbs} setBoiledTeas={setBoiledTeas} />
          </div>
          <RecipeInfo potHerbs={potHerbs} herbs={herbs} boiledTeas={boiledTeas} />
        </main>
      </div>
    </div>
  );
}

export default App;
