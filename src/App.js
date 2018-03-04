import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';


import store from './store/index'


import {Navigation} from './navigation'

const App = () =>
 (
      <Provider store={store}>
        <Router>
          <Navigation/>
        </Router>
      </Provider>
    );


export default App;
