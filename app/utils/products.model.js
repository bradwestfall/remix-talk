import fetch from 'isomorphic-unfetch'

function get(url) {
  return fetch(url).then((results) => results.json())
}

export function getAllProducts() {
  return get('http://localhost:3333/products')
}

export function getProductById(productId) {
  return get(`http://localhost:3333/products/${productId}`)
}
