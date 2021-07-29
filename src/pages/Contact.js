import React from 'react';
import Sidebar from './Sidebar';
import Title from './Title';
// import '../styles/home.css';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div>
      <Sidebar />
      <div className="other-pages">
      <Title />
        <div className="contact-form-container">
        <h1 className="contact-title">Contact</h1>
        <form encType="multipart/form-data" action="https://formsubmit.co/yohanesdemissie@gmail.com" method="POST" className="contact-form">

          <label className="contact-label" for="name">Name</label>
            <input className="contact-input" type="text" id="name" name="name" placeholder="name" />
            <label className="contact-label" for="emailAddress">Email Address</label>
            <input className="contact-input" type="text" id="emailAddress" name="emailAddress" placeholder="email address"/>
            <input type="hidden" name="_next" value="http://localhost:3000/thankyou" />
            <label className="contact-label" for="subject">Subject</label>
            <input className="contact-input" type="text" id="subject" name="subject" placeholder="subject"/>
            <label className="contact-label" for="message">Message</label>
            <textarea className="contact-input" className="email-text-box" type="text" id="message" name="message" placeholder="type message here..."/>
            <button className="contact-submit" type="submit">Send</button>
        </form>

          {/* <div>
            <label htmlFor="name"  className="contact-label"> <p className="labels">Name</p>
              <input className="input-form" type="text" name="name" id="name" placeholder="Name" />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="email" className="contact-label"> <p className="labels">Email</p>
              <input className="input-form" type="text" name="email" id="email" placeholder="Email" />
              <input type="hidden" name="_next" value="http://localhost:3000/thankyou" />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="subject" className="contact-label"> <p className="labels">Subject</p>
              <input className="input-form" type="subject" name="subject" id="subject" placeholder="Subject" />
            </label>
          </div>
          <br />

          <div>
            <br />
            <label htmlFor="email" className="contact-label"> <p className="labels">Message</p>
            <input type="search" className="input-message-form" name="Inquiry" type="text" placeholder="Send your comments to us." />
            </label>
          </div>
          <div>

            <input className="submit-button" type="submit" name="submit" value="Send" />
          </div>

        </form>*/}
    </div>
      </div>
      </div>
  )
}

export default Contact;