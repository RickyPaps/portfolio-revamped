// ** Helper Functions for the portfolio item animation **

let expandedCard
let initialProperties = []
let finalProperties = []
let cardClip

const getCardContent = () => {
  if (!expandedCard) return
  return expandedCard.querySelector('.card__content')
}

const getAnimatableElements = () => {
  if (!expandedCard) return
  return expandedCard.querySelectorAll('.js-animatable')
}

export const setup = () => {
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

const expand = () => {
  getCardContent().addEventListener('transitionend', onExpandTransitionEnd)

  disablePageScroll()
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

const collectInitialProperties = () => {
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

const collectFinalProperties = () => {
  const elements = getAnimatableElements()
  for (const element of elements) {
    finalProperties.push({
      rect: element.getBoundingClientRect(),
      opacity: parseFloat(window.getComputedStyle(element).opacity),
    })
  }
}

const setInvertedTransformAndOpacity = () => {
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

const clipCardContent = () => {
  getCardContent().style.clipPath = `
      inset(${cardClip.top}px ${cardClip.right}px ${cardClip.bottom}px ${cardClip.left}px round 5px)
    `
}

const startExpanding = () => {
  for (const [i, element] of getAnimatableElements().entries()) {
    element.style.transform = 'translate(0, 0) scale(1)'
    element.style.opacity = `${finalProperties[i].opacity}`
  }

  getCardContent().style.clipPath = 'inset(0)'
}

const onExpandTransitionEnd = (e) => {
  const cardContent = getCardContent()
  if (e.target !== cardContent) return

  expandedCard.classList.remove('card--animatable')
  cardContent.removeEventListener('transitionend', onExpandTransitionEnd)
  removeStyles()
}

const removeStyles = () => {
  for (const element of getAnimatableElements()) {
    element.style = null
  }

  getCardContent().style = null
}

const collapse = () => {
  getCardContent().addEventListener('transitionend', onCollapseTransitionEnd)

  setCollapsingInitialStyles()

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      expandedCard.classList.add('card--animatable')
      startCollapsing()
    })
  })
}

const setCollapsingInitialStyles = () => {
  for (const element of getAnimatableElements()) {
    element.style.transform = `translate(0, 0) scale(1)`
  }

  getCardContent().style.clipPath = 'inset(0)'
}

const startCollapsing = () => {
  setInvertedTransformAndOpacity()
  clipCardContent()
}

const onCollapseTransitionEnd = (e) => {
  const cardContent = getCardContent()
  if (e.target !== cardContent) return

  expandedCard.classList.remove('card--animatable')
  expandedCard.classList.remove('card--expanded')

  cardContent.removeEventListener('transitionend', onCollapseTransitionEnd)

  removeStyles()
  enablePageScroll()

  cleanup()
}

const disablePageScroll = () => {
  document.body.style.overflow = 'hidden'
  document.getElementsByClassName('portfolio-page')[0].style.overflow = 'hidden'
}

const enablePageScroll = () => {
  document.body.style.overflow = ''
  document.getElementsByClassName('portfolio-page')[0].style.overflow = ''
}

const cleanup = () => {
  expandedCard = null
  cardClip = null
  initialProperties = []
  finalProperties = []
}
