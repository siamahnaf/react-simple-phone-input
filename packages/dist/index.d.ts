import React from 'react';

interface PhoneInputResponseType {
    country: string;
    code: string;
    dialCode: string;
    value: string;
    valueWithoutPlus: string;
}
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
    containerClass?: string;
    buttonClass?: string;
    dropdownClass?: string;
    dropdownListClass?: string;
    dropdownIconClass?: string;
    searchContainerClass?: string;
    searchInputClass?: string;
    searchIconClass?: string;
    inputClass?: string;
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
declare const PhoneInput: ({ placeholder, country, onChange, value, iconComponent, inputProps, onlyCountries, excludeCountries, preferredCountries, showDropdownIcon, dialCodeInputField, search, disableDropdownOnly, disableInput, searchPlaceholder, showSearchIcon, searchIconComponent, searchProps, searchNotFound, containerClass, buttonClass, dropdownClass, dropdownListClass, dropdownIconClass, searchContainerClass, searchInputClass, searchIconClass, inputClass, containerStyle, buttonStyle, dropdownStyle, dropdownListStyle, dropdownIconStyle, searchContainerStyle, searchInputStyle, searchIconStyle, inputStyle }: Props) => JSX.Element;

export { PhoneInput };
