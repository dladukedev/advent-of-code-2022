import { toRangePair } from './shared.js'

const contains = (
  { start: firstStart, end: firstEnd },
  { start: secondStart, end: secondEnd },
) => firstStart <= secondStart && firstEnd >= secondEnd

const countIfContains = (accum, [first, second]) =>
  contains(first, second) || contains(second, first) ? accum + 1 : accum

const solvePart1 = data =>
  data.split(/\n/).map(toRangePair).reduce(countIfContains, 0)

export { solvePart1 }
