// 配方定義和匹配邏輯
export const RECIPES = [
    {
        name: '五花茶',
        herbs: ['chrysanthemum', 'kapok_flower', 'frangipani', 'sophora_flower', 'honeysuckle'],
        description: '清熱解毒，消暑降火',
    },
    {
        name: '菊花茶',
        herbs: ['chrysanthemum'],
        description: '清肝明目，疏散風熱',
    },
    {
        name: '金銀花茶',
        herbs: ['honeysuckle'],
        description: '清熱解毒，消炎退腫',
    },
    {
        name: '金銀花薄荷茶',
        herbs: ['honeysuckle', 'mint'],
        description: '清熱解毒，疏風散熱',
    },
    {
        name: '參杞茶',
        herbs: ['ginseng', 'goji'],
        description: '補氣養血，益精明目',
    },
    {
        name: '羅漢果茶',
        herbs: ['monk_fruit'],
        description: '潤肺止咳，生津止渴',
    },
    {
        name: '羅漢果甘草茶',
        herbs: ['monk_fruit', 'liquorice'],
        description: '潤肺止咳，清熱利咽',
    },
    {
        name: '薄荷茶',
        herbs: ['mint', 'liquorice'],
        description: '疏風散熱，清利咽喉',
    },
    {
        name: '決明子菊花茶',
        herbs: ['cassia_seed', 'chrysanthemum'],
        description: '清肝明目，潤腸通便',
    },
    {
        name: '桑菊飲',
        herbs: ['mulberry_leaf', 'chrysanthemum'],
        description: '疏風清熱，宣肺止咳',
    },
    {
        name: '歸脾湯',
        herbs: ['angelica', 'longan', 'ginseng', 'bai_shu'],
        description: '補血養心，健脾安神',
    },
    {
        name: '當歸生薑茶',
        herbs: ['angelica', 'ginger'],
        description: '活血養血，溫經散寒',
    },
    {
        name: '雙花飲',
        herbs: ['honeysuckle', 'chrysanthemum'],
        description: '清熱解毒，疏風解表',
    },
    {
        name: '甘草茶',
        herbs: ['liquorice'],
        description: '補脾益氣，清熱解毒',
    },
    {
        name: '木棉茶',
        herbs: ['kapok_flower', 'liquorice'],
        description: '清熱利濕，解毒止血',
    },
    {
        name: '雞蛋花茶',
        herbs: ['frangipani'],
        description: '清熱利濕，潤肺解毒',
    },
    {
        name: '槐花茶',
        herbs: ['sophora_flower'],
        description: '涼血止血，清肝瀉火',
    },
    {
        name: '桂圓薑茶',
        herbs: ['longan', 'ginger'],
        description: '溫中補血，驅寒暖身',
    },
    {
        name: '桂圓紅棗茶',
        herbs: ['longan', 'ginger'],
        description: '補血安神，溫暖脾胃',
    },
    {
        name: '羅漢果桑菊茶',
        herbs: ['monk_fruit', 'mulberry_leaf', 'chrysanthemum', 'liquorice', 'mint'],
        description: '潤肺止咳，疏風清熱',
    },
    {
        name: '菊花枸杞茶',
        herbs: ['chrysanthemum', 'goji'],
        description: '清肝明目，滋陰補腎',
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
