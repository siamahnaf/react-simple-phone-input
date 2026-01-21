import { countryData } from "../data/country-data";

//Country Data types
export interface CountryDataTypes {
    country: string;
    countryCode: string;
    callingCode: string;
}
//Get default country function
export const getDefaultCountry = (code: string) => {
    const result = countryData.find((item) => item.countryCode === code);
    return result
}
//Get country data by search
export const getBySearch = (search: string, onlyCountry?: string[], excludeCountry?: string[]) => {
    let countries = []
    if (excludeCountry && excludeCountry.length > 0) {
        countries = countryData.filter((item) => !excludeCountry?.includes(item.countryCode));
    } else if (onlyCountry && onlyCountry?.length > 0) {
        countries = countryData.filter((item) => onlyCountry?.includes(item.countryCode));
    } else {
        countries = countryData
    }
    const result = countries.filter((item) => {
        const escapeRegExp = (str: string) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        const regex = new RegExp(escapeRegExp(search), "gi");
        return item.country.match(regex);
    })
    return result;
}
//Get country data by filter
export const getCountryByFilter = (onlyCountry: string[], excludeCountry: string[], preferredCountry: string[]) => {
    let countries = []
    if (excludeCountry && excludeCountry.length > 0) {
        countries = countryData.filter((item) => !excludeCountry?.includes(item.countryCode));
    } else if (onlyCountry && onlyCountry?.length > 0) {
        countries = countryData.filter((item) => onlyCountry?.includes(item.countryCode));
    } else {
        countries = countryData
    }
    const result = countries.sort((a, b) =>
        (Number(preferredCountry?.includes(b.countryCode)) - Number(preferredCountry?.includes(a.countryCode)))
        || (preferredCountry?.indexOf(a.countryCode) - preferredCountry?.indexOf(b.countryCode))
    );
    return result;
}