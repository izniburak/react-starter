import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFound from './Components/NotFound'
import Home from './Routes/Home'
import About from './Routes/About'
import Users from './Routes/Users'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
