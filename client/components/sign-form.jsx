import React from 'react';

class SignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      validEmail: '',
      existingEmail: null
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
    this.validation();
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(info) {

    if (this.state.validEmail) {
      fetch(`/api/userEmail/${info.email}`, {
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (!data.exists) {
            this.setState({ existingEmail: false });
          } else {
            this.setState({ existingEmail: true });
          }
        });
    }
  }

  validation() {
    const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!emailRegex.test(this.state.email)) {
      this.setState({ validEmail: false });
    } else {
      this.setState({ validEmail: true });
    }
  }

  signPetition(info) {
    // console.log('HOORAY');
    fetch('/api/signers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(response => response.json())
      .then(data => {
        // eslint-disable-next-line no-console
        console.log('succ');
      })
      .catch(err => console.error(err));
  }

  render() {
    const validEmail = this.state.validEmail ? 'valid' : 'invalid';
    return (
      <div>
        <div className="banner-container center-container">
          <img src="./images/grbannermain.jpg" alt="Banner Image" className="petition-banner"></img>
        </div>
        <div className="sign-up-container">
          <h3 className="petition-header">Let&apos;s make a difference!</h3>
          <input type="text" className="form-input" placeholder="Name" onChange={this.handleNameChange} value={this.state.name}/>
          <input type="text" className="form-input" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email} />
          <div className="center-container form-button-container">
            <button type="submit" className={` ${validEmail} form-button confirm transforming-button`} onClick={() => this.handleSubmit(this.state)}>Sign Petition</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignForm;
