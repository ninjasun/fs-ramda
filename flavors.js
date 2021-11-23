import { lensPath, map, pipe, over, toUpper, view } from 'ramda'
import employees from './employees.json'

const favoriteFlavor = lensPath([
  'interests',
  'foods',
  'sweets',
  'iceCream',
  'favoriteFlavor'
])

const emphasize = pipe(toUpper, flavor => `${flavor} IS A GREAT FLAVOR`)

const emphasizeFlavor = pipe(
  over(favoriteFlavor, emphasize),
  view(favoriteFlavor)
)

const emphasizeFlavors = map(emphasizeFlavor)

const result = emphasizeFlavors(employees)

console.log({ result })
