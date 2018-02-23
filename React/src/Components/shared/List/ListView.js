import React from 'react';
import {func} from 'prop-types';
import {map} from 'lodash';
import {
  compose,
  setPropTypes,
  withHandlers
} from 'recompose';
import './ListView.css';

const enhance = compose(
	setPropTypes({
		renderRow: func
	}),
	withHandlers({
		handlerRender: ({renderRow}) => (item) => {
			return (
				<div className="item" key={item.index}>
					{renderRow(item.name, item.index)}
				</div>
			)
		}
	})
);

export const ListView = enhance(({renderRow, rows, handlerRender}) => {
	return (
		<div>
			{map(rows, handlerRender)}
	    </div>
	);
});
