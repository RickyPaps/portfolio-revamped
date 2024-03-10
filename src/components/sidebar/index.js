import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/portolio-letter.png'
import LogoSub from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClose,
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import MobileMenu from '../Mobile-Menu'
import { useRef } from 'react'
import { SidebarAnimation } from './Animation'

const Sidebar = () => {
  const [showMobile, setShowMobile] = useState(false)
  const menuRef = useRef(null)
  const menuLinks = useRef(null)
  const socialLinks = useRef(null)

  SidebarAnimation(menuLinks, menuRef, socialLinks)

  return (
    <>
      <div className="nav-bar" ref={menuRef}>
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
          <img src={LogoSub} className="sub-logo" alt="sub-logo" />
        </Link>
        <nav className={showMobile ? 'mobile-show' : ''} ref={menuLinks}>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowMobile(false)}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            onClick={() => setShowMobile(false)}
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            onClick={() => setShowMobile(false)}
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <NavLink
            onClick={() => setShowMobile(false)}
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon
            icon={faClose}
            color="#ffd700"
            size="3x"
            className="mobile-close-icon"
            onClick={() => setShowMobile(false)}
          />
        </nav>
        <ul ref={socialLinks}>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ricky-papini-427ba0146/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/RickyPaps?tab=repositories"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
      <MobileMenu />
    </>
  )
}

export default Sidebar
