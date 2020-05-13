declare type ISO31661Map = {
    [key: string]: {
        en: string;
        es: string;
        zh: string;
        locale: string;
        code: number;
    };
}

declare const iso31661map: ISO31661Map

export default iso31661map;
export {};
