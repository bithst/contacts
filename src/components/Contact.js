import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    const { contact } = this.props;

    return (
      <div className="contact">
        <img src={contact.profileImage} alt=""/>
        {contact.firstName}
      </div>
    )
  }
}

export default Contact
