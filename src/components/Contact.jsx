import React from 'react';
import Mail from '../assets/img/mail.png'
import Mobile from '../assets/img/mobile.png'
import Website from '../assets/img/website.png'
//import LocationIcon from '../assets/location.svg';

const Contact = ({ field, value }) => (
  <span className="flex my-2 text-primary-900 tracking-widest items-center">
    {field === 'email' && (
      <>
        <img src={Mail} className="w-6 h-6 mr-4" />
        <a className="contact-link" href={`mailto:${value}`} title="email">
          {value}
        </a>
      </>
    )}
    {field === 'phone' && (
      <>
        <img src={Mobile} className="w-6 h-6 mr-4" />
        <a className="contact-link" href={`tel:${value}`} title="phone">
          {value}
        </a>
      </>
    )}
    {field === 'website' && (
      <>
        <img src={Website} className="w-6 h-6 mr-4" />
        <a
          className="contact-link"
          target="_blank"
          href={value}
          rel="noopener noreferrer"
          title="website"
        >
          Personal Site
        </a>
      </>
    )}
    {field === 'location' && (
      <>
        <img src='' className="w-6 h-6 mr-4" />
        <span className="contact-link">{value}</span>
      </>
    )}
  </span>
);

export default Contact;
