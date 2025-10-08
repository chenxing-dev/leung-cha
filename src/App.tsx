import { useState, useEffect } from "react";
import { HerbDragPreview } from './components/HerbDragPreview';
import MainLayout from './components/MainLayout';
import { type BoiledTea } from './components/PotArea';
import ChineseFrame from "./components/ChineseFrame";
import ShopTitle from "./components/ShopTitle";

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
  const [screenTooSmall, setScreenTooSmall] = useState(false);

  // 檢查螢幕尺寸
  useEffect(() => {
    function checkSize() {
      setScreenTooSmall(window.innerWidth < 1024 || window.innerHeight < 648);
    }
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (screenTooSmall) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-mossy text-inkstone text-3xl font-bold">
        <ShopTitle />
        <ChineseFrame className="mx-4 my-8">
          <div className="px-6 py-4">
            <p className="text-center text-2xl mb-2">螢幕過小</p>
            <p className="text-xl text-center">請使用寬度大於1024px高度大於648px的螢幕進行體驗</p>
          </div>
        </ChineseFrame>
      </div>
    );
  }

  return (
    <div
      className="min-w-[1024px] w-full min-h-[648px] h-screen max-h-screen overflow-x-auto overflow-y-hidden 
      p-3 text-4xl font-serif font-semibold
      bg-mossy border-inkstone text-inkstone/95"
    >
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
