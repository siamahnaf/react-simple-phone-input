export interface CountryDataTypes {
    country: string;
    countryCode: string;
    callingCode: string;
}
export declare const getDefaultCountry: (code: string) => {
    country: string;
    countryCode: string;
    callingCode: string;
} | undefined;
export declare const getBySearch: (search: string, onlyCountry?: string[], excludeCountry?: string[]) => {
    country: string;
    countryCode: string;
    callingCode: string;
}[];
export declare const getCountryByFilter: (onlyCountry: string[], excludeCountry: string[], preferredCountry: string[]) => {
    country: string;
    countryCode: string;
    callingCode: string;
}[];
