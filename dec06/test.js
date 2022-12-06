import { solvePart1 } from './part1.js'
import { solvePart2 } from './part2.js'

const testInput = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`

test('December 06 - Part 1', () => {
  expect(solvePart1(testInput)).toBe(7)
})

test('December 06 - Part 2', () => {
  expect(solvePart2(testInput)).toBe(19)
})
