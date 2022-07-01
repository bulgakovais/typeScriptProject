import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { getUserData, getFavoritesCaption } from './helpers/userData.js'
import { searchHandler } from './helpers/search-handler.js'

const favoritesCaption = getFavoritesCaption()
const user = getUserData()


window.addEventListener('DOMContentLoaded', () => {

  renderUserBlock(user, favoritesCaption)
  renderSearchFormBlock()
  renderSearchStubBlock()

  const btnSearch = document.getElementById("btn-search")

  btnSearch.addEventListener<"click">("click", (event: Event) => {
    event.preventDefault()
    searchHandler()
  })

})

