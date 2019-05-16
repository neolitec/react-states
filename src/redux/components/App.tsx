import * as React from 'react'
import { Provider } from 'react-redux'

import store from '../store/index'
import { CitiesSearchForm } from './ConnectedCitiesSearchForm'
import { CitiesList } from './ConnectedCitiesList'

export class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <h1>Welcome to french cities database.</h1>
          <CitiesSearchForm/>
          <CitiesList/>
        </div>
      </Provider>
    )
  }
}
