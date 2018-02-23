import React from 'react';
import {Span} from './Span';
import renderer from 'react-test-renderer';

it('renders Span', () => {
  const span = renderer
    .create(<Span>Cadastrar</Span>)
    .toJSON();
  expect(span).toMatchSnapshot();
});