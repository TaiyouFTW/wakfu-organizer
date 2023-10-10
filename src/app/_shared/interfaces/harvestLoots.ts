export interface HarvestLoots {
    id: number;
    itemId: number;
    quantity: number;
    requiredProspection: number;
    dropRate: number;
    listId: number;
    quantityPerItem: number;
    quantityMin: number;
    quantityMax: number;
    maxRoll: number;
    itemIsLootList: boolean;
}