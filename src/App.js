import React, { Component } from 'react';
import Axios from 'axios';

import Header from './components/layout/Header';
import ContactList from './components/ContactList';
import Contact from './components/Contact'

import './styles/App.scss';

export class App extends Component {
  state = {
    contacts: [],
    selectedContactId: 1,
    searchResult: [],
  }

  componentDidMount() {
    Axios.get('http://mock-io.herokuapp.com/users')
      .then( response => this.setState({
        contacts: response.data,
      }))
  }
  
  showContact = (id) => {
    this.setState({
      selectedContactId: id
    })
  }
  
  getContact = (id) => {
    return this.state.contacts.filter(contact => contact.id === id)[0]
  }

  searchContacts = (query) => {
    if(query.length > 0){
      return this.state.contacts.filter(contact => contact.firstName.includes(query));
    }
    return [];
  }

  render() {
    return (
      <div className="app">
        
        <Header 
          contacts = { this.state.contacts }
          searchContacts = { this.searchContacts }
          searchResult = { this.searchContacts }
        />

        <ContactList
          contacts = { this.state.contacts }
          showContact = { this.showContact }
        />

        <Contact 
          contact={ this.state.selectedContactId > 0 ? this.getContact(this.state.selectedContactId) : this.getContact(1)}
        />


      </div>
    )
  }

}

export default App
