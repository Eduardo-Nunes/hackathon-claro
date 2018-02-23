import React from 'react';
import './Button.css';

export const Button = props => {
	const {isLoading, children, disabled, ...attr} = props;
	const className = disabled ? 'btn disabled':  'btn default';
	return (
		<button 
			type="button" 
			{...attr}
			disabled={disabled}
			className={className} >
			{ isLoading && (<i className="fa fa-circle-o-notch fa-spin"></i>) }
			{  !isLoading && (children)}
		</button>
	);	
};

