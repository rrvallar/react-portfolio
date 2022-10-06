import React from 'react'


function Contact() {
  return (
    <div id="contact">
      <div className="contact-form">
        <h3> Contact Me </h3>
        <form>
          <input class="input-name" type="text" placeholder='Enter your name' required></input>
          <input type="email" placeholder='Enter your email' required></input>
          <input class="input-message" type="text" placeholder='Enter your message' required></input>
          <input type="submit" value="Send Message"/>
        </form>
      </div>
    </div>

  )
};

export default Contact;