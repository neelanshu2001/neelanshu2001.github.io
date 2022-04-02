import React from 'react';
//import HeartIcon from '../assets/heart.svg';
//import SocialIcon from './social_icon';

const Footer = ({ social }) => (
  <footer className="py-6 mx-auto items-center justify-between md:flex">
    <div className="items-center flex tracking-wide mb-5 md:mb-0 justify-center text-sm ml-2">
      <span className="inline-block mr-1">
        © {new Date().getFullYear()} | Developed with
      </span>
      <span className="inline-block mr-1">
        <img src='http://www.w3.org/2000/svg'
          className="h-3 w-3 fill-current"
          style={{ color: '#de3618' }}
        />
      </span>
      <span className="inline-block mr-1">by</span>
      <a
        className="text-primary-500 hover:text-primary-700 font-bold"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Neelanshu Garg
      </a>
    </div>
    {social && (
      <div className="flex items-center justify-center ml-2">
        {social.map(item => (
          <a
            key={item.service}
            className="text-primary-900 mr-4  hover-text-primary-500"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.service}
          >
            <img src='' type={item.service} />
          </a>
        ))}
      </div>
    )}
  </footer>
);

export default Footer;
