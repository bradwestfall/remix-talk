import { json } from '@remix-run/node'
import { useLoaderData, useFetcher } from '@remix-run/react'
import { getProductById } from '../../utils/products.model'
import { addToCart } from '../../utils/cart.model'

export async function loader({ params }) {
  const product = await getProductById(params.productId)
  if (!product) {
    throw new Response('Not Found', { status: 404 })
  }
  return json(product, {
    // headers: {
    //   'Cache-Control': 'max-age=10, stale-while-revalidate=10',
    // },
  })
}

export async function action({ request }) {
  const formData = await request.formData()
  const action = formData.get('action')
  switch (action) {
    case 'addToCart': {
      const productId = formData.get('productId')
      const userId = 1
      const quantity = 1
      await addToCart(userId, parseInt(productId), quantity)
      break
    }
    default: {
      throw new Response('Bad Request', { status: 400 })
    }
  }
  return json({ success: true })
}

export default function ProductProfile() {
  const product = useLoaderData()
  const fetcher = useFetcher()

  return (
    <div className="product-details layout">
      <header>Product Details</header>
      <div className="flex flex-gap items-center">
        <div style={{ fontSize: '3em', lineHeight: '1em' }}>{product.image}</div>
        <h1>{product?.name}</h1>
      </div>
      <hr />
      <div>
        <fetcher.Form method="post">
          <input type="hidden" name="productId" value={product.id} />
          <button className="button" name="action" value="addToCart">
            Add to cart
          </button>
        </fetcher.Form>
      </div>
    </div>
  )
}
