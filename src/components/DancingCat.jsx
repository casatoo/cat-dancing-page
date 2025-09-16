import { useState } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="dancing-cat-container">
      <div className="cat-wrapper">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}
        />
      </div>
      <div className="controls">
        <button
          onClick={toggleAnimation}
          className="dance-button"
        >
          {isAnimating ? '춤 멈추기' : '춤추기 시작'}
        </button>
      </div>
    </div>
  )
}

export default DancingCat