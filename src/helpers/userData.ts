

export class User {
  userName: string;
  userAvatarURL: string;
  constructor(userName: string, userAvatarURL: string) {
    this.userName = userName;
    this.userAvatarURL = userAvatarURL;
  }
}

export function getUserData() {

  let LS_user = localStorage.getItem('user')
  let user: unknown

  if (LS_user != null) {
    user = JSON.parse(LS_user)
  } else {
    const noUser = new User("Пока пусто", "/img/img1.jpeg")
    return noUser
  }

  if (typeof user === 'object' && user != null) {
    if ('userName' in user && 'userAvatarURL' in user) {
      return user
    }
  }
  else return user
}

// Получить из LocalStorage длинну массива Избранного
export const getFavoritesCaption = () => {
  const LS_favItem = localStorage.getItem('favoriteItems')
  if (LS_favItem != null) {
    const favoritesCaption = (JSON.parse(LS_favItem)).length
    if (typeof favoritesCaption === 'number' && !isNaN(favoritesCaption)) {
      return favoritesCaption
    }
  }
}

