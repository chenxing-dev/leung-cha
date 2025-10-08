import { useState } from "react";
import { HerbDragPreview } from './components/HerbDragPreview';
import MainLayout from './components/MainLayout';
import { type BoiledTea } from './components/PotArea';

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
    <div className="h-screen p-3 text-4xl font-serif font-semibold bg-herb border-dark-brown text-dark-brown/95 min-w-250">
      <HerbDragPreview herbs={herbs} />
      <MainLayout
        herbs={herbs}
        potHerbs={potHerbs}
        setPotHerbs={setPotHerbs}
        boiledTeas={boiledTeas}
        setBoiledTeas={setBoiledTeas}
      />
    </div>
  );
}

export default App;
