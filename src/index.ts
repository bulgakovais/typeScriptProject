import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData, getFavoritesAmount } from './helpers/userData.js'
import { searchHandler } from './helpers/search-handler.js'

const favoritesCaption = getFavoritesAmount()
const user = getUserData()


window.addEventListener('DOMContentLoaded', () => {

  renderUserBlock(user, favoritesCaption)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success'
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто')
      }
    })

  const btnSearch = document.getElementById("btn-search")

  btnSearch.addEventListener<"click">("click", (event: any) => {
    event.preventDefault()
    searchHandler()

  })

})

