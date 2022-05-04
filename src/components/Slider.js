import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {data} from './data'
import "./Slider.css"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div className='slider'>
      <BsFillArrowLeftCircleFill className="arrow prev" />
      <BsFillArrowRightCircleFill className="arrow next" />
      
      {data.map((slide, index) => {
        return (
          <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
            
          </div>
        )
      })}
    </div>
  )
}

export default Slider