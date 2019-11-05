import * as React from 'react'
import { inject, Provider } from 'mobx-react'

import citiesSearchStore from './store'
import { CitiesSearchForm } from '../components/CitiesSearchForm'
import { CitiesList } from '../components/CitiesList'

const CitiesSearchFormDisplayer = inject((stores: any) => ({
  error: stores.citiesSearchStore.error,
  isLoading: stores.citiesSearchStore.isLoading,
  onSearch: (name: string) => stores.citiesSearchStore.searchCities(name)
}))(CitiesSearchForm)

const CitiesListDisplayer = inject((stores: any) => ({
  cities: stores.citiesSearchStore.cities
}))(CitiesList)

export class App extends React.Component {
  render () {
    return (
      <Provider citiesSearchStore={citiesSearchStore}>
        <div>
          <h1>Welcome to french cities database (MobX).</h1>
          <CitiesSearchFormDisplayer />
          <CitiesListDisplayer />
        </div>
      </Provider>
    )
  }
}
