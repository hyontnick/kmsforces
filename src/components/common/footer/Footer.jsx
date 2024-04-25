import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Restez à l'écoute</h1>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Entrez votre adresse e-mail.' />
            <a href="mailto:Contacts@kms-entreprises.com"><i className='fa fa-paper-plane'></i></a>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>KMS FORCE</h1>
            <span>CRM EN LIGNE</span>
            <p> Le CRM puissant au service du developpement de l'entreprise.</p>
            <ul class="social">
            <li>
              <a href="https://www.facebook.com/kmsentreprises?mibextid=9R9pXO">
              <i className='fab fa-facebook-f icon'></i></a>
            </li>
              <li>
                <a href="https://www.linkedin.com/company/kms-entreprises/" >
                <i className='fab fa-linkedin icon'></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                <i className='fab fa-instagram icon'></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/kms-entreprises/" >
                <i className='fas fa-globe icon'></i></a>
              </li>
            </ul>
            
          </div>
          <div className='box link'>
            <h3>Explorer</h3>
            <ul>
              <li>Qui sommes-nous</li>
              <li>Équipe</li>
              <li>Tarification</li>
              <li>Blog</li>
              <li>Tarification</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Modules</h3>
            <ul>
              <li>Contacts et des Clients</li>
              <li>Devis et Factures</li>
              <li>Messagerie Intégrée</li>
              <li>Projets</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Articles récents</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Avez-vous des questions ?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Bonamoussadi, Douala, Cameroun
              </li>
              <li>
                <a href="tel:+237 678687686">
                <i className='fa fa-phone-alt'></i>+237 678 687 686</a>
              </li>
              <li>
                <a href="mailto:Contacts@kms-entreprises.com">
                <i className='fa fa-paper-plane'></i>Contact@kms-entreprises.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 KMS entreprise | Tous droits réservés <i className='fa fa-heart'></i>.
        </p>
      </div>
    </>
  )
}

export default Footer
