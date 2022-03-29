const setupTags = recipes => {
  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (!allTags[tag]) {
        allTags[tag] = 1
      } else {
        allTags[tag] += 1
      }
    })
  })
  const newArray = Object.entries(allTags).sort((a, b) => {
    const [fistTag] = a
    const [secondTag] = b
    return fistTag.localeCompare(secondTag)
  })

  return newArray
}
export default setupTags
