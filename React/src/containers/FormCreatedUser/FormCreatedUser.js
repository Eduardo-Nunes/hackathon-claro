import React from 'react';
import {object, func} from 'prop-types';
import {Field, reduxForm} from 'redux-form'
import {
  compose,
  setPropTypes,
  withState,
  withHandlers
} from 'recompose';
import {connect} from 'react-redux';

import {Button} from '../../Components/shared';
import {InputTextGroup} from '../../Components/InputTextGroup';
import {saveUser} from '../../actions';
import {required, email, cpf, maxLength3, number, maxLength11} from './UserValidationForm';
import './FormCreatedUser.css';
// isRequired
const enhance = compose(
	connect(({form}) => ({form}),{saveUser}),
	setPropTypes({
		form: object.isRequired,
		saveUser: func.isRequired
	}),
	withState('loading', 'setLoading', false),
	withHandlers({
		handlerSubmit: ({form, setLoading, saveUser, router}) => () => {
			setLoading(true);
			setTimeout(()=> {
				const {values} = form.FormCreatedUserForm;
				saveUser(values);
				setLoading(false);
				router.push('/');
			},1000);
			
		}
	})
);
const FormCreatedEnhance = enhance(({ handlerSubmit, invalid, pristine, reset, submitting, form, loading }) => {
	const formUser = form.FormCreatedUserForm;
	const fields = formUser ? form.FormCreatedUserForm.fields : null;
	return (
		<div>
			<div>
				<h1 className="display">Cadastro usuário</h1>
			</div>
			<form>
				<Field
		        	name="name"
			        type="text"
			        component={InputTextGroup}
			        label="Nome completo (sem abreviação)"
			        formValid={fields}
			        validate={[maxLength3]}
			      />
			      <Field
		        	name="phone"
			        type="text"
			        component={InputTextGroup}
			        label="Telefone"
			        formValid={fields}
			        validate={[required, number, maxLength11]}
			        maxlength="11"
			      />
			      <Field
		        	name="cpf"
			        type="text"
			        component={InputTextGroup}
			        label="CPF"
			        formValid={fields}
			        validate={[cpf]}
			        maxlength="11"
			      />
			      <Field
		        	name="email"
			        type="text"
			        component={InputTextGroup}
		        label="Email"
		        formValid={fields}
		        validate={[email, required]}
		        maxlength="50"
		      />
		      <Button isLoading={loading} disabled={invalid} onClick={handlerSubmit}>
	      		Cadastrar
		      </Button>
		</form>
		</div>
		
	);
});

export const FormCreatedUser =  reduxForm({
	form: 'FormCreatedUserForm'
})(FormCreatedEnhance);