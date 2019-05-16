import { connect } from 'react-redux'

import { CitiesList as BaseCitiesList, CitiesListProps } from '../../components/CitiesList'

const mapStateToProps: (state: any) => Partial<CitiesListProps> = (state) => ({
  cities: state.citiesSearch.cities
})

export const CitiesList = connect(mapStateToProps)(BaseCitiesList)
