import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>KMS FORCE</h1>
            <span>LE CRM EN LIGNE</span>
          </div>

          <div className='social'>
          <a href="https://www.facebook.com/kmsentreprises?mibextid=9R9pXO"><i className='fab fa-facebook-f icon'></i></a>
          <a href="https://www.linkedin.com/company/kms-entreprises/" ><i className='fas fa-globe icon'></i></a>
          <a href="https://www.linkedin.com/company/kms-entreprises/" ><i className='fab fa-linkedin icon'></i></a>
          <a href="https://www.instagram.com"><i className='fab fa-instagram icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
