<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-white.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-black.png">
  <img alt="Siam Ahnaf" src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-black.png" height="auto" width="240">
</picture>

React Simple Phone Input
==========

A simple and customizable react phone number dropdown component. It can mix up with your designed theme and give a fluent vibe able dropdown area in your next project.

## Features
- SSR Friendly
- Customizable
- Multi Design
- Search Country
- Smallest Bundle Size (About 98kb)
- Typescript support

## Installation

```shell-script
$ pnpm i react-simple-phone-input
```

## Usage

```jsx
import { PhoneInput, PhoneInputResponseType } from "react-simple-phone-input";
import "react-simple-phone-input/dist/index.css";

<PhoneInput
    country="US"
    placeholder="Add your phone"
    onChange={(data: PhoneInputResponseType) => console.log(data)}
/>
```
#### [See Demo](https://react-phone-input.siamahnaf.com/)

## Options
<table width="100%">
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th width="30%"> Description </th>
    <th> Is Required </th>
    <th> Example </th>
  </tr>
  <tr>
    <td> country </td>
    <td> string </td>
    <td> initial country </td>
    <td> required </td>
    <td> "BD" </td>
  </tr>
   <tr>
    <td> placeholder </td>
    <td> string </td>
    <td> Input Field Placeholder Text </td>
    <td> required </td>
    <td> <code>Type your phone number</code> </td>
  </tr>
  <tr>
    <td> value </td>
    <td> string </td>
    <td> Input field state value or default value </td>
    <td> optional </td>
    <td></td>
  </tr>
  
  <tr>
    <td> iconComponent </td>
    <td> ReactNode </td>
    <td> Dropdown Icon component for changing default icon </td>
    <td> optional </td>
    <td><code> &lt;Icon icon=&quot;icon-name&quot; /&gt; </code></td>
  </tr>
  
   <tr>
    <td> inputProps </td>
    <td> InputHTMLAttributes </td>
    <td> Props to pass into the input field </td>
    <td> optional </td>
    <td> </td>
  </tr>

  <tr>
    <td> onlyCountries </td>
    <td> array </td>
    <td> Show only country in dropdown menu with Country Codes </td>
    <td> optional </td>
    <td> ["BD", "US", "AF", "AL"] </td>
  </tr>
  
  <tr>
    <td> excludeCountries </td>
    <td> array </td>
    <td> If you want to remove some country to the list. If you give <code>excludeCountries</code> then <code>onlyCountries</code> not works </td>
    <td> optional </td>
    <td> ["AF", "AL"] </td>
  </tr>
  
  <tr>
    <td> preferredCountries </td>
    <td> array </td>
    <td> Country codes to show on the top of the dropdown menu </td>
    <td> optional </td>
    <td> ["BD", "US"] </td>
  </tr>

  <tr>
    <td> searchPlaceholder </td>
    <td> string </td>
    <td> Search input field placeholder </td>
    <td>optional</td>
    <td></td>
  </tr>

  <tr>
    <td> searchIconComponent </td>
    <td> ReactNode </td>
    <td> If <code>search</code> enabled, custom search icon to show on search bar </td>
    <td> optional </td>
    <td><code> &lt;Icon icon=&quot;icon-name&quot; /&gt; </code></td>
  </tr>
  
  <tr>
    <td> searchProps </td>
    <td> InputHTMLAttributes </td>
    <td> Props to pass into the search input field </td>
    <td> optional </td>
    <td> </td>
  </tr>
  
  <tr>
    <td> searchNotFound </td>
    <td> string </td>
    <td> Error message when search result is empty! </td>
    <td> optional </td>
    <td> </td>
  </tr>
</table>

## Other Options

<table>
  <tr>
    <th> Name </th>
    <th> Default </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> showDropdownIcon </td>
    <td> true </td>
    <td> Show or Hide dropdown icon </td>
  </tr>
  <tr>
    <td> dialCodeInputField </td>
    <td> false </td>
    <td> Show calling code into into field or show beside country flag. For more, see <a href="https://react-phone-input.siamahnaf.com/">example</a> </td>
  </tr>
  <tr>
    <td> search </td>
    <td> true </td>
    <td> Show or Hide search input field </td>
  </tr>
  <tr>
    <td> showSearchIcon </td>
    <td> true </td>
    <td> Show or Hide search icon </td>
  </tr>
  <tr>
    <td> disableDropdownOnly </td>
    <td> false </td>
    <td> Disable dropdown menu list </td>
  </tr>
  <tr>
    <td> disableInput </td>
    <td> false </td>
    <td> Disable input field </td>
  </tr>
</table>

## Event

<table>
  <tr>
    <th> Event Name </th>
    <th> Description </th>
    <th> Example </th>
  </tr>
  <tr>
    <td> onChange </td>
    <td> To get the value from component. You get following field
        <ul>
            <li><code>country</code></li>
            <li><code>code</code></li>
            <li><code>dialCode</code></li>
            <li><code>value</code></li>
            <li><code>valueWithoutPlus</code></li>
         </ul>
    </td>
    <td> <code>onChange={(data: PhoneInputResponseType) => console.log(data)}</code> </td>
  </tr>
</table>

## ClassName

<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> containerClass </td>
    <td> string </td>
    <td> class name for container </td>
  </tr>
  <tr>
    <td> buttonClass </td>
    <td> string </td>
    <td> class name for dropdown button </td>
  </tr>
  <tr>
    <td> dropdownClass </td>
    <td> string </td>
    <td> class name for dropdown area/menu </td>
  </tr>
  <tr>
    <td> dropdownListClass </td>
    <td> string </td>
    <td> class name for dropdown list </td>
  </tr>
  <tr>
    <td> dropdownIconClass </td>
    <td> string </td>
    <td> class name for dropdown icon </td>
  </tr><tr>
    <td> searchContainerClass </td>
    <td> string </td>
    <td> class name for search bar container </td>
  </tr>
  <tr>
    <td> searchInputClass </td>
    <td> string </td>
    <td> class name for search input field </td>
  </tr>
  <tr>
    <td> searchIconClass </td>
    <td> string </td>
    <td> class name for search icon </td>
  </tr>
  <tr>
    <td> inputClass </td>
    <td> string </td>
    <td> class name for search icon </td>
  </tr>
</table>

## Customize styles

<table>
  <tr>
    <th> Name </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> containerStyle </td>
    <td> phone Input Container style </td>
  </tr>
  <tr>
    <td> buttonStyle </td>
    <td> style for dropdown button </td>
  </tr>
  <tr>
    <td> dropdownStyle </td>
    <td> style for dropdown menu/area </td>
  </tr>
  <tr>
    <td> dropdownListStyle </td>
    <td> style for dropdown list </td>
  </tr>
  <tr>
    <td> dropdownIconStyle </td>
    <td> style for dropdown icon </td>
  </tr>
  <tr>
    <td> searchContainerStyle </td>
    <td> search container style </td>
  </tr>
  <tr>
    <td> searchInputStyle </td>
    <td> search input field style </td>
  </tr>
  <tr>
    <td> searchIconStyle </td>
    <td> search icon style </td>
  </tr>
  <tr>
    <td> inputStyle </td>
    <td> input field style </td>
  </tr>
</table>

`note:` version 6 released. see the [changelogs](https://github.com/siamahnaf198/react-simple-phone-input/releases/tag/v6.0.0)

## Issues or correction
If you face any issues, missing data or wrong data about country, you are welcome to create an issue.

## Connect with me
<div style="display: flex; align-items: center; gap: 3px;">
<a href="https://wa.me/8801611994403"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/whatsapp.png" width="40" height="40"></a>
<a href="https://siamahnaf.com/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/web.png" width="40" height="40"></a>
<a href="https://www.linkedin.com/in/siamahnaf/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/linkedin.png" width="40" height="40"></a>
<a href="https://x.com/siamahnaf198" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/x.png" width="40" height="40"></a>
<a href="https://www.facebook.com/siamahnaf198/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/facebook.png" width="40" height="40"></a>
<a href="https://t.me/siamahnaf198" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/telegram.png" width="40" height="40"></a>
<a href="https://www.npmjs.com/~siamahnaf" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/npm.png" width="40" height="40"></a>
</div>