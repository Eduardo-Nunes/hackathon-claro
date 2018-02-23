import React from 'react';
import {object, string} from 'prop-types';
import {
  compose,
  setPropTypes
} from 'recompose';
import {isEmpty} from 'lodash';
import './InputTextGroup.css';
import {Label, InputText, Span} from '../shared';
// isRequired
const enhance = compose(
	setPropTypes({
		input: object,
		label: string,
		type: string
	})
);

export const InputTextGroup = enhance(({input, type, label, meta, formValid, name}) => {
	const isFields = formValid ? formValid[input.name] : {} ; 
	const {touched, error, warning, initial} = meta;
	const isError = (error === undefined && !isEmpty(isFields)) ;
	return (
		<div className="form-group">
	      <InputText type={type} {...input} validation={{touched, error}} />
	      <span className="form-bar"></span>
	      <Label>{label}</Label>
	      {touched && (error && <Span method={{isError}}>{error}</Span>)}
	    </div>
	);
});
