

class User {
  userName: string;
  userAvatarURL: string;
  constructor(userName: string, userAvatarURL: string) {
    this.userName = userName;
    this.userAvatarURL = userAvatarURL;
  }
}

export function getUserData() {
  const user: unknown = JSON.parse(localStorage.getItem('user'))
  if (user == null) {
    const noUser = new User("Пока пусто", "/img/img1.jpeg")
    return noUser
  }
  if (typeof user === 'object') {
    if ('userName' in user && 'userAvatarURL' in user) {
      return user
    }
  }
  else return user
}


export const getFavoritesAmount = () => {

  const favoritesAmount = Number(localStorage.getItem('favoritAmount'))

  if (typeof Number(favoritesAmount) === 'number' && !isNaN(Number(favoritesAmount))) {
    console.log(favoritesAmount)
    return favoritesAmount
  }

}

