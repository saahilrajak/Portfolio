import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt=''/>
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>I am an Full Stack Developer. highly skilled Full Stack Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js), Java, Spring, MySQL, and Git. Proficient in building scalable web applications, I possess strong knowledge of front-end and back-end development, API integration, and database management.</p>
            <p>I am deeply passionate about leveraging technology to solve real-world problems and create seamless user experiences. With a strong foundation in MERN, Java, Spring, and MySQL, I thrive on developing full-stack solutions that are not only functional but also efficient and scalable. My work on projects like a Food Ordering System and a course registration platform. </p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML</p><hr style={{width:"97%"}}/></div>
            <div className='about-skill'><p>CSS</p><hr style={{width:"90%"}}/></div>
            <div className='about-skill'><p>JavaScript</p><hr style={{width:"80%"}}/></div>
            <div className='about-skill'><p>React.js</p><hr style={{width:"80%"}}/></div>
            <div className='about-skill'><p>Express.js</p><hr style={{width:"70%"}}/></div>
            <div className='about-skill'><p>Node.js</p><hr style={{width:"75%"}}/></div>
            <div className='about-skill'><p>MongoDB</p><hr style={{width:"70%"}}/></div>
            <div className='about-skill'><p>MySQL</p><hr style={{width:"90%"}}/></div>
            <div className='about-skill'><p>Next.js</p><hr style={{width:"70%"}}/></div>
            <div className='about-skill'><p>Java</p><hr style={{width:"80%"}}/></div>
            <div className='about-skill'><p>Spring</p><hr style={{width:"750%"}}/></div>
            <div className='about-skill'><p>Git</p><hr style={{width:"95%"}}/></div>
            <div className='about-skill'><p>SpringBoot</p><hr style={{width:"50%"}}/></div>
            <div className='about-skill'><p>Auth.js</p><hr style={{width:"70%"}}/></div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
            <h1>Vice President</h1>
            <p className='about-desc'>Lead the students on various fronts</p>
        </div>
        <hr/>
        <div className='about-achievement'>
            <h1>Food Del App</h1>
            <p className='about-desc' >Created a full stack project where user can order favourite food of choices</p>
        </div>
        <hr/>
        <div className='about-achievement'>
            <h1>Scored</h1>
            <p className='about-desc'>Scored top on various fronts in the department.</p>
        </div>
      </div>
    </div>
  )
}

export default About
