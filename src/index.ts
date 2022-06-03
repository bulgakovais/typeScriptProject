import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData, getFavoritesAmount } from './userData.js'

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

})
