import React from 'react';
import renderer from 'react-test-renderer';

import CustomButton from './src/components/CustomButton';
import TodoHeader from './src/components/TodoHeader';
import App from './App'

describe('<CustomButton />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<CustomButton />).toJSON();
    expect(tree?.children?.length).toBe(1);
  });
});

describe('<TodoHeader />', () => {
  it('has 2 child', () => {
    const tree = renderer.create(<TodoHeader />).toJSON();
    expect(tree?.children?.length).toBe(2);
  });
});

