import { observable, computed } from 'mobx'
import cityService from '../services/city.service'

export class CitiesSearchStore {
  @observable citiesList = []
  @observable error = null
  @observable loading = false

  @computed get isLoading () {
    return this.loading
  }

  @computed get cities () {
    return this.citiesList
  }

  async searchCities (name: String) {
    this.loading = true
    try {
      this.citiesList = await cityService.findCity(name)
    } catch (err) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  }
}

export default new CitiesSearchStore()
