import MultiSelect from "./components/MultiSelect/MultiSelect";
import './styles/app.css';

function App() {
	const options = [
		{value: 'ADMIN', label: 'Admin'},
		{value: 'USER', label: 'User'},
		{value: 'MANAGER', label: 'Manager'},
		{value: 'DELIVERY', label: 'Delivery'},
	]

	const onChange = (value) => {
		console.log(value)
	}

	return (
		<div className="app">
			<div className="content">
				<MultiSelect options={options} selectedOpts={['Admin', 'Manager']} onChange={onChange} />
			</div>
		</div>
	);
}

export default App;
