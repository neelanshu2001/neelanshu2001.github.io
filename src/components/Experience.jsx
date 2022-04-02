import React from 'react';

const Experience = ({ data }) => (
  <section>
    <div className="text-2xl font-bold text-slate-800 ">Experience</div>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="text-lg font-semibold text-slate-800">{item.role}</h2>
          <h3 className="text-sm italic text-slate-800">
            {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>
          <p className="py-2 text-sm italic text-slate-800">{item.description}</p>
        </article>
      ))}
  </section>
);

export default Experience;