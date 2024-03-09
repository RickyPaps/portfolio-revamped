import { useEffect } from 'react'
import './index.scss'
import { setup } from './Helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInternetExplorer, faGit } from '@fortawesome/free-brands-svg-icons'

const PortfolioItem = () => {
  useEffect(() => {
    setup()
  }, [])

  return (
    <div className="cards">
      <div className="card js-card">
        <div className="card__content">
          <button className="card__close js-close-button">
            <svg
              fill="currentColor"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m4.59 59.41a2 2 0 0 0 2.83 0l24.58-24.58 24.59 24.58a2 2 0 0 0 2.83-2.83l-24.59-24.58 24.58-24.59a2 2 0 0 0 -2.83-2.83l-24.58 24.59-24.59-24.58a2 2 0 0 0 -2.82 2.82l24.58 24.59-24.58 24.59a2 2 0 0 0 0 2.82z" />
            </svg>
          </button>
          <div className="card__header">
            <img
              className="card__user-image js-animatable"
              src="/portfolio/mrp_pwa/mrpe001_mr_price.jpg"
              alt=""
            />
            <div className="card__user-info">
              <h2 className="card__title js-animatable">
                Mr Price Ecommerce PWA
              </h2>
              <div className="card__subtitle js-animatable">
                Ionic React, Graphql, Magento 2
              </div>
              <ul className="card__user-links js-animatable">
                <li className="card__user-link">
                  <a href="#" alt="Blog">
                    <FontAwesomeIcon
                      icon={faInternetExplorer}
                      color="#000"
                      fontSize="20px"
                    />
                  </a>
                </li>
                <li className="card__user-link">
                  <a href="#" alt="Twitter">
                    <FontAwesomeIcon
                      icon={faGit}
                      color="#000"
                      fontSize="20px"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card__bio js-animatable">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            iusto. Sed, hic corrupti autem atque provident debitis ex modi
            facilis iusto mollitia nam maxime sit eos vitae illo nisi eligendi
            animi reiciendis laborum odit in aperiam natus! Voluptatibus
            perferendis doloribus tenetur veritatis numquam natus, iste, eaque
            dicta, magni aspernatur sunt corrupti consequatur? Porro tempora
            veritatis vitae maxime dolor, facilis quidem quae ipsam voluptatibus
            doloribus eius eum temporibus assumenda deleniti nulla minus quos
            possimus magnam adipisci dignissimos sapiente consequatur
            recusandae. Quaerat saepe adipisci, nihil, quae necessitatibus dicta
            assumenda labore blanditiis fugit similique ipsum quod culpa
            distinctio dolore ex quasi odio veritatis.
          </div>

          <div className="card__images js-animatable">
            <img
              className="card__image"
              src="https://source.unsplash.com/featured/250x250?flowers"
              alt=""
            />
            <img
              className="card__image"
              src="https://source.unsplash.com/featured/250x280?flowers"
              alt=""
            />
            <img
              className="card__image"
              src="https://source.unsplash.com/featured/270x270?flowers"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
