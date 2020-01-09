import React, { Component } from 'react'

export class Contact extends Component {
  state = {
    display: 'hidden',
  }

  render() {
    const { contact } = this.props;

    return (
      <div className="contact">
        <div className="contact--profile-image" style={{backgroundImage: 'url(' + contact.profileImage + ')'}}>
        </div>
        <img src={contact.profileImage} alt=""/>
        <div className="contact--info">
          <div>
            <strong>Name</strong><br/>
            {contact.firstName + ' ' + contact.lastName} 
          </div>
          <div>
            <strong>Phone</strong><br/>
            {contact.phone}
          </div>
          <div>
            <strong>Email</strong><br/>
            {contact.email}
          </div>
          <div>
            <strong>Address</strong><br/>
            {Object.keys(contact.address).map(key => (
              <div style={{marginLeft: '20px'}}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1) + ': '}</strong>
                {contact.address[key]}
              </div>
            ))}
          </div>

        </div>
      </div>
    )
  }
}

export default Contact
