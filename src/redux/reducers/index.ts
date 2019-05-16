import citiesSearchReducer, { CitiesSearchState } from './cities-search'
import { combineReducers } from 'redux'

export interface State {
  citiesSearch: CitiesSearchState
}

export interface Action {
  type: String,
  payload?: any
}

export default combineReducers({
  citiesSearch: citiesSearchReducer
})
