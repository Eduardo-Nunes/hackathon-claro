import React from 'react';
import './Span.css';

export const Span = props => {
	const {method} = props;
	const className = method && method.isError ? '' :'error';
	return (
		<span className={className}>{props.children}</span>
	);
};

