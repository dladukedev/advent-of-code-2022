const getMaxCalories = data => {
  const elfLoad = data.split(/\n\n/)
  const calorieCount = elfLoad.map(load =>
    load
      .split(/\n/)
      .map(element => parseInt(element))
      .reduce((accumulator, current) => accumulator + current, 0),
  )

  return Math.max(...calorieCount)
}

export { getMaxCalories }
