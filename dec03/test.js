import { solvePart1 } from './part1.js'
import { solvePart2 } from './part2.js'

const testInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

test('December 03 - Part 1', () => {
  expect(solvePart1(testInput)).toBe(157)
})

test('December 03 - Part 2', () => {
  expect(solvePart2(testInput)).toBe(70)
})
