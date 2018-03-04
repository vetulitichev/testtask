import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import {Services} from './Services'

it('shows services are rendering ',()=>{
  const mokData = [
    {
      name:'test1',
      duration: 12,
      price: 12,
    },
  ]

  const component = <Services services={mokData}/>
  const tree = shallow(component)

  expect(tree.find('div.service__table')).toHaveLength(1);
})

it('shows services are not rendering without data',()=>{


  const component = <Services/>
  const tree = shallow(component)

  expect(tree.find('div.row flex')).toHaveLength(0);
})


