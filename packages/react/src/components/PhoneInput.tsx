"use client"
import React from "react";
import { twMerge } from "tailwind-merge";

//Helper function
import { getDefaultCountry, getBySearch, getCountryByFilter, CountryDataTypes } from "../utils/country-helper";

//Custom Hook
import { useClickOutside } from "../utils/hook";

//Country Data
import { countryData } from "../data/country-data";

//Data types
export interface PhoneInputResponseType {
    country: string;
    code: string;
    dialCode: string;
    value: string;
    valueWithoutPlus: string;
}

//Props Types
interface Props {
    placeholder: string;
    country: string;
    onChange: (e: PhoneInputResponseType) => void;
    value?: string;
    iconComponent?: React.ReactNode;
    inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    onlyCountries?: string[];
    excludeCountries?: string[];
    preferredCountries?: string[];
    showDropdownIcon?: boolean;
    dialCodeInputField?: boolean;
    disableDropdownOnly?: boolean;
    disableInput?: boolean;
    search?: boolean;
    searchPlaceholder?: string;
    showSearchIcon?: boolean;
    searchIconComponent?: React.ReactNode;
    searchProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    searchNotFound?: string;
    //Class
    containerClass?: string;
    buttonClass?: string;
    dropdownClass?: string;
    dropdownListClass?: string;
    dropdownIconClass?: string;
    searchContainerClass?: string;
    searchInputClass?: string;
    searchIconClass?: string;
    inputClass?: string;
    //Styles
    containerStyle?: React.CSSProperties;
    buttonStyle?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
    dropdownListStyle?: React.CSSProperties;
    dropdownIconStyle?: React.CSSProperties;
    searchContainerStyle?: React.CSSProperties;
    searchInputStyle?: React.CSSProperties;
    searchIconStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
}
//Selected types
interface SelectedTypes {
    country: string;
    callingCode: string;
    countryCode: string;
}

//Component
const PhoneInput = ({ placeholder, country, onChange, value, iconComponent, inputProps, onlyCountries, excludeCountries, preferredCountries, showDropdownIcon = true, dialCodeInputField = false, search = true, disableDropdownOnly = false, disableInput = false, searchPlaceholder = "Search country", showSearchIcon = true, searchIconComponent, searchProps, searchNotFound = "No results found. Try a different keyword.", containerClass, buttonClass, dropdownClass, dropdownListClass, dropdownIconClass, searchContainerClass, searchInputClass, searchIconClass, inputClass, containerStyle, buttonStyle, dropdownStyle, dropdownListStyle, dropdownIconStyle, searchContainerStyle, searchInputStyle, searchIconStyle, inputStyle }: Props) => {
    //State
    const [selected, setSelected] = React.useState<SelectedTypes>({} as SelectedTypes);
    const [isDropdown, setDropdown] = React.useState<boolean>(false);
    const [inputValue, setInputValue] = React.useState<string>(value as string || "");
    const [countryDataInfo, setCountryData] = React.useState<CountryDataTypes[]>(countryData);
    const [cursor, setCursor] = React.useState<number>(0);

    //Ref
    const listRef = React.useRef<HTMLUListElement | null>(null);
    const dropdownRef = useClickOutside(() => setDropdown(false));

    //Handler
    //---Input Onchange Handler//
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyNumber = e.target.value.replace(/\D/g, '')
        if (dialCodeInputField) {
            onChange({
                country: selected.country,
                code: selected.countryCode,
                dialCode: selected.callingCode,
                value: "+" + onlyNumber,
                valueWithoutPlus: onlyNumber
            })
            setInputValue("+" + onlyNumber)
        } else {
            setInputValue(onlyNumber)
            onChange({
                country: selected.country,
                code: selected.countryCode,
                dialCode: selected.callingCode,
                value: selected.callingCode + onlyNumber,
                valueWithoutPlus: selected.callingCode.replace("+", "") + onlyNumber
            })
        }
    }
    //---On Dropdown Handler//
    const onDropdownHandler = () => {
        if (!disableDropdownOnly) {
            setDropdown(!isDropdown)
        }
    }
    //---Search Input Onchange Handler//
    const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        setCountryData(getBySearch(search, onlyCountries, excludeCountries))
    }
    //---Set Selected Handler//
    const handleSelected = (item: SelectedTypes, i: number) => {
        if (dialCodeInputField) {
            const result = inputValue?.replace(selected.callingCode, item.callingCode)
            setInputValue(result.length > 0 ? result : item.callingCode);
            onChange({
                country: item.country,
                code: item.countryCode,
                dialCode: item.callingCode,
                value: result.length > 0 ? result : item.callingCode,
                valueWithoutPlus: result.length > 0 ? result.replace("+", "") : item.callingCode.replace("+", "")
            })
        } else {
            onChange({
                country: item.country,
                code: item.countryCode,
                dialCode: item.callingCode,
                value: item.callingCode + inputValue,
                valueWithoutPlus: item.callingCode.replace("+", "") + inputValue
            })
        }
        setSelected(item);
        setDropdown(false);
        setCursor(i)
    }
    //---Scroll To View Handler//
    const scrollIntoView = (position: number) => {
        if (search) {
            if (countryDataInfo.length > 0) {
                listRef.current?.scrollTo({
                    top: position,
                    behavior: "smooth"
                })
            }
        }
    };
    //---Keyboard Navigation//
    const keyBoardNav = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (isDropdown) {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setCursor(c => (c < countryDataInfo.length - 1 ? c + 1 : c))
            }
            if (e.key === "ArrowUp") {
                e.preventDefault();
                setCursor(c => (c > 0 ? c - 1 : 0))
            }
            if (e.key === "Escape") {
                setDropdown(false);
            }
            if (e.key === "Enter" && cursor >= 0) {
                setSelected(countryDataInfo[cursor]);
                setDropdown(false)
            }
        }
    }
    //React Hook
    //---Scroll to view hook//
    React.useEffect(() => {
        if (cursor < 0 || cursor > countryDataInfo.length || !listRef) {
            return () => {
            };
        }
        if (isDropdown && listRef) {
            if (countryDataInfo.length > 0) {
                let listItems = Array.from(listRef.current?.children as HTMLCollection) as HTMLElement[];
                listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop - 65);
            }
        }
    }, [cursor]);

    //---Dial Code Field Effect//
    React.useMemo(() => {
        if (dialCodeInputField) {
            const result = inputValue?.replace(selected.callingCode, (getDefaultCountry(country) as SelectedTypes).callingCode);
            console.log(result)
            setInputValue(result.length > 0 ? result : (getDefaultCountry(country) as SelectedTypes).callingCode);
        }
        setSelected(getDefaultCountry(country) as SelectedTypes)
    }, [country, dialCodeInputField])

    //---Country search hook//
    React.useMemo(() => {
        setCountryData(getCountryByFilter(onlyCountries as string[], excludeCountries as string[], preferredCountries as string[]))
    }, [onlyCountries, excludeCountries, preferredCountries])

    return (
        <div
            className={twMerge("relative focus:outline-none focus-visible:outline-none focus-within:outline-none", containerClass)}
            onKeyDown={(e) => keyBoardNav(e)}
            tabIndex={-1}
            style={containerStyle}
        >
            <div
                className="flex border border-solid border-gray-200 select-none rounded-lg"
            >
                <div className="cursor-pointer flex items-center bg-gray-100/60 border-r border-solid border-gray-200" ref={dropdownRef}>
                    <div
                        onClick={onDropdownHandler}
                        className={twMerge("flex flex-1 w-24 py-2.5 pl-2.5 pr-px  items-center", `${dialCodeInputField ? "w-auto pr-4" : ""}`, buttonClass)}
                        style={buttonStyle}
                    >
                        <img
                            src={`https://flagcdn.com/256x192/${selected.countryCode?.toLowerCase()}.png`}
                            alt={selected.country}
                            width="20px"
                            className="mr-1.5"
                        />
                        {!dialCodeInputField &&
                            <span className="flex-1 text-sm mt-0.5">
                                {selected.callingCode}
                            </span>
                        }
                        {showDropdownIcon && !disableDropdownOnly &&
                            <div
                                className={twMerge("flex items-center justify-center", dropdownIconClass)}
                                style={dropdownIconStyle}
                            >
                                {iconComponent ? iconComponent : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                        className={`transition-all  duration-300 ease-in-out ${isDropdown ? "-rotate-180" : ""}`}
                                    >
                                        <path fill="currentColor" d="m7 10l5 5l5-5z" />
                                    </svg>

                                )}
                            </div>
                        }
                    </div>
                    <ul
                        className={twMerge("bg-white list-none p-0 m-0 absolute top-full mt-1.5 left-0 right-0 h-75 z-99 overflow-auto shadow-[0_1px_2px_rgba(0,0,0,0.06),0_10px_25px_rgba(0,0,0,0.08)] border border-gray-200 rounded-xl transition-all duration-300", `${isDropdown ? "translate-y-0 opacity-100 visible" : "-translate-y-1.25 opacity-0 invisible"}`, dropdownClass)}
                        ref={listRef}
                        style={dropdownStyle}
                    >
                        {search &&
                            <div
                                className={twMerge("m-2.5 relative", searchContainerClass)}
                                style={searchContainerStyle}
                            >
                                <input
                                    placeholder={searchPlaceholder}
                                    {...searchProps}
                                    onChange={onSearchHandler}
                                    className={twMerge("border border-solid border-[#0000001e] px-2.5 py-2 w-full text-[15px] rounded-lg focus:outline-none", searchInputClass)}
                                    style={searchInputStyle}
                                />
                                {showSearchIcon &&
                                    <div
                                        className={twMerge("absolute right-2.5 top-1/2 -translate-y-1/2 flex pointer-events-none", searchIconClass)}
                                        style={searchIconStyle}
                                    >
                                        {searchIconComponent ?? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-gray-500"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                                <path d="M21 21l-6 -6" />
                                            </svg>
                                        )}

                                    </div>
                                }
                            </div>
                        }
                        {countryDataInfo.length === 0 &&
                            <div className="text-center mt-4 text-[15px] text-[#f73131]">
                                {searchNotFound}
                            </div>
                        }
                        {countryDataInfo.map((item, i) => (
                            <li
                                key={i}
                                onClick={() => handleSelected(item, i)}
                                className={twMerge("items-center py-1.75 px-3 flex gap-x-2", `${i === cursor ? "bg-gray-200/70" : "hover:bg-gray-100"}`, dropdownListClass)}
                                style={dropdownListStyle}
                            >
                                <img
                                    src={`https://flagcdn.com/256x192/${item.countryCode.toLowerCase()}.png`}
                                    alt={item.country}
                                    className="w-5 h-auto"
                                />
                                <span className="font-[15px] flex-1">
                                    {item.country}
                                </span>
                                <span className="text-gray-500">
                                    {item.callingCode}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <input
                    className={twMerge("w-full px-2.5 focus:outline-none", inputClass)}
                    placeholder={placeholder}
                    onChange={handleChange}
                    type="tel"
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (dialCodeInputField) {
                            const oldVal = inputValue.slice(selected.callingCode.length)
                            if (e.target.value.startsWith(selected.callingCode)) {
                                e.target.value = e.target.value
                            } else {
                                e.target.value = selected.callingCode + oldVal
                            }
                        }
                    }}
                    onKeyDown={(e) => keyBoardNav(e)}
                    value={inputValue}
                    {...inputProps}
                    style={inputStyle}
                    disabled={disableInput}
                />
            </div>
        </div>
    );
};
export default PhoneInput;