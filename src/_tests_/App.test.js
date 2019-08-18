import App from "../App";
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(<App/>);
  expect(wrapper).toMatchSnapshot();
});
