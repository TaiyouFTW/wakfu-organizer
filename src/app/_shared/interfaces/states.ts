export interface States {
    definition: Definition;
    title?: Description;
    description?: Description;
}

export interface Definition {
    id: number;
}

export interface Description {
    fr: string;
    en: string;
    es: string;
    pt: string;
}