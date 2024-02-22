import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, id }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + id}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
