import React from 'react';
import {object, func} from 'prop-types';
import {
  compose,
  setPropTypes,
  withHandlers,
  lifecycle
} from 'recompose';
import {connect} from 'react-redux';
import {getUsers, deleteUser, synchronizeUserWithLocalStore} from '../../actions';
import {ListView, ListRow} from '../../Components/shared'
import './ListUser.css';

const enhance = compose(
	connect(({person}) =>({
		person
	}),
	{
		getUsers,
		deleteUser,
		synchronizeUserWithLocalStore
	}),
	setPropTypes({
		getUsers: func.isRequired,
		person: object.isRequired,
		synchronizeUserWithLocalStore: func.isRequired
	}),
	withHandlers({
		handlerRender: ({deleteUser}) => (name, index) => {
			const handlerClickRow = (id) => {
				
			}
			const handlerDelete = (id) => {
				deleteUser(id);
			}

			return (
				<ListRow 
					rowId={index}
					handlerClickRow={handlerClickRow}
					handlerDelete={handlerDelete}>
					{name}
				</ListRow>
			)
		},
		handlerRouter: ({router}) => () => {
			router.push('/users');
		}
	}),
	lifecycle({
		async componentWillMount() {
			await this.props.synchronizeUserWithLocalStore();
			this.props.getUsers(); 
		}
	})
);
export const ListUser = enhance(({person, handlerRender, handlerClickRow, handlerRouter}) => {
	return (
		<div>
			<div className="wrapper">
				<h1 className="display">Usuários</h1>
				<ListView 
					rows={person.byIndex}
					renderRow={handlerRender}
				/>
			</div>
			<div>
				<button className="botonF1" onClick={handlerRouter}></button>
			</div>	
		</div>
		
	);
});