import React from 'react'
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Skills_Data from '../../assets/skills_data';
import arrow_icon from "../../assets/arrow_icon.svg"

const Skills = () => {
  return (
    <div className='skills'>
    <div className='skills-title'>
      <h1>My Skills</h1>
      <img src={theme_pattern} alt=''/>
    </div>
    <div className='skills-container'>
      {Skills_Data.map((Skills,index)=>{
        return <div key={index} className='skills-format'>
          <h3>{Skills.s_no}</h3>
          <h2>{Skills.s_name}</h2>
          <p>{Skills.s_desc}</p>
          <div className='skills-readmore'>
            <p>read more</p>
            <img src={arrow_icon} alt=''/>
          </div>
        </div>
      })}
    </div> 
  </div>
  )
}

export default Skills
