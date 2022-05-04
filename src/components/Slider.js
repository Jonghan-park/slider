import React, { useState, useEffect } from 'react'
import Button from 'bootstrap/js/dist/button'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {data} from './data'
import "./Slider.css"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = data.length
  // slideLength = 1 2 3
  // crrentSlide = 0 1 2
  const nextSlide =() =>{
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide =() =>{
    setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1)
  }

  useEffect(() =>{
    setCurrentSlide(0)
  },[])

  return (
    <div className='slider'>
      <BsFillArrowLeftCircleFill className="arrow prev" onClick={prevSlide} />
      <BsFillArrowRightCircleFill className="arrow next" onClick={nextSlide} />
      
      {data.map((slide, index) => {
        return (
          <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
            {index === currentSlide && (
              <>
              <img src={slide.image} alt={slide.heading} />
              <div className="content">
                <h1>{slide.heading}</h1>
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