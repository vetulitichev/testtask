import React from 'react'
import { Route } from 'react-router-dom'


// Routes
import Salon from '../components/Salon'
import Table from '../components/Table'

export const Navigation = () => (
  <div>
    <Route exact path={'/'} component={Table}/>
    <Route path={'/salon:id'} component={Salon}/>
  </div>
)
