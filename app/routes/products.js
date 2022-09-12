import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Outlet } from '@remix-run/react'
import { getCart } from '../utils/cart.model'

export async function loader() {
  const userId = 1
  const cart = await getCart(userId)
  return json(cart || [])
}

export default function ProductsLayout() {
  const cart = useLoaderData()

  return (
    <div className="products-layout layout">
      <header>Products Layout</header>
      <div className="flex flex-gap">
        <aside style={{ width: '15em' }}>
          <div className="cart">
            Cart Items <b>{cart?.length || 0}</b>
          </div>
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
