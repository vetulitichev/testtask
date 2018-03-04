import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import Thead from './Thead'

it('shows table tr css class',()=>{
  const component = <Thead headerFields={['test1','test2','test3']}/>
  const tree = shallow(component)

  expect(tree.find('tr').hasClass('table-head')).toBeTruthy();
})

it('Test table headers substitution',()=>{
  const component = <Thead headerFields={['test1','test2','test3']}/>
  const tree = shallow(component)

  expect(tree.find('td')).toHaveLength(3);
})



