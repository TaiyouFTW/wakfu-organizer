export interface ItemTypes {
    definition: Definition;
    title?: Title;
}

export interface Definition {
    id: number;
    parentId?: number;
    equipmentPositions: string[];
    equipmentDisabledPositions: string[];
    isRecyclable: boolean;
    isVisibleInAnimation: boolean;
}

export interface Title {
    fr: string;
    en: string;
    es: string;
    pt: string;
}