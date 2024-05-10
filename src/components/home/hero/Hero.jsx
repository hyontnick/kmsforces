import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
          <Heading title="L'expertise de KMS ENTREPRISE dans les CRM en ligne" />

            {/* style={{ color: '#eedd22' }} <Heading subtitle='BIENVENUE CHEZ KMS ENTREPRISE' title="L'expertise de KMS ENTREPRISE dans les CRM en ligne" /> */}
            <div className='button'>
              <button className='primary-btn'>
                KMS ENTREPRISE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              
              {/* <button>
               KMS FORCE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
