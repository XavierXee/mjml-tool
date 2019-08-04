import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const component = create(<Form />).toJSON();;
    expect(component).toMatchSnapshot();
});