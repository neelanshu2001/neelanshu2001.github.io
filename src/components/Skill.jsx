import React from 'react';
import Progress from '../basic/atoms/Progress';
import ListItem from './ListItem';

const Skill = ({ data }) => (
  <section>
    <h1 className="text-2xl font-bold text-slate-800">Skills</h1>
    {data.map(skill => (
      <div key={skill.title} className="my-5">
        <div className="text-lg font-semibold font-semibold  mb-2">
          {skill.title}
        </div>
        {skill.subskills.map(subskill => (
          <span key={subskill.name}>
            {skill.type === 'percent' && (
              <Progress name={subskill.name} percent={subskill.percent} />
            )}
            {skill.type === 'tag' && (
              <span key={subskill.name} className="tag">
                {subskill.name}
              </span>
            )}
            {skill.type === 'list' && (
              <ListItem key={subskill.name} text={subskill.name} />
            )}
          </span>
        ))}
      </div>
    ))}
  </section>
);

export default Skill;
