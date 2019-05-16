import * as React from 'react'
import { City } from './City'

export interface CitiesListProps {
  cities: City[]
}

export class CitiesList extends React.Component<CitiesListProps> {

  static defaultProps: CitiesListProps = {
    cities: []
  }

  render () {
    if (!this.props.cities.length) {
      return <i>The is no result.</i>
    }

    return <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {this.props.cities.map(city => {
          return <tr key={city.code as string}>
            <td>{city.nom}</td>
            <td>{city.population}</td>
          </tr>
        })}
      </tbody>
    </table>
  }
}
