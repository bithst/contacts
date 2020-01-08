import React, { Component } from 'react'

export class Search extends Component {
  state = {
    query: '',
    result: [],
  }

  onChange = (e) =>  {
    this.setState({
      [e.target.name]: e.target.value,
      result: this.props.search(this.state.query),
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  onReset = () => {
    this.setState({
      query: '',
      result: [],
    })
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            name="query"
            placeholder="Search"
            onChange={ this.onChange }
          />

          <input 
            type="reset" 
            value="clear"
            onClick={ this.onReset }
          />
        </form>

        {this.state.result.map(contact => (
        <span>{contact.firstName}</span>
        ))}

      </div>
    )
  }
}

export default Search
