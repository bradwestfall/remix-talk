import { Link } from '@remix-run/react'
import { usePrefetch } from '../context'

export function MainLayout({ children }) {
  const { prefetch, setPrefetch } = usePrefetch()

  return (
    <div className="main-layout layout spacing">
      <header>Main Layout</header>
      <nav className="primary-nav flex flex-split">
        <div className="horizontal-spacing">
          <Link to="/">Home</Link>
          <Link to="/products">Browse Products</Link>
          <Link to="/slides/0">Slides</Link>
        </div>
        <div className="horizontal-spacing ">
          <button
            onClick={() => setPrefetch('none')}
            className={prefetch === 'none' ? 'active' : ''}
          >
            <span>Links Prefetch:</span> <b>None</b>
          </button>
          <button
            onClick={() => setPrefetch('intent')}
            className={prefetch === 'intent' ? 'active' : ''}
          >
            <span>Links Prefetch:</span> <b>Intent</b>
          </button>
          <button
            onClick={() => setPrefetch('render')}
            className={prefetch === 'render' ? 'active' : ''}
          >
            <span>Links Prefetch:</span> <b>Render</b>
          </button>
        </div>
      </nav>
      {children}
    </div>
  )
}
