import React from 'react';
import renderer from 'react-test-renderer';

import CustomButton from './src/components/CustomButton';
import TodoHeader from './src/components/TodoHeader';
import App from './App'

describe('<CustomButton />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<CustomButton buttonText='Test' onPress={() => console.log('Testing')
    } />).toJSON();
    expect(tree?.children.length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});

describe('<TodoHeader />', () => {
  it('has 2 child', () => {
    const tree = renderer.create(<TodoHeader title='Test'/>).toJSON();
    expect(tree?.children.length).toBe(2);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});

