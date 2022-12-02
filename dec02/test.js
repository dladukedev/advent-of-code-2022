import { getScore } from './part1.js'
import { getTargetScore } from './part2.js'

const testInput = `A Y
B X
C Z`

test('December 02 - Part 1', () => {
  expect(getScore(testInput)).toBe(15)
})

test('December 02 - Part 2', () => {
  expect(getTargetScore(testInput)).toBe(12)
})
