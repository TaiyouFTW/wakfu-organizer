export interface Actions {
    definition: Definition;
    description?: Description;
}

export interface Definition {
    id: number;
    effect: string;
}

export interface Description {
    fr: string;
    en: string;
    es: string;
    pt: string;
}