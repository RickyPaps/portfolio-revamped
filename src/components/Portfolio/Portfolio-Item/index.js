import { useEffect } from 'react'
import './index.scss'

const PortfolioItem = () => {
  let expandedCard
  let initialProperties = []
  let finalProperties = []
  let cardClip

  function getAnimatableElements() {
    if (!expandedCard) return
    return expandedCard.querySelectorAll('.js-animatable')
  }

  function getCardContent() {
    if (!expandedCard) return
    return expandedCard.querySelector('.card__content')
  }

  function setup() {
    document.addEventListener('click', (e) => {
      if (expandedCard) return

      if (e.target.matches('.js-card')) {
        expandedCard = e.target
      } else if (e.target.closest('.js-card')) {
        expandedCard = e.target.closest('.js-card')
      }

      if (!expandedCard) return

      const closeButton = expandedCard.querySelector('.js-close-button')
      closeButton.addEventListener('click', collapse)

      expand()
    })
  }

  function expand() {
    getCardContent().addEventListener('transitionend', onExpandTransitionEnd)

    // disablePageScroll()
    collectInitialProperties()

    expandedCard.classList.add('card--expanded')

    collectFinalProperties()

    setInvertedTransformAndOpacity()
    clipCardContent()

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        expandedCard.classList.add('card--animatable')
        startExpanding()
      })
    })
  }

  function collectInitialProperties() {
    for (const element of getAnimatableElements()) {
      initialProperties.push({
        rect: element.getBoundingClientRect(),
        opacity: parseFloat(window.getComputedStyle(element).opacity),
      })
    }

    const cardRect = expandedCard.getBoundingClientRect()
    cardClip = {
      top: cardRect.top,
      right: window.innerWidth - cardRect.right,
      bottom: window.innerHeight - cardRect.bottom,
      left: cardRect.left,
    }
  }

  function collectFinalProperties() {
    const elements = getAnimatableElements()
    for (const element of elements) {
      finalProperties.push({
        rect: element.getBoundingClientRect(),
        opacity: parseFloat(window.getComputedStyle(element).opacity),
      })
    }
  }

  function setInvertedTransformAndOpacity() {
    const elements = getAnimatableElements()
    for (const [i, element] of elements.entries()) {
      element.style.transform = `translate(${
        initialProperties[i].rect.left - finalProperties[i].rect.left
      }px, ${
        initialProperties[i].rect.top - finalProperties[i].rect.top
      }px) scale(${
        initialProperties[i].rect.width / finalProperties[i].rect.width
      })`

      element.style.opacity = `${initialProperties[i].opacity}`
    }
  }

  function clipCardContent() {
    getCardContent().style.clipPath = `
      inset(${cardClip.top}px ${cardClip.right}px ${cardClip.bottom}px ${cardClip.left}px round 5px)
    `
  }

  function startExpanding() {
    for (const [i, element] of getAnimatableElements().entries()) {
      element.style.transform = 'translate(0, 0) scale(1)'
      element.style.opacity = `${finalProperties[i].opacity}`
    }

    getCardContent().style.clipPath = 'inset(0)'
  }

  function onExpandTransitionEnd(e) {
    const cardContent = getCardContent()
    if (e.target !== cardContent) return

    expandedCard.classList.remove('card--animatable')
    cardContent.removeEventListener('transitionend', onExpandTransitionEnd)
    removeStyles()
  }

  function removeStyles() {
    for (const element of getAnimatableElements()) {
      element.style = null
    }

    getCardContent().style = null
  }

  function collapse() {
    getCardContent().addEventListener('transitionend', onCollapseTransitionEnd)

    setCollapsingInitialStyles()

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        expandedCard.classList.add('card--animatable')
        startCollapsing()
      })
    })
  }

  function setCollapsingInitialStyles() {
    for (const element of getAnimatableElements()) {
      element.style.transform = `translate(0, 0) scale(1)`
    }

    getCardContent().style.clipPath = 'inset(0)'
  }

  function startCollapsing() {
    setInvertedTransformAndOpacity()
    clipCardContent()
  }

  function onCollapseTransitionEnd(e) {
    const cardContent = getCardContent()
    if (e.target !== cardContent) return

    expandedCard.classList.remove('card--animatable')
    expandedCard.classList.remove('card--expanded')

    cardContent.removeEventListener('transitionend', onCollapseTransitionEnd)

    removeStyles()
    enablePageScroll()

    cleanup()
  }

  //   function disablePageScroll() {
  //     document.body.style.overflow = 'hidden'
  //   }

  function enablePageScroll() {
    document.body.style.overflow = ''
  }

  function cleanup() {
    expandedCard = null
    cardClip = null
    initialProperties = []
    finalProperties = []
  }

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
              <h2 className="card__title js-animatable">Mr Price Ecommerce PWA</h2>
              <div className="card__subtitle js-animatable">
                Ionic React, Graphql, Magento 2
              </div>
              <ul className="card__user-links js-animatable">
                <li className="card__user-link">
                  <a href="https://tahazsh.com" alt="Blog">
                    <svg
                      className="card__user-link-icon"
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="m100 323.265h60c11.046 0 20-8.954 20-20s-8.954-20-20-20h-60c-11.046 0-20 8.954-20 20s8.954 20 20 20z" />
                        <path d="m100 243.265h60c11.046 0 20-8.954 20-20s-8.954-20-20-20h-60c-11.046 0-20 8.954-20 20s8.954 20 20 20z" />
                        <path d="m217.441 303.265c0 11.046 8.954 20 20 20 41.821 0 81.139-16.286 110.711-45.858l146.26-146.274c23.448-23.447 23.452-61.402 0-84.853-23.393-23.394-61.458-23.394-84.853 0l-146.26 146.274c-29.571 29.573-45.858 68.89-45.858 110.711zm220.404-228.7c7.796-7.798 20.486-7.798 28.283 0 7.816 7.814 7.819 20.467 0 28.284l-146.261 146.274c-16.719 16.72-37.624 27.735-60.352 32.068 4.333-22.727 15.349-43.632 32.067-60.352z" />
                        <path d="m60 483.265c14.776 0 28.978-5.422 39.992-15.27l27.647-24.73h204.361c55.141 0 100-44.86 100-100v-44.863c0-11.046-8.954-20-20-20s-20 8.954-20 20v44.863c0 33.084-26.916 60-60 60h-212c-4.92 0-9.667 1.813-13.334 5.093l-33.338 29.821c-3.669 3.28-8.402 5.086-13.328 5.086-11.028 0-20-8.972-20-20v-240c0-33.084 26.916-60 60-60h167.749c11.046 0 20-8.954 20-20s-8.954-20-20-20h-167.749c-55.141 0-100 44.86-100 100v240c0 33.084 26.916 60 60 60z" />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="card__user-link">
                  <a href="https://twitter.com/tahazsh" alt="Twitter">
                    <svg
                      className="card__user-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      viewBox="0 0 248 204"
                    >
                      <path d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z" />
                    </svg>
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
