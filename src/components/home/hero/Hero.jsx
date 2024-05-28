import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
//import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading title="L'expertise de kms entreprise dans les CRM en ligne" />
            <div className='button'>
            <button className='primary-btn'>
                KMS FORCE 
              </button>             
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
