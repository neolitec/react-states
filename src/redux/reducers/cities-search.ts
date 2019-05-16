import { City } from 'components/City'
import { Action } from '../actions'
import { CITIES } from '../constants'

export interface CitiesSearchState {
  cities: City[]
  error: String,
  isLoading: boolean,
}

export const initialState: CitiesSearchState = {
  cities: [],
  error: null,
  isLoading: false
}

export default function reducer (state: CitiesSearchState = initialState, action: Action) {
  if (!state) {
    state = initialState
  }

  if (!action) {
    return state
  }

  switch (action.type) {
    case CITIES.FETCHING:
      return {
        ...state,
        cities: initialState.cities,
        error: null,
        isLoading: true
      }

    case CITIES.SUCCESS_FETCHING:
      return {
        ...state,
        cities: action.data as City[],
        error: null,
        isLoading: false
      }

    case CITIES.ERROR_FETCHING:
      return {
        ...state,
        cities: initialState.cities,
        error: action.data as String,
        isLoading: false
      }
    default:
      return state
  }
}
