/*************************************
 * Getting Prices
 * A Touch of Formatting
 * Refactoring to Point-Free
 * Wait There’s More!
 *
 ***********************************/

import { map, pipe, reduce } from 'ramda'
import cart from './cart'

const toUSD = amount =>
  amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })

const getTotalPrice = pipe(
  map(item => item.price),
  reduce((acc, value) => acc + value, 0),
  toUSD
)

const result = getTotalPrice(cart)

console.log({ result })

const getTotalPrice = pipe(map(prop('price')), reduce(add, 0), toUSD)

const result = getTotalPrice(cart)

console.log({ result })

const toUSD = amount =>
  amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })

const getTotalPrice = pipe(pluck('price'), sum, toUSD)

const result = getTotalPrice(cart)

console.log({ result })
