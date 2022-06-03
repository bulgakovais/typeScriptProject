
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
  // Так корректно приводить к объекту тип unknown?)Или есть другой способ?
  else return Object(user)
}


export const getFavoritesAmount = () => {
  const favoritesAmount = Number(localStorage.getItem('favoritAmount'))
  console.log(favoritesAmount)
  return favoritesAmount
}
