import { useState } from "react";
import { HerbList } from './components/HerbList';
import { PotArea } from './components/PotArea';
import { RecipeInfo } from './components/RecipeInfo';
import { HerbDragPreview } from './components/HerbDragPreview';

const herbs: { name: string; id: string }[] = [
  { name: "金銀花", id: "honeysuckle" },
  { name: "甘草", id: "liquorice" },
  { name: "菊花", id: "chrysanthemum" },
  { name: "雞蛋花", id: "frangipani" },
  { name: "木棉花", id: "kapok_flower" },
  { name: "槐花", id: "sophora_flower" },
  { name: "羅漢果", id: "monk_fruit" },
  { name: "桑葉", id: "mulberry_leaf" },
  { name: "桂圓肉", id: "longan" },
  { name: "薄荷", id: "mint" },
  { name: "枸杞", id: "goji" },
  { name: "生姜", id: "ginger" },
  { name: "決明子", id: "cassia_seed" },
  { name: "當歸", id: "angelica" },
  { name: "白朮", id: "bai_shu" },
  { name: "人參", id: "ginseng" },
];


function App() {
  const [potHerbs, setPotHerbs] = useState<string[]>([]);
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
            <PotArea potHerbs={potHerbs} setPotHerbs={setPotHerbs} />
          </div>
          <RecipeInfo potHerbs={potHerbs} herbs={herbs} />
        </main>
      </div>
    </div>
  );
}

export default App;
