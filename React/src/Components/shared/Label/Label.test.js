import React from 'react';
import {Label} from './Label';
import renderer from 'react-test-renderer';

it('renders Label', () => {
  const tree = renderer
    .create(<Label>Cadastrar</Label>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});