import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import {Salon} from './Salon'

it('shows salon are rendering ',()=>{
  const stubData = [ // Salon
    {
      name:'test1',
      description:'test test test'
    },
  ]

  const component = <Salon salon={stubData}/>
  const tree = shallow(component)

  expect(tree.find('div.wrapper')).toHaveLength(1);
})

it('shows Salon name rendering',()=>{

  const stubData = { // Salon

      name: 'test',
      description: 'test test test'

  }

  const component = <Salon salon={stubData}/>
  const tree = shallow(component)
  expect(tree.find('span.title').text()).toEqual('test');
})

it('shows Salon description rendering',()=>{

  const mokData = { // Salon

    name: 'test1',
    description: 'test test test'

  }

  const component = <Salon salon={mokData}/>
  const tree = shallow(component)
  expect(tree.find('section.description>p').text()).toEqual('test test test');
})


