// 配方定义和匹配逻辑
export const RECIPES = [
    {
        name: '五花茶',
        herbs: ['chrysanthemum', 'kapok_flower', 'frangipani', 'sophora_flower', 'honeysuckle'],
        description: '清热解毒，消暑降火',
    },
    {
        name: '菊花茶',
        herbs: ['chrysanthemum'],
        description: '清肝明目，疏散风热',
    },
    {
        name: '金银花茶',
        herbs: ['honeysuckle'],
        description: '清热解毒，消炎退肿',
    },
    {
        name: '参杞茶',
        herbs: ['ginseng', 'goji'],
        description: '补气养血，益精明目',
    },
    {
        name: '罗汉果茶',
        herbs: ['monk_fruit'],
        description: '润肺止咳，生津止渴',
    },
    {
        name: '薄荷茶',
        herbs: ['mint', 'liquorice'],
        description: '疏风散热，清利咽喉',
    },
    {
        name: '决明子菊花茶',
        herbs: ['cassia_seed', 'chrysanthemum'],
        description: '清肝明目，润肠通便',
    },
    {
        name: '桑菊饮',
        herbs: ['mulberry_leaf', 'chrysanthemum'],
        description: '疏风清热，宣肺止咳',
    },
    {
        name: '归脾汤',
        herbs: ['angelica', 'longan', 'ginseng', 'bai_shu'],
        description: '补血养心，健脾安神',
    },
    {
        name: '双花饮',
        herbs: ['honeysuckle', 'chrysanthemum'],
        description: '清热解毒，疏风解表',
    },
    {
        name: '甘草茶',
        herbs: ['liquorice'],
        description: '补脾益气，清热解毒',
    },
    {
        name: '木棉茶',
        herbs: ['kapok_flower', 'liquorice'],
        description: '清热利湿，解毒止血',
    },
    {
        name: '鸡蛋花茶',
        herbs: ['frangipani'],
        description: '清热利湿，润肺解毒',
    },
    {
        name: '槐花茶',
        herbs: ['sophora_flower'],
        description: '凉血止血，清肝泻火',
    },
    {
        name: '桂圆姜茶',
        herbs: ['longan', 'ginger'],
        description: '温中补血，驱寒暖身',
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
