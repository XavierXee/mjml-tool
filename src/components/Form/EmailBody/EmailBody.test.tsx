import React from 'react';
import ReactDOM from 'react-dom';
import EmailBody from './EmailBody';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailBody />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const component = create(<EmailBody />).toJSON();;
    expect(component).toMatchSnapshot();
});