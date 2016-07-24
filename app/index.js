import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './components/Home'
import User from './components/User'

ReactDOM.render( <Router history={browserHistory}>
                    <Route path="/" component={App}>
                      <IndexRoute component={Home}/>
                      <Route path="user/:token" component={User}/>
                    </Route>
                  </Router>, document.getElementById('app'))
