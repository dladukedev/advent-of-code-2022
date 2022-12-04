import { solvePart1 } from './part1.js'
import { solvePart2 } from './part2.js'

const testInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

test('December 04 - Part 1', () => {
  expect(solvePart1(testInput)).toBe(2)
})

test('December 04 - Part 2', () => {
  expect(solvePart2(testInput)).toBe(4)
})
