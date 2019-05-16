import { connect } from 'react-redux'

import { CitiesSearchForm as BaseCitiesSearchForm, CitiesSearchFormProps } from '../../components/CitiesSearchForm'
import { searchCities } from '../actions/cities-search'

const mapStateToProps: (state: any) => Partial<CitiesSearchFormProps> = (state) => ({
  isLoading: state.citiesSearch.isLoading,
  error: state.citiesSearch.error
})

const mapDispatchToProps = {
  onSearch: searchCities
}

export const CitiesSearchForm = connect(mapStateToProps, mapDispatchToProps)(BaseCitiesSearchForm)
