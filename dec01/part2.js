const getTopMaxCalories = count => data => {
  const elfLoad = data.split(/\n\n/)
  const calorieCount = elfLoad.map(load =>
    load
      .split(/\n/)
      .map(element => parseInt(element))
      .reduce((accumulator, current) => accumulator + current, 0),
  )

  return calorieCount
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, count)
    .reduce((accumulator, current) => accumulator + current, 0)
}

const getTop3MaxCalories = getTopMaxCalories(3)

export { getTop3MaxCalories }
