import React from 'react';

class ContactForm extends React.Component {
  validateName = e => {
    if (document.getElementById("name").value < 1) {
      document.getElementById("nameError").innerHTML = "<b><font color='red'>Name is required</font></b>";
      document.getElementById("name").focus();
    } else {
      document.getElementById("nameError").innerHTML = "";
    } 
  }

  validateEmail = e => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (document.getElementById("email").value.match(validRegex)) {
      document.getElementById("emailError").innerHTML = "";
    } else {
      document.getElementById("emailError").innerHTML = "<b><font color='red'>Email is required</font></b>";
      document.getElementById("email").focus();
    }
  }

  validateMessage = e => {
    if (document.getElementById("message").value < 1) {
      document.getElementById("messageError").innerHTML = "<b><font color='red'>Message is required</font></b>";
      document.getElementById("message").focus();
    } else {
      document.getElementById("messageError").innerHTML = "";
    } 
  }

  render() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <div>
          <label htmlFor="name">Name:&nbsp;</label>
          <input type="text" id="name" required onBlur={this.validateName}></input>
          <p id="nameError"></p>
        </div>
        <div>
          <label htmlFor="email">Email:&nbsp;</label>
          <input type="email" id="email" required onBlur={this.validateEmail}></input>
          <p id="emailError"></p>
        </div>
        <div>
          <label htmlFor="message">Message:&nbsp;</label>
          <textarea id="message" required onBlur={this.validateMessage}></textarea>
          <p id="messageError"></p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}}

export default ContactForm;