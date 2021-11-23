import menu from './menu'
import { descend, gte, pipe, prop, propSatisfies, slice, sort } from 'ramda'

const getTop3MealsFor = (maxPrice, menu) =>
  menu
    .filter(item => item.price <= maxPrice)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

const result = getTop3MealsFor(12, menu)

console.log({ result })

const getTop3MealsFor = pipe(
  (maxPrice, menu) => menu.filter(propSatisfies(gte(maxPrice), 'price')),
  sort((a, b) => b.rating - a.rating),
  slice(0, 3)
)

const result = getTop3MealsFor(12, menu)

console.log({ result })

const byPrice = descend(prop('rating'))
const getTop3MealsFor = pipe(
  (maxPrice, menu) => menu.filter(propSatisfies(gte(maxPrice), 'price')),
  sort(byPrice),
  slice(0, 3)
)

const result = getTop3MealsFor(12, menu)

console.log({ result })
