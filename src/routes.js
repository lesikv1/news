import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import List from './components/List'
import Genre from './components/Genre'
import Release from './components/Release'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Country from './components/Country'
import Signin from './components/Signin'
import Signup from './components/Signup'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/genre/:genre' component={Genre}>
        <Route path='/genre/:genre/:release' component={Release} />
      </Route>
      <Route path='/list' component={List} />
      <Route path='/country' component={Country} />
      <Route path='/signin' component={Signin} />
      <Route path='/signup' component={Signup} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
