import React, { useState, useRef, useEffect } from 'react'
import './Accordion.css'
import Arrow from './Arrow.svg'

export default function Accordion() {

  const [toggleState, setToggleState]= useState(false)
  const [heightElement, setHeightElement] = useState()

  const stateToggle = () => {
      setToggleState(!toggleState)
  }

  const refToggle = useRef()

  useEffect(() => {
    setHeightElement(`${refToggle.current.scrollHeight}px`)
  }, [])
  
  
  return (
    <>
        <h1>Simple React Accordion</h1>
        <div className='accordion'>
            <div onClick={stateToggle} className="accordion-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Arrow} alt="Arrow Down" />
            </div>

            <div 
            ref={refToggle} 
            className={toggleState ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggleState ? `${heightElement}` : "0px" }}
            >
            
                <p aria-hidden={toggleState ? "true" : "false"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nisi provident. Ipsum vel laborum blanditiis, voluptatum officia itaque ducimus. Ipsa reprehenderit dolorem nostrum molestiae quam minima natus autem aperiam illum!
                </p>
            </div>
        </div>
    </>
  )
}
