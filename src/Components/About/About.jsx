import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faCheck, faCalendarDay, faRepeat } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div>
      <div className='about-container'>
        <div className='about-image'>
          <img src="./images/about.png" alt="" />
        </div>
        <div className='about-text'>
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ex quod perspiciatis accusamus maxime iis ex quod perspiciatis accusamus maxime ommo nditiis ex quod perspiciatis accusamus maxime omm</p>
          <div className='about-features'>
            <h3> Professional</h3>
            <h3> Credibel</h3>
            <h3> Trusted</h3>
            <h3> Free Support</h3>
            <h3> Modern</h3>
            <h3> Low Price</h3>
          </div>
        </div>
      </div>

      <div className='conatiner-icons'>
        <div className='icons-list'>
          <FontAwesomeIcon icon={faPeopleGroup} size="3x" color="#39d196" />
          <span>650</span>
          <h1>Our client</h1>
        </div>

        <div className='icons-list'>
          <FontAwesomeIcon icon={faCheck} size="3x" color="#39d196" />
          <span>890</span>
          <h1>Project done</h1>
        </div>

        <div className='icons-list'>
          <FontAwesomeIcon icon={faCalendarDay} size="3x" color="#39d196" />
          <span>12</span>
          <h1>Years Experience</h1>
        </div>

        <div className='icons-list'>
          <FontAwesomeIcon icon={faRepeat} size="3x" color="#39d196" />
          <span>240</span>
          <h1>Repeat Order</h1>
        </div>
      </div>

    </div>
  )
}

export default About;