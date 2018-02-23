import React from 'react';
import {Button} from './Button';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button isLoading={true} disabled={false}>Cadastrar</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});