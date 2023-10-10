export interface JobsItems {
    definition: Definition;
    title: Description;
    description?: Description;
}

export interface Definition {
    id: number;
    level: number;
    rarity: number;
    itemTypeId: number;
    graphicParameters: { [key: string]: number };
}

export interface Description {
    fr: string;
    en: string;
    es: string;
    pt: string;
}