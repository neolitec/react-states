import reducer, { initialState } from '../../../../src/redux/reducers/cities-search'
import { CITIES } from '../../../../src/redux/constants'

describe('Reducer Cities Search', () => {
  describe('with unknown action', () => {
    describe('with default initial state', () => {
      expect(reducer(initialState, {})).toMatchObject(initialState)
    })

    describe('with null initial state', () => {
      expect(reducer(null, {})).toMatchObject(initialState)
    })
  })

  describe('with null action', () => {
    it('should do nothing', () => {
      expect(reducer(null, null)).toMatchObject(initialState)
    })
  })

  it('should set loading state', () => {
    expect(reducer(initialState, {
      type: CITIES.FETCHING
    })).toMatchObject({
      ...initialState,
      isLoading: true
    })
  })

  it('should set cities', () => {
    const cities = [{
      code: '12',
      nom: 'St-Petersburg',
      population: 123
    }]

    expect(reducer(initialState, {
      type: CITIES.SUCCESS_FETCHING,
      data: cities
    })).toMatchObject({
      ...initialState,
      cities
    })
  })

  it('should set error', () => {
    const error = 'Test error'

    expect(reducer(initialState, {
      type: CITIES.ERROR_FETCHING,
      data: error
    })).toMatchObject({
      ...initialState,
      error
    })
  })
})
