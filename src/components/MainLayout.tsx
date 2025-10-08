import { HerbList } from './HerbList';
import { DecorativeDivider } from './DecorativeDivider';
import { PotArea, type BoiledTea } from './PotArea';
import { RecipeInfo } from './RecipeInfo';
import ShopTitle from './ShopTitle';
import GroundGrid from './GroundGrid';

interface MainLayoutProps {
    herbs: { name: string; id: string }[];
    potHerbs: string[];
    setPotHerbs: React.Dispatch<React.SetStateAction<string[]>>;
    boiledTeas: BoiledTea[];
    setBoiledTeas: React.Dispatch<React.SetStateAction<BoiledTea[]>>;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ herbs, potHerbs, setPotHerbs, boiledTeas, setBoiledTeas }) => (
    <div id="layout" className="flex h-full bg-scroll border-6 border-wood">
        <aside className="overflow-x-hidden">
            <HerbList herbs={herbs} />
        </aside>
        <DecorativeDivider />
        <main className="flex-1 flex overflow-hidden relative bg-scroll">
            <GroundGrid />
            <div className="flex flex-col items-center justify-around w-4/7 relative">
                <ShopTitle />
                <PotArea potHerbs={potHerbs} setPotHerbs={setPotHerbs} setBoiledTeas={setBoiledTeas} />
            </div>
            <div className="z-10 mr-8 my-6 flex flex-1">
                <RecipeInfo potHerbs={potHerbs} herbs={herbs} boiledTeas={boiledTeas} />
            </div>
        </main>
    </div>
);

export default MainLayout;
