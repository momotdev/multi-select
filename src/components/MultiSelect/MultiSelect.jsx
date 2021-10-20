import classes from './MultiSelect.module.css';
import {useEffect, useRef, useState} from "react";

const MultiSelect = ({options, onChange}) => {
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [activeOptions, setActiveOptions] = useState(options);
	const [isListOpen, setIsListOpen] = useState(false);
	const selectStyle = isListOpen ? [classes.select, classes['select--active']] : [classes.select];
	const select = useRef();

	const selectOption = (value) => {
		if (selectedOptions.indexOf(value) === -1) {
			setSelectedOptions([...selectedOptions, value]);
			setActiveOptions(activeOptions.filter(option => option.label !== value))
		}
	}

	const deleteOption = (value) => {
		if (selectedOptions.indexOf(value) !== -1) {
			setSelectedOptions(selectedOptions.filter(option => option !== value));
		}
	}

	const toggleOptionsList = () => {
		if (activeOptions.length) {
			setIsListOpen(!isListOpen);
		}
	}

	const isDescendant = (parent, child) => {
		let node = child.parentNode;
		while (node != null) {
			if (node === parent) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	}

	useEffect(() => {
		setActiveOptions(options.filter(option => !selectedOptions.some(o => o === option.label)));
		onChange(options.filter(option => selectedOptions.some(o => o === option.label)));
	}, [selectedOptions, options, onChange])

	useEffect(() => {
		window.addEventListener("click", (event) =>  {
			const target = event.target;
			if (!target.classList.contains(classes.select) && !isDescendant(select.current, target)) {
				setIsListOpen(false);
			}
		});
	}, [])

	return (
		<div ref={select} className={selectStyle.join(' ')} onClick={toggleOptionsList}>
			<div className={classes['selected-options-wrapper']}>
				{selectedOptions.map(option => <SelectedOption key={option} value={option} onDelete={deleteOption}/>)}
			</div>
			<div className={classes['arrow-wrapper']}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
			</div>
			<div className={classes["options-wrapper"]}>
				{activeOptions.map(option => <div key={option.value} onClick={() => selectOption(option.label)}
												  className={classes.option}>{option.label}</div>)}
			</div>
		</div>
	);
};

const SelectedOption = ({value, onDelete}) => {
	return (
		<div className={classes['selected-option']}>
			<div className={classes['selected-option-label']} onClick={(e) => {
				e.stopPropagation();
			}}>{value}</div>
			<div className={classes['selected-option-delete']} onClick={(e) => {
				e.stopPropagation();
				onDelete(value);
			}}>&times;</div>
		</div>
	)
}

export default MultiSelect;