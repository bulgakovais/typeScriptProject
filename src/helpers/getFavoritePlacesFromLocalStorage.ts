
export function getFavoritePlacesFromLocalStorage() {

  let favoritePlaces: unknown[] = JSON.parse(localStorage.getItem('favoriteItems'))

  if (favoritePlaces == null) {
    return []
  }
  if (typeof favoritePlaces === 'object') {
    return favoritePlaces
  }
  else return favoritePlaces
}
export const favoritePlaces = getFavoritePlacesFromLocalStorage()




