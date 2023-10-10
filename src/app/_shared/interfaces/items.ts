export interface Items {
    definition: ItemDefinition;
    title: Description;
    description?: Description;
}

export interface ItemDefinition {
    item: Item;
    useEffects: UseEffect[];
    useCriticalEffects: Effect[];
    equipEffects: Effect[];
}

export interface Effect {
    effect: EquipEffectEffect;
    subEffects?: EquipEffectSubEffect[];
}

export interface EquipEffectEffect {
    definition: EffectDefinition;
    description?: Description;
}

export interface EffectDefinition {
    id: number;
    actionId: number;
    areaShape: number;
    areaSize: number[];
    params: number[];
}

export interface Description {
    fr: string;
    en: string;
    es: string;
    pt: string;
}

export interface EquipEffectSubEffect {
    effect: PurpleEffect;
}

export interface PurpleEffect {
    definition: EffectDefinition;
}

export interface Item {
    id: number;
    level: number;
    baseParameters: BaseParameters;
    useParameters: UseParameters;
    graphicParameters: { [key: string]: number };
    properties: number[];
    sublimationParameters?: SublimationParameters;
    shardsParameters?: ShardsParameters;
}

export interface BaseParameters {
    itemTypeId: number;
    itemSetId: number;
    rarity: number;
    bindType: number;
    minimumShardSlotNumber: number;
    maximumShardSlotNumber: number;
}

export interface ShardsParameters {
    color: number;
    doubleBonusPosition: number[];
    shardLevelingCurve: number[];
    shardLevelRequirement: number[];
}

export interface SublimationParameters {
    slotColorPattern: number[];
    isEpic: boolean;
    isRelic: boolean;
}

export interface UseParameters {
    useCostAp: number;
    useCostMp: number;
    useCostWp: number;
    useRangeMin: number;
    useRangeMax: number;
    useTestFreeCell: boolean;
    useTestLos: boolean;
    useTestOnlyLine: boolean;
    useTestNoBorderCell: boolean;
    useWorldTarget: number;
}

export interface UseEffect {
    effect: EquipEffectEffect;
    subEffects?: UseEffectSubEffect[];
}

export interface UseEffectSubEffect {
    effect: EquipEffectEffect;
}