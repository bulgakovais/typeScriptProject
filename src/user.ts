import { renderBlock } from './lib.js'



export function renderUserBlock(user: any, favoritesCaption: number = 0) {

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${user.userAvatarURL}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${user.userName}</p>
          <p class="fav">
            <i class="heart-icon${favoritesCaption > 0 ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
