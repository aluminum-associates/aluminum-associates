import React, { Component } from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const initState = {
  name: "",
  address: "",
  email: "",
  phone: "",
  message: "",
  errs: {
    name: "",
    address: "",
    email: "",
    phone: "",
    message: "",
  },
}

export class ContactForm extends Component {
  state = initState

  validateForm = () => {
    let name = ""
    let address = ""
    let email = ""
    let phone = ""
    let message = ""

    if (!this.state.name) {
      name = "Name cannot be left blank."
    }
    if (!this.state.address) {
      address = "Address cannot be left blank."
    }
    if (!this.state.email.includes("@")) {
      email = "Please enter a valid email address."
    }
    if (!this.state.email) {
      email = "Email cannot be left blank."
    }
    if (name || address || email || phone || message) {
      this.setState({
        errs: { name, address, email, phone, message },
      })
      return false
    }
    return true
  }

  handleChange = e => {
    const target = e.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    const isValid = this.validateForm()

    if (isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state }),
      })
        .then(() => {
          alert("Success!")
          this.setState(initState)
        })
        .catch(error => alert(error))
    }

    e.preventDefault()
  }

  render() {
    const formStyle = {
      maxWidth: "400px",
    }
    const { name, address, email, phone, message } = this.state

    return (
      <>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          {this.props.title ? (
            <h1 className="title">{this.props.title}</h1>
          ) : null}
          <div className="field">
            <input
              type="text"
              name="name"
              value={name}
              className="input"
              onChange={this.handleChange}
              placeholder="Name"
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="address"
              value={address}
              className="input"
              onChange={this.handleChange}
              placeholder="Address"
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="email"
              value={email}
              className="input"
              onChange={this.handleChange}
              placeholder="Email"
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="phone"
              value={phone}
              className="input"
              onChange={this.handleChange}
              placeholder="Phone"
            />
          </div>
          <div className="field">
            <textarea
              name="message"
              value={message}
              cols="30"
              rows="10"
              className="textarea"
              onChange={this.handleChange}
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="button is-primary"
          >
            Submit
          </button>
        </form>
      </>
    )
  }
}

export default ContactForm
