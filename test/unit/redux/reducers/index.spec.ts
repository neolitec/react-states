import { initialState as citiesSearchInitialState } from '../../../../src/redux/reducers/cities-search'
import reducers from '../../../../src/redux/reducers'

describe('Reducers', () => {
  it('should set default initial state for citiesSearch', () => {
    const expectedState = {
      citiesSearch: citiesSearchInitialState
    }

    const newState = reducers({
      citiesSearch: null
    }, {
      type: 'UNKNOWN'
    })

    expect(newState).toEqual(expectedState)
  })
})
