import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const component = create(<App />).toJSON();;
    expect(component).toMatchSnapshot();
});