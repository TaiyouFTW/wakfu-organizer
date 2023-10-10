export interface RecipeCategories {
    definition: Definition;
    title: Title;
}

export interface Definition {
    id: number;
    isArchive: boolean;
    isNoCraft: boolean;
    isHidden: boolean;
    xpFactor: number;
    isInnate: boolean;
}

export interface Title {
    fr: string;
    en: string;
    es: string;
    pt: string;
}