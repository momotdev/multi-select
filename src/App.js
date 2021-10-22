import MultiSelect from "./components/MultiSelect/MultiSelect";
import './styles/app.css';
import {useState} from "react";

function App() {
	const [selectedOptions, setSelectedOptions] = useState(['Admin', 'User']);

	const options = [
		{value: 'ADMIN', label: 'Admin'},
		{value: 'USER', label: 'User'},
		{value: 'MANAGER', label: 'Manager'},
		{value: 'DELIVERY', label: 'Delivery'},
	]

	const onChange = (value) => {
		setSelectedOptions(value.filter(option => option.selected).map(option => option.label));
	}

	const transformSelectedOptionsToObjects = (options, values) => {
		return options.map(option =>
			values.some(o => o === option.label)
				? {...option, selected: true}
				: {...option, selected: false})
	}

	return (
		<div className="app">
			<div className="content">
				<MultiSelect options={transformSelectedOptionsToObjects(options, selectedOptions)}
							 onChange={onChange}/>
			</div>
		</div>
	);
}

export default App;
