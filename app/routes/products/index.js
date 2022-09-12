import { json } from '@remix-run/node'
import { useLoaderData, Link } from '@remix-run/react'
import { getAllProducts } from '../../utils/products.model'
import { usePrefetch } from '../../context'

export async function loader() {
  const products = (await getAllProducts()) || []
  return json(products, {
    // headers: {
    //   'Cache-Control': 'max-age=10, stale-while-revalidate=10',
    // },
  })
}

export default function BrowseProducts() {
  const products = useLoaderData()
  const { prefetch } = usePrefetch()

  return (
    <div className="layout">
      <header>Browse Page</header>
      <div>
        <h1>
          <span>Browse</span>
        </h1>
      </div>
      {Array.isArray(products) &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <Link prefetch={prefetch} to={`${product.id}`}>
                {product.name}
              </Link>
            </div>
          )
        })}
    </div>
  )
}
