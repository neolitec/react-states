import * as fetchMock from 'fetch-mock'
import cityService from '../../../src/services/city.service'

describe('City service', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('should return cities', async () => {
    const expected = [{
      code: '12',
      nom: 'St-Peterburg',
      population: 123
    }, {
      code: '23',
      nom: 'Moscow',
      population: 234
    }]

    fetchMock.getOnce('https://geo.api.gouv.fr/communes?nom=name', {
      body: expected,
      headers: { 'content-type': 'application/json' }
    })

    const result = await cityService.findCity('name')
    expect(result).toEqual(expected)
  })

  it('should return error if search text is too short', async () => {
    expect.assertions(1)
    try {
      await cityService.findCity('n')
    } catch (err) {
      expect(err.message).toEqual('At least 3 chars for a search request.')
    }
  })
})
