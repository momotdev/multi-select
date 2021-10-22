# multi-select

## Usage

**`<MultiSelect options={options} selectedOptions={selectedOptions} onChange={onChange}/>`**

- options – all options in format:
`[{value: 'ADMIN', label: 'Admin'}, {value: 'USER', label: 'User'}]`;
- selectedOptions – array of selected options in format `['ADMIN', 'USER']`;
- onChange – function, that will called when user select or delete any option. Returns array with objects in format:

`[{value: 'ADMIN', label: 'Admin', selected: true},  
{value: 'USER', label: 'User', selected: false}]`
