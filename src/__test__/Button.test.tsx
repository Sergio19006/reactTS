import * as React from 'react';
import { shallow } from 'enzyme';
import Button from "../components/Button";

describe('Button', () => {
  describe('render', () => {
    test('Debería renderizar un', () => {
      const wrapper = shallow(<Button />);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toBe('1');
    });
  });
});