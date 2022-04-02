import React from 'react';

const Education = ({ data }) => (
  <section className="mb-5">
    <h1 className="text-2xl text-slate-800 font-bold mb-5">Education</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.degree}>
          <h2 className=" font-semibold text-lg">{item.degree}</h2>
          <h3 className="text-sm ">{item.institution}</h3>
          <p className="text-sm text-neutral-500 font-light">
            {item.start} - {item.end}
          </p>
        </div>
      ))}
  </section>
);

export default Education;
