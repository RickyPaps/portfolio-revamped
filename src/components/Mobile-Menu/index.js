import gsap from 'gsap-trial'
import './index.scss'
import { useLayoutEffect, useRef } from 'react'
import { useState } from 'react'

const MobileMenu = () => {
  const hamRef = useRef(null)
  const menuRef = useRef(null)

  const [isOpen, setisOpen] = useState(false)

  useLayoutEffect(() => {
    if (hamRef.current !== null) {
      var tl = gsap.timeline({ paused: true })
      const links = menuRef.current.querySelectorAll('li')

      tl.to(menuRef.current, {
        duration: 0.9,
        opacity: 1,
        height: '100vh',
        ease: 'expo.inOut',
      })
      tl.to(
        links,
        {
          duration: 1.5,
          y: 0,
          autoAlpha: 1,
          stagger: 0.2,
          ease: 'power3.inOut',
        },
        '-=.5'
      )

      tl.reverse()

      hamRef.current.addEventListener('click', () => {
        tl.reversed(!tl.reversed())
      })
    }
  }, [hamRef])

  const handleToggle = () => {
    setisOpen((prev) => !prev)
  }

  return (
    <div className="mobile-wrapper">
      <div
        id="hamburger"
        className={isOpen ? 'ham open' : 'ham'}
        ref={hamRef}
        onClick={() => handleToggle()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="main-menu" ref={menuRef}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
