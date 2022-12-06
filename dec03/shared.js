const calculatePriority = char =>
  char == char.toUpperCase()
    ? char.charCodeAt(0) - 'A'.charCodeAt(0) + 27
    : char.charCodeAt(0) - 'a'.charCodeAt(0) + 1

const findSharedItem = ([search, ...remaining]) =>
  [...new Set(search.split(''))].find(key => {
    return remaining.every(bag => bag.includes(key))
  })

export { calculatePriority, findSharedItem }
