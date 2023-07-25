// Generated by https://quicktype.io
export enum Region{
    Africa = 'Africa',
    America = 'America',
    Asia = 'Asia',
    Europe = 'Europe',
    Oceania = 'Oceania',
}

export interface SmallCountry{    
    name: string;
    cca3: string;
    borders: string[];
}


export interface Country {
    name:         Name;
    cca3:         string;
    cioc?:        string;
    status:       Status;
    unMember:     boolean;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    Subregion;
    languages:    { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}


export interface Currencies {
    EUR?: TartuGecko;
    GIP?: TartuGecko;
    RUB?: TartuGecko;
    HUF?: TartuGecko;
    CHF?: TartuGecko;
    RSD?: TartuGecko;
    GBP?: TartuGecko;
    JEP?: TartuGecko;
    BGN?: TartuGecko;
    DKK?: TartuGecko;
    FOK?: TartuGecko;
    IMP?: TartuGecko;
    MKD?: TartuGecko;
    NOK?: TartuGecko;
    BYN?: TartuGecko;
    ALL?: TartuGecko;
    UAH?: TartuGecko;
    MDL?: TartuGecko;
    ISK?: TartuGecko;
    GGP?: TartuGecko;
    PLN?: TartuGecko;
    RON?: TartuGecko;
    BAM?: BAM;
    CZK?: TartuGecko;
    SEK?: TartuGecko;
}

export interface TartuGecko {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
