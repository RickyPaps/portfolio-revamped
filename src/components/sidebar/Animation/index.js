import { useLayoutEffect } from 'react'
import gsap from 'gsap-trial'

export const SidebarAnimation = (menuLinks, menuRef, socialLinks) => {
  useLayoutEffect(() => {
    var sidebarAnim = gsap.timeline()
    debugger
    const links = menuLinks.current.querySelectorAll('a')
    const socials = socialLinks.current.querySelectorAll('li')

    sidebarAnim
      .to(menuRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        stagger: 10,
        ease: 'power3',
      })
      .to(
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
      .to(
        socials,
        {
          duration: 1.5,
          y: 0,
          autoAlpha: 1,
          stagger: 0.2,
          ease: 'power3.inOut',
        },
        '-=.5'
      )
  }, [])
}
