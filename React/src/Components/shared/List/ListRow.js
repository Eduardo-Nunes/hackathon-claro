import React from 'react';
import {number, func} from 'prop-types';
import {
  compose,
  setPropTypes,
  withHandlers
} from 'recompose';

import './ListRow.css';


const enhance = compose(
	setPropTypes({
		rowId: number,
		handlerClickRow: func
	}),
	withHandlers({
		handlerClick: ({rowId, handlerClickRow}) => () => {
			handlerClickRow(rowId);
		},
		handlerDelete: ({rowId, handlerDelete}) => () => {
			handlerDelete(rowId);
		}
	})
);

export const ListRow = enhance(({children, handlerClick, handlerDelete}) => {
	return (
		<div>
			<div onClick={handlerClick}>
				{children}
		    </div>
		    <div onClick={handlerDelete} className="close"></div>	
		</div>
	);
});
