import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d487936.4863180436!2d9.7489!3d4.0605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1641693428088!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  return (
    <>
      <Back title='Contact' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
          <iframe src={map} title="Carte de Banamoussadi, Douala, Cameroun"></iframe>

          </div>
          <div className='right row'>
            <h1>Contact</h1>
            <p>Nous sommes ouverts à toute suggestion ou simplement pour discuter.</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Bonamoussadi, Douala, Cameroun.</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> infos@kms-entreprises.com</p>
              </div>
              <div className='box'>
                <h4> TÉLÉPHONE:</h4>
                <p>+237 678687686</p>
                <p>+237 696447963</p>
                <p>+1(780)902-3912</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Nom' />
                <input type='email' placeholder='Adresse E-mail' />
              </div>
              <input type='text' placeholder='Objet' />
              <textarea cols='30' rows='10'>
              Créez un message ici...
              </textarea>
              <button className='primary-btn'><a href="mailto:infos@kms-entreprises.com" style={{color: 'white'}}>ENVOYER UN MESSAGE</a></button>
            </form>

            <h3>Suivez-nous ici</h3>
            <span>FACEBOOK LINKEDIN INSTAGRAM</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
