import React from 'react';
import Sidebar from './Sidebar';
import Title from './Title';
// import '../styles/home.css';
// import '../styles/contact.css';
import '../styles/admin.css';

const Contact = () => {
  return (
    <div>
      <Sidebar />
      <Title />
      <div className="other-pages">
        <div className="contact-form-container">
        <h1 className="contact-title">Contact</h1>
        <form encType="multipart/form-data" action="https://formsubmit.co/yohanesdemissie@gmail.com" method="POST" className="admin-form">

          <label className="admin-label" htmlFor="name">Name</label>
            <input className="admin-input" type="text" id="name" name="name" placeholder="name" />
            <label className="admin-label" htmlFor="emailAddress">Email Address</label>
            <input className="admin-input" type="text" id="emailAddress" name="emailAddress" placeholder="email address"/>
            <input type="hidden" name="_next" value="http://localhost:3000/thankyou" />
            <label className="admin-label" htmlFor="subject">Subject</label>
            <input className="admin-input" type="text" id="subject" name="subject" placeholder="subject"/>
            <label className="admin-label" htmlFor="message">Message</label>
            <textarea className="contact-email-input" type="text" id="message" name="message" placeholder="type message here..."/>
            <button className="admin-submit" type="submit">Send</button>
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