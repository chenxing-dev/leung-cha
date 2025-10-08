/**
 * 涼茶鋪標題與作者連結
 */
export const ShopTitle: React.FC = () => (
    <div className="relative">
        <h2 className="px-6 bg-paper w-fit border-6 border-red text-red font-black text-7xl leading-normal">涼茶鋪</h2>
        <a href="https://github.com/chenxing-dev/leung-cha"
            className="text-2xl text-center font-bold bg-red text-paper px-2 pb-0.5
            absolute -bottom-5 left-1/2 -translate-x-1/2 hover:text-glow hover:drop-shadow-[0px_2px_2px_var(--color-red)]"
        >陳刑制</a>
    </div>
);

export default ShopTitle;
