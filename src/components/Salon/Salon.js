import React from 'react'

import './style.css'

// Components
import Services from './Services'


export const Salon = ({salon}) => {
  if(salon){
    const {name,description} = salon;
  return(
  <div className="wrapper">
    <div className="container">
      <span className="title text-center">{name}</span>
      <section className="slider flex justify-between">
        <div className="arrow left">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 477.175 477.175" style={{'enableBackground':'new 0 0 477.175 477.175'}} xml="preserve">
                        <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                            c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                    </svg>
        </div>
        <div className="arrow right">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 477.175 477.175" style={{'enableBackground':'new 0 0 477.175 477.175'}} xml="preserve">
                        <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                            c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
                            "/>
                    </svg>
        </div>
        <div className="slider__wrapper flex justify-between align-center">
          <div className="slide flex justify-center align-center"><span>image</span></div>
          <div className="slide flex justify-center align-center"><span>image</span></div>
          <div className="slide flex justify-center align-center"><span>image</span></div>
        </div>
      </section>
      <section className="work-hours">
        <span className="title-small text-center">Working Hours</span>
        <div className="work-hours__table">
          <div className="row flex justify-between header">
            <div className="item">Sun</div>
            <div className="item">Mon</div>
            <div className="item">Tue</div>
            <div className="item">Wed</div>
            <div className="item">Thu</div>
            <div className="item">Fri</div>
            <div className="item">Sat</div>
          </div>
          <div className="row flex justify-between body">
            <div className="item">9:00-21:00</div>
            <div className="item">9:00-21:00</div>
            <div className="item">9:00-21:00</div>
            <div className="item">9:00-21:00</div>
            <div className="item">9:00-21:00</div>
            <div className="item">9:00-21:00</div>
            <div className="item">9:00-21:00</div>
          </div>
        </div>
      </section>
      <section className="description">
        <span className="title-small text-center">Description</span>
        <p>{description}</p>
      </section>
      <Services/>
    </div>
  </div>)
  }
  return null
}


