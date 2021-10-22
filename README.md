# multi-select

## Usage

**`<MultiSelect options={options} selectedOptions={selectedOptions} onChange={onChange}/>`**

- options – all options in format:
`[{value: 'ADMIN', label: 'Admin', badgeColor: '#ff6666'}, {value: 'USER', label: 'User'}]`; – **`badgeColor`** is not required;
- selectedOptions – array of selected options in format `['ADMIN', 'USER']`;
- onChange – function, that will be called when user select or delete any option. Returns array with objects in format:

`[{value: 'ADMIN', label: 'Admin', badgeColor: '#ff6666', selected: true},  
{value: 'USER', label: 'User', selected: false}]`
