export interface ResourceTypes {
    definition: Definition;
    title: Title;
}

export interface Definition {
    id: number;
    affectWakfu: boolean;
}

export interface Title {
    fr: string;
    en: string;
    es: string;
    pt: string;
}
