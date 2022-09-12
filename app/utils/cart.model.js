import fetch from 'isomorphic-unfetch'

function post(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((results) => results.json())
}

function get(url) {
  return fetch(url).then((results) => results.json())
}

export function getCart(userId) {
  return get(`http://localhost:3333/cart?userId=${userId}`)
}

export function addToCart(userId, productId, quantity) {
  return post('http://localhost:3333/cart', { userId, productId, quantity })
}
