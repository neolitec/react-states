interface QueryParams {
  [key: string]: String
}

class CityService {
  private baseUrl: String = 'https://geo.api.gouv.fr'

  async findCity (name: String): Promise<any> {
    if (name.length < 3) {
      throw new Error('At least 3 chars for a search request.')
    }

    const response = await this.get('/communes', {
      nom: name
    })

    return response.json()
  }

  private async get (path: String, query: QueryParams = {}): Promise<Body> {
    const queryString = Object.keys(query).reduce((queryParts: String[], key: string) => {
      queryParts.push(`${key}=${encodeURIComponent(query[key] as string)}`)
      return queryParts
    }, []).join('&')
    return fetch(`${this.baseUrl}${path}${queryString ? '?' : ''}${queryString}`)
  }
}

export default new CityService()
