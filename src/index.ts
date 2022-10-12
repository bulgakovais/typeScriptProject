import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { getUserData, getFavoritesCaption } from './helpers/userData.js'
import { searchHandler } from './helpers/search-handler.js'

const favoritesCaption = getFavoritesCaption() || undefined
const user = getUserData()

window.addEventListener('DOMContentLoaded', () => {

  renderUserBlock(user, favoritesCaption)
  renderSearchFormBlock()
  renderSearchStubBlock()

  const btnSearch = document.getElementById("btn-search")
  if (btnSearch != null) {
    btnSearch.addEventListener<"click">("click", (event: Event) => {
      event.preventDefault()
      searchHandler()
    })
  }

})

