import { useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from '@remix-run/react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import slides from '../../slides'
import styles from '../../styles/slides.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function slideIndex() {
  const navigate = useNavigate()
  const index = parseInt(useParams().slideIndex!)
  const slidesRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    // Preload Images
    slides.forEach((path) => {
      new Image().src = path
    })
    slidesRef.current.focus()
  }, [])

  function getPrev() {
    return index !== 0 ? index - 1 : 0
  }

  function getNext() {
    return index < slides.length - 1 ? index + 1 : slides.length - 1
  }

  function keyDown(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft') navigate(`/slides/${getPrev()}`)
    if (event.key === 'ArrowUp') navigate(`/slides/${getPrev()}`)
    if (event.key === 'ArrowRight') navigate(`/slides/${getNext()}`)
    if (event.key === 'ArrowDown') navigate(`/slides/${getNext()}`)
  }

  return (
    <div tabIndex={1} ref={slidesRef} className="slides" onKeyDown={keyDown}>
      <div className="slides">
        {slides.map((path, i) => {
          return i === index ? (
            <div key={path} className="slide svg">
              <img src={path} alt="" />
            </div>
          ) : null
        })}
      </div>
      <nav className="primary-nav flex flex-split">
        <span className="horizontal-spacing">
          <Link to={`${getPrev()}`} aria-label="Previous">
            <BsFillArrowLeftSquareFill />
          </Link>
          <Link to={`${getNext()}`} aria-label="Next">
            <BsFillArrowRightSquareFill />
          </Link>
        </span>
        <span>{slides[index]}</span>
      </nav>
    </div>
  )
}
