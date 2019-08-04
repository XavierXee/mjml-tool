import React from 'react';
import ReactDOM from 'react-dom';
import Campaign_OLD from './Campaign';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Campaign_OLD campaignDate={new Date('2000/01/01')}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const component = create(<Campaign_OLD />).toJSON();;
    expect(component).toMatchSnapshot();
});