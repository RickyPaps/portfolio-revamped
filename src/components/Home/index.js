import './index.scss'
import LogoTitle from '../../assets/images/portolio-letter.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import Loader from 'react-loaders'
import Lottie from 'react-lottie'
import animationData from '../../lotties/home-animation'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      className: "lottie-player"
    },
  }

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
              strArray={'icky Papini'.split('')}
              id={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Web Developer'.split('')}
              id={22}
            />
          </h1>
          <h2>Frontend Developer / Legend</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <div className="animation-container">
          <Lottie
            id="lottie-icon"
            options={defaultOptions}
            class="lottie-player"
          />
        </div>
        {/* <Logo /> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
