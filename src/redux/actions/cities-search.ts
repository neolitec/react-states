import { City } from 'components/City'
import cityService from '../../services/city.service'
import { CITIES } from '../constants'
import { Action } from '.'

export function fetchCities (): Action {
  return {
    type: CITIES.FETCHING
  }
}

export function receiveCities (cities: City[]): Action {
  return {
    type: CITIES.SUCCESS_FETCHING,
    data: cities
  }
}

export function receiveError (error: String): Action {
  return {
    type: CITIES.ERROR_FETCHING,
    data: error
  }
}

export function searchCities (name: String) {
  return async function (dispatch) {
    try {
      dispatch(fetchCities())
      dispatch(receiveCities(await cityService.findCity(name)))
    } catch (err) {
      dispatch(receiveError(err.message))
    }
  }
}
