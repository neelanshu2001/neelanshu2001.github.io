import React from 'react';
import Footer from '../components/Footer'
import Summary from '../components/Summary';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../basic/molecules/Projects';
import Skill from '../components/Skill';
function About({resume}) {
   
    return (
        <div>
         

  <div className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <Summary data={resume.summary} />
      <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
        <div className="lg:w-2/3 lg:pr-8">
          {resume.experience && <Experience data={resume.experience} />}
          {resume.projects && <Projects projects={resume.projects} />}
        </div>
        <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
        {resume.skills && <Skill data={resume.skills} />}
          {resume.education && <Education data={resume.education} />}
          {resume.sidebar &&
            resume.sidebar.map(item => (
              <List key={`${item.title}-side`} data={item} />
            ))}
        </div>
      </div>
      <Footer social={resume.social} />
    </div>
  </div>


        </div>
    );
}

export default About;