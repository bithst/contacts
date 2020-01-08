import React, { Component } from 'react'

export class ContactListItem extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div className="contact-list-item" onClick={ this.props.showContact.bind(this, contact.id) }>
        <img src={contact.profileImage} alt="" className="profile-image"/>
        <span>{contact.firstName + ' ' + contact.lastName}</span>
      </div>
    )
  }
}

export default ContactListItem
