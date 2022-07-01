import { favoritePlaceInterface } from "./favoritesHandlerClick.js"


export function getFavoritePlacesFromLocalStorage() {

  let favoritePlaces: favoritePlaceInterface[] = JSON.parse(localStorage.getItem('favoriteItems'))

  if (favoritePlaces == null) {
    return []
  }

  if (Array.isArray(favoritePlaces)) {
    return favoritePlaces
  }
  else return favoritePlaces
}
export const favoritePlaces = getFavoritePlacesFromLocalStorage()




