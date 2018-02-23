import React from 'react';
import './InputText.css';

export const InputText = props => {
	const {validation} = props;
	const className = validation.touched && validation.error ? 'border-error control' :'control';
	return (
		<input {...props} className={className} required />
	);	
};

