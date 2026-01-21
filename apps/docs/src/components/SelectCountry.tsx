"use client"
import { PhoneInput } from "react-simple-phone-input";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import "react-simple-phone-input/dist/index.css";

//Components
import CodeBlock from "./CodeBlock";

const SelectCountry = () => {
    return (
        <div className="grid grid-cols-3 mt-12 gap-7">
            <CodeBlock
                title="Basic Example"
                code={BasicExample}
            >
                <PhoneInput
                    country="AI"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                />
            </CodeBlock>
            <CodeBlock
                title="Country Code in Input Field"
                code={DialCodeInput}
            >
                <PhoneInput
                    country="US"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                    dialCodeInputField
                />
            </CodeBlock>
            <CodeBlock
                title="Custom Dropdown Icon"
                code={IconComponent}
            >
                <PhoneInput
                    country="US"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                    dialCodeInputField
                    iconComponent={<IconChevronDown size={20} />}
                />
            </CodeBlock>
            <CodeBlock
                title="Only Include some country"
                code={onlyCountry}
            >
                <PhoneInput
                    country="US"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                    dialCodeInputField
                    onlyCountries={["BD", "AF", "US"]}
                />
            </CodeBlock>
            <CodeBlock
                title="Exclude Some Country from the list"
                code={excludeCountry}
            >
                <PhoneInput
                    country="US"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                    dialCodeInputField
                    excludeCountries={["BD", "AF", "AL"]}
                />
            </CodeBlock>
            <CodeBlock
                title="Preferred country to show on top"
                code={PreferredCountry}
            >
                <PhoneInput
                    country="US"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                    dialCodeInputField
                    onlyCountries={["BD", "AF", "US"]}
                    preferredCountries={["BD", "AF"]}
                />
            </CodeBlock>
            <CodeBlock
                title="Show or Hide Search"
                code={SearchShow}
            >
                <PhoneInput
                    country="US"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                    dialCodeInputField
                    search={false}
                />
            </CodeBlock>
            <CodeBlock
                title="Change your search icon"
                code={SearchIcon}
            >
                <PhoneInput
                    country="US"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                    dialCodeInputField
                    searchIconComponent={<IconSearch size={20} />}
                />
            </CodeBlock>
            <CodeBlock
                title="Custom search input placeholder"
                code={SearchByCountry}
            >
                <PhoneInput
                    country="US"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                    dialCodeInputField
                    searchPlaceholder="Search by country"
                />
            </CodeBlock>
            <CodeBlock
                title="Disable Dropdown Menu/area"
                code={DisableDropdown}
            >
                <PhoneInput
                    country="AI"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                    disableDropdownOnly
                    searchPlaceholder="Search by country"
                />
            </CodeBlock>
            <CodeBlock
                title=" Disable all (dropdown and input field)"
                code={DisableInput}
            >
                <PhoneInput
                    country="AI"
                    placeholder="Add your phone"
                    onChange={(data) => console.log(data)}
                    disableInput
                    disableDropdownOnly
                    searchPlaceholder="Search by country"
                />
            </CodeBlock>
        </div>
    );
};

export default SelectCountry;


const BasicExample =
    `
<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
/>

`
const DialCodeInput =
    `
<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
/>
`
const IconComponent =
    `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  iconComponent={<IconChevronDown size={20} />}
/>`
const onlyCountry =
    `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  onlyCountries={["BD", "AF", "US"]}
/>`
const excludeCountry =
    ` <PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  excludeCountries={["BD", "AF", "AL"]}
/>`
const PreferredCountry =
    `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  preferredCountries={["BD", "AF", "AL"]}
/>`
const SearchShow =
    `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  search={false}
/>`
const SearchIcon =
    `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  searchIconComponent={<Icon icon="ic:baseline-search" />}
/>`
const SearchByCountry =
    `<PhoneInput
  country="US"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  dialCodeInputField
  searchPlaceholder="Search by country"
/>`
const DisableDropdown =
    `
<PhoneInput
  country="AI"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  disableDropdownOnly
  searchPlaceholder="Search by country"
/>`
const DisableInput =
    `<PhoneInput
  country="AI"
  placeholder="Add your phone"
  onChange={(data) => console.log(data)}
  disableInput
  disableDropdownOnly
  searchPlaceholder="Search by country"
/>`