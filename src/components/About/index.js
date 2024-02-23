import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faReact,
  faShopify,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              id={15}
            />
          </h1>
          <p>
            As an ambitious Front-End Developer, I am eagerly seeking
            opportunities within the IT industry where I can immerse myself in
            cutting-edge web technologies and tackle exciting and diverse
            projects.
          </p>
          <p>
            thrive on curiosity, perpetually honing my skills, tackling
            challenges one at a time as I journey through the world of Front-End
            Development
          </p>
          <p>
            Summing myself up in a single sentence: determined, football
            fanatic, photography enthusiast, and tech obsessed
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A49D" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faShopify} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
