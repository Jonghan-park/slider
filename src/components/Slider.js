import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {data} from './data'
import "./Slider.css"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(2)
  return (
    <div className='slider'>
      <BsFillArrowLeftCircleFill className="arrow prev" />
      <BsFillArrowRightCircleFill className="arrow next" />
      
      {data.map((slide, index) => {
        return (
          <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
            {index === currentSlide && (
              <>
              <img src={slide.image} alt={slide.heading} />
              <div className="content">
                <h2>{slide.heading}</h2>
                <p>{slide.desc}</p>
                <hr />
                <button className="--btn --btn-primary">Get Started</button>
              </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Slider