import React from 'react';
import ReactDOM from 'react-dom';
import HeroHeader from './HeroHeader';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const component = create(<HeroHeader />).toJSON();;
    expect(component).toMatchSnapshot();
});