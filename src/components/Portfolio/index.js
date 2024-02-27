import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../Data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    let Timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(Timeout)
    }
  }, [])

  const renderPortfolio = ({ portfolio }) => {
    return (
      <div className="images-container">
        {portfolio.map((port, id) => {
          return (
            <div key={id} className="image-box">
              <img
                src={port.cover}
                alt="portfolio"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(port.url)}
                >
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            id={15}
            strArray={'Portfolio'.split('')}
          />
        </h1>
        {renderPortfolio(portfolioData)}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
