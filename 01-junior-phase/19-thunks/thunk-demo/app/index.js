import React from 'react'
import ReactDOM from 'react-dom'
import Bunnies from './Bunnies'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Bunnies />
  </Provider>,
  document.getElementById('app')
)
