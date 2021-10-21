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
		setSelectedOptions(value);
	}

	const getSelectLabels = (options, values) => {
		return options.filter(option => values.some(o => o === option.label)).map(o => o.label);
	}

	return (
		<div className="app">
			<div className="content">
				<MultiSelect options={options} selectedOpts={getSelectLabels(options, selectedOptions)} onChange={onChange}/>
			</div>
		</div>
	);
}

export default App;
