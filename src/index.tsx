import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { App } from './redux/components/App'
import { App as MobxApp } from './mobx/ObservableApp'

ReactDOM.render(
  <Router>
    <ul>
      <li>
        <Link to='/'>Redux</Link>
      </li>
      <li>
        <Link to='/mobx'>MobX</Link>
      </li>
    </ul>

    <Route exact path='/' component={App} />
    <Route path='/mobx' component={MobxApp} />
  </Router>,
  document.getElementById('root')
)
