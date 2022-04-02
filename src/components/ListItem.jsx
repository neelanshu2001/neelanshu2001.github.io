import React from 'react';
//import BoltIcon from '../assets/bolt.svg';

const ListItem = ({ text }) => (
  <div className="my-1 mx-2">
    <img src='' className="inline-block h-3 fill-current text-red-500" />
    <div className="inline-block text-sm font-bold mx-2">{text} ,</div>
  </div>
);

export default ListItem;
