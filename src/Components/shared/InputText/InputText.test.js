import React from 'react';
import {InputText} from './InputText';
import renderer from 'react-test-renderer';

it('renders input text', () => {
  const touched = true;
  const tree = renderer
    .create(<InputText type='text' validation={touched} />)
    .toJSON();
  // expect(tree).toMatchSnapshot();
});