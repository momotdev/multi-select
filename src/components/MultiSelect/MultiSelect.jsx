import classes from './MultiSelect.module.css';
import {useEffect, useRef, useState} from "react";

const MultiSelect = ({options, onChange}) => {
	const [isListOpen, setIsListOpen] = useState(false);
	const selectStyle = isListOpen ? [classes.select, classes['select--active']] : [classes.select];
	const select = useRef();

	const selectOption = (value) => {
		onChange(options.map(option => option.label === value
			? {...option, selected: true}
			: option
		));

	}

	const deleteOption = (value) => {
		onChange(options.map(option => option.label === value
			? {...option, selected: false}
			: option
		));
	}

	const toggleOptionsList = () => {
		if (options.some(option => option.selected === false)) {
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
		const clickListener = (event) => {
			const target = event.target;
			if (!target.classList.contains(classes.select) && !isDescendant(select.current, target)) {
				setIsListOpen(false);
			}
		}

		window.addEventListener("click", clickListener);
		return () => {
			window.removeEventListener('click', clickListener);
		}
	}, [])

	return (
		<div ref={select} className={selectStyle.join(' ')} onClick={toggleOptionsList}>
			<div className={classes['selected-options-wrapper']}>
				{options.map(option => option.selected
					? <SelectedOption key={option.value} value={option.label} onDelete={deleteOption}/>
					: null
				)}
			</div>
			<div className={classes['arrow-wrapper']}>
				<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24">
					<path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
				</svg>
			</div>
			<div className={classes["options-wrapper"]}>
				{options.map(option => option.selected
					? null
					: <div key={option.value} onClick={() => selectOption(option.label)}
						   className={classes.option}>{option.label}</div>
				)}
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