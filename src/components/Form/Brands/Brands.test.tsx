import React from 'react';
import ReactDOM from 'react-dom';
import Brand from './Brands';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Brand />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const component = create(<Brand />).toJSON();;
    expect(component).toMatchSnapshot();
});