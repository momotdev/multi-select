import MultiSelect from "./components/MultiSelect/MultiSelect";
import './styles/app.css';
import {useState} from "react";

function App() {
	const [selectedOptions, setSelectedOptions] = useState(['ADMIN', 'USER']);

	const options = [
		{value: 'ADMIN', label: 'Admin', badgeColor: '#ff6666'},
		{value: 'USER', label: 'User'},
		{value: 'MANAGER', label: 'Manager'},
		{value: 'DELIVERY', label: 'Delivery', badgeColor: '#009999'},
	]

	const onChange = (value) => {
		setSelectedOptions(value.filter(option => option.selected).map(option => option.value));
	}

	return (
		<div className="app">
			<div className="content">
				<MultiSelect options={options}
							 selectedOptions={selectedOptions}
							 onChange={onChange}/>
			</div>
		</div>
	);
}

export default App;
