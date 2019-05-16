import { City } from 'src/components/City'

export const successResult = [{
  code: '12',
  nom: 'St-Peterburg',
  population: 123
}, {
  code: '13',
  nom: 'Moscow',
  population: 1234
}]

export const errorResult = 'Expected error'

export default {
  async findCity (name: String): Promise<City[]> {
    if (name === 'successCity') {
      return successResult
    }

    throw new Error(errorResult)
  }
}
