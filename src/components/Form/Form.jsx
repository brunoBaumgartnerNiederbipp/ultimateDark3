import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./form.css";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qnv5muv', 'template_mld0s48', form.current, 'ZFJAcqqbzNW7G28Zj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form  id="angebotEinholen" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" className='name' />
      <label>Email</label>
      <input type="email" name="user_email" className='email'/>
      <label>Message</label>
      <textarea name="message" className='message'/>
      <input type="submit" value="Send"  className='submit'/>
    </form>
  );
};