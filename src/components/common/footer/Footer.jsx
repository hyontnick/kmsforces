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
            <input type='text' placeholder='E-mail' />
            <a href="mailto:infos@kms-entreprises.com"><i className='fa fa-paper-plane'></i></a>
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
            <h3>Caractéristiques</h3>
            <ul>
              <li>Securité</li>
              <li>Interopérabilité</li>
              <li>Intuitivité</li>
              <li>Intégrations faciles</li>
              <li>Automatisation des processus</li>
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
          <div className='box link'>
            <h3>Autre Produits</h3>
            <ul>
              <li><a href="https://www.kmsbulk.com">www.kmsbulk.com</a></li>
              <li><a href="https://www.kmslearn.com">www.kmslearn.com</a></li>
              <li><a href="https://www.kmsshop.com">www.kmsshop.com</a></li>
              <li><a href="https://www.kmsfinance.com">www.kmsfinance.com</a></li>
              <li><a href="https://www.kmstrack.com">www.kmstrack.com</a></li>
              <li><a href="https://www.kmspro.com">www.kmspro.com</a></li>
            </ul>
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
                <i className='fa fa-phone-alt'></i>+237 678 687 686 / +1(780)902-3912</a>
              </li>
              <li>
                <a href="mailto:infos@kms-entreprises.com">
                <i className='fa fa-paper-plane'></i>infos@kms-entreprises.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 KMS entreprise | Tous droits réservés.
        </p>
      </div>
    </>
  )
}

export default Footer
