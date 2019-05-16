import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../../../../src/redux/reducers/cities-search';
import { CITIES } from '../../../../src/redux/constants';
import { City } from '../../../../src/components/City';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('src/services/city.service')

const cityService = require('src/services/city.service');
const citiesSearchActions = require('src/redux/actions/cities-search');

describe('Store CitiesSearch', () => {
  describe('actions', () => {
    it('should create an action to search cities', () => {
      const expectedAction = { type: CITIES.FETCHING };
      expect(citiesSearchActions.fetchCities()).toEqual(expectedAction);
    });

    it('should create an action when results have been received', () => {
      const cities: City[] = [{
        code: '18',
        nom: 'St-Petersburg',
        population: 12
      }];
      const expectedAction = {
        type: CITIES.SUCCESS_FETCHING,
        data: cities
      };
      expect(citiesSearchActions.receiveCities(cities)).toEqual(expectedAction);
    });

    it('should create an action when an error occurs', () => {
      const errorMessage = 'This is an error.';
      const expectedAction = {
        type: CITIES.ERROR_FETCHING,
        data: errorMessage
      };
      expect(citiesSearchActions.receiveError(errorMessage)).toEqual(expectedAction);
    });
  });

  describe('async actions', () => {
    it('create correct actions on success', () => {
      const expectedActions = [
        { type: CITIES.FETCHING },
        {
          type: CITIES.SUCCESS_FETCHING,
          data: cityService.successResult
        }
      ]
      const store = mockStore({
        citiesSearch: initialState
      })

      return store.dispatch(citiesSearchActions.searchCities('successCity')).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('create correct actions on error', () => {
      const expectedActions = [
        { type: CITIES.FETCHING },
        {
          type: CITIES.ERROR_FETCHING,
          data: cityService.errorResult
        }
      ]
      const store = mockStore({
        citiesSearch: initialState
      })

      return store.dispatch(citiesSearchActions.searchCities('errorCity')).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
