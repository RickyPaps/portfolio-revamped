import gsap from 'gsap-trial'
import './index.scss'
import { useLayoutEffect, useRef } from 'react'

const MobileMenu = () => {
  const hamRef = useRef(null)
  const menuRef = useRef(null)

  useLayoutEffect(() => {
    if (hamRef.current !== null) {
      var tl = gsap.timeline({ paused: true })
      const links = menuRef.current.querySelectorAll('li')

      tl.to(menuRef.current, {
        duration: 0.9,
        opacity: 1,
        height: '100vh', // change this to 100vh for full-height menu
        ease: 'expo.inOut',
      })
      tl.from(
        links,
        {
          duration: 0.4,
          y: 40,
          opacity: 0,
          stagger: 0.1,
          ease: 'expo.in',
        },
        '-=0.5'
      )
      tl.to(links, {
        duration: 0.4,
        y: 20,
        opacity: 1,
        stagger: 0.1,
        ease: 'expo.out',
      })

      tl.reverse()

      hamRef.current.addEventListener('click', () => {
        tl.reversed(!tl.reversed())
      })
    }
  }, [hamRef])

  return (
    <div className="mobile-wrapper">
      <div className="ham" ref={hamRef}>
        <span>☰</span>
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
