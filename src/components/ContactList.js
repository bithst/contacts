import React, { Component } from 'react'
import ContactListItem from './ContactListItem';

export class ContactList extends Component {
  
  render() {
    const { contacts } = this.props;

    return (
      <div className="contact-list">

        <div className="contact-list--title sticky">
          <div></div>
          <div>Name</div>
          <div>Phone</div>
        </div>

        {contacts.map(contact => (
          <ContactListItem 
            key={contact.id}
            contact={contact}
            showContact = { this.props.showContact }
          />
        ))}

      </div>
    )
  }
}

export default ContactList
