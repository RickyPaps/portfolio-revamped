import './index.scss'
import LogoTitle from '../../assets/images/portolio-letter.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let Timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(Timeout)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="dev" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"icky Papini".split("")}
              id={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Web Developer".split("")}
              id={22}
            />
          </h1>
          <h2>Frontend Developer / Legend</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        {/* <Logo /> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
