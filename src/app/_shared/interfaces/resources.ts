export interface Resources {
    definition: Definition;
    title: Title;
}

export interface Definition {
    id: number;
    resourceType: number;
    isBlocking: boolean;
    idealRainRangeMin: number;
    idealRainRangeMax: number;
    idealTemperatureRangeMin: number;
    idealTemperatureRangeMax: number;
    iconGfxId: number;
    lastEvolutionStep: number;
    usableByHeroes: boolean;
    idealRain: number;
}

export interface Title {
    fr: string;
    en: string;
    es: string;
    pt: string;
}