import React, { Component } from 'react'

import Search from '../Search';

export class Header extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <header>
        <div className="logo">
          {'Contact'}
        </div>

        <Search 
          contacts = { contacts }
          search = { this.props.searchContacts }
        />
      </header>
    )
  }
}

export default Header
