import React, { useState } from "react"
import { faq } from "../../dummydata"
import Heading from "../common/heading/Heading"

const Faq = () => {
  const [click, setClick] = useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  return (
    <>
      <Heading subtitle='FAQS' title='Questions fréquemment posées' />
      <section className='faq'>
        <div className='container'>
          {faq.map((val, index) => (
            <div className='box'>
              <button className='accordion' onClick={() => toggle(index)} key={index}>
                <h2>{val.title}</h2>
                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc}<a href="https://drive.google.com/file/d/1r4Jint9NB0xX5MVZ-u7mfDwCUJNUf-J0/view?usp=drive_link" ><b> plus...</b></a></p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faq
