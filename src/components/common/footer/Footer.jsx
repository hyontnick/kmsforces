import React from "react"
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
            <h2>KMS FORCE</h2>
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
              <li>Processus Automatisatiser</li>
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
              <li><a href="#">www.kmsbulk.com</a></li>
              <li><a href="#">www.kmslearn.com</a></li>
              <li><a href="#">www.kmsshop.com</a></li>
              <li><a href="#">www.kmsfinance.com</a></li>
              <li><a href="#">www.kmstrack.com</a></li>
              <li><a href="#">www.kmspro.com</a></li>
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
                <i className='fa fa-phone-alt'></i>+237 678687686 / +237 696447963</a>
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
