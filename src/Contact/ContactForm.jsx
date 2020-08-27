import React from "react";
import './Contact.css'


export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        className = "forms"
        onSubmit={this.submitForm}
        action="https://formspree.io/mqkyvagp"
        method="POST"
      >
    
        <label>Email:</label>
        <input
          className = "email"
          type="email"
          name="email"
          placeholder="email"
        />
        <label>Message:</label>
        <input
          className="message"
          type="text"
          name="message"
          placeholder="Your message"
        />
        {status === "SUCCESS" ? <p>Thanks! I'll be reaching out to you soon!</p> : <button className ="submit">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
