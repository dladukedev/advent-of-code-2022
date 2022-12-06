const sum = (accumulator, current) => accumulator + current

const chunk = size => (accumulator, current, currentIndex, _) =>
  currentIndex % size !== 0
    ? [
        ...accumulator.slice(0, accumulator.length - 1),
        [...accumulator[accumulator.length - 1], current],
      ]
    : [...accumulator, [current]]

const windowed = size => (accumulator, _, currentIndex, array) =>
  currentIndex + size > array.length
    ? accumulator
    : [...accumulator, array.slice(currentIndex, currentIndex + size)]

const isUniqueArray = array => [...new Set(array)].length === array.length

export { sum, chunk, windowed, isUniqueArray }
