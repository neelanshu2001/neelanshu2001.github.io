import React from 'react';

const Progress = ({ percent, name }) => (
  <div className="shadow w-full bg-gray-200 rounded overflow-hidden mb-2">
    <div
      className="bg-blue-500 text-sm py-1 text-white font-light"
      style={{ width: `${percent}%` }}
    >
      <span className="pl-2">{name}</span>
    </div>
  </div>
);

export default Progress;
