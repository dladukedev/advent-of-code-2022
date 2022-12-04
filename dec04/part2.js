import { toRangePair } from './shared.js'

const contains = ({ start, end }, value) => start <= value && end >= value

const isIntersect = (first, second) =>
  contains(first, second.start) ||
  contains(first, second.end) ||
  contains(second, first.start) ||
  contains(second, first.end)

const countIfIntersect = (accum, [first, second]) =>
  isIntersect(first, second) ? accum + 1 : accum

const solvePart2 = data =>
  data.split(/\n/).map(toRangePair).reduce(countIfIntersect, 0)

export { solvePart2 }
