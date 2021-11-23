import { map, flip, gt, lt, cond, gte, lte } from 'ramda'
import scores from './data/scores.json'

const flipGt = flip(gt)
const flipLt = flip(lt)

const fn = cond([
  [flipGt(800), score => score + ` is excellent!`],
  [flipGt(700), score => score + ` is good!`],
  [flipGt(650), score => score + ` is fair!`],
  [flipLt(649), score => score + ` is poor!`]
])
const getReviewCreditScores = map(fn)

const result = getReviewCreditScores(scores)
console.log({ result })

const reviewCreditScore = cond([
  [lte(800), score => `${score} is excellent!`],
  [lte(700), score => `${score} is good`],
  [lte(650), score => `${score} is fair`],
  [gte(649), score => `${score} is poor`]
])

const reviewCreditScores = map(reviewCreditScore)

console.log(reviewCreditScores(scores))
