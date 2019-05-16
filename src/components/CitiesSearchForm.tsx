import * as React from 'react'

export interface CitiesSearchFormProps {
  isLoading: boolean,
  error: String,
  onSearch: (value: String) => any
}

interface CitiesSearchFormState {
  searchText: String
}

export class CitiesSearchForm extends React.Component<CitiesSearchFormProps, CitiesSearchFormState> {

  static defaultProps: CitiesSearchFormProps = {
    isLoading: false,
    error: null,
    onSearch: null
  }

  constructor (props: CitiesSearchFormProps) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.setState(() => ({
      searchText: null
    }))
  }

  render () {
    return <form onSubmit={this.handleSubmit}>
      <label htmlFor='characterName'>
        City name:
        <input type='text'
          id='characterName'
          onChange={this.handleChange}/>
      </label>
      <button type='submit'>Search</button>
      <this.Spinner isLoading={this.props.isLoading} />
    </form>
  }

  handleChange (event: any): void {
    const searchText = event.target.value
    this.setState(() => ({ searchText }))
  }

  handleSubmit (event: any): void {
    event.preventDefault()
    if (this.props.onSearch && this.state.searchText) {
      this.props.onSearch(this.state.searchText)
      this.setState(() => ({ searchText: null }))
    }
  }

  private Spinner (props) {
    const style = {
      display: props.isLoading ? 'block' : 'none'
    }
    return <span style={style}>Loading...</span>
  }
}
