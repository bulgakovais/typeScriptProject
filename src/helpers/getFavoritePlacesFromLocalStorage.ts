import { favoritePlaceInterface } from "./favoritesHandlerClick.js"


export function getFavoritePlacesFromLocalStorage() {
  let favoritePlaces: favoritePlaceInterface[]
  const LS_favItem = localStorage.getItem('favoriteItems')
  if (LS_favItem != null) {
    favoritePlaces = JSON.parse(LS_favItem)
  } else
    return []


  if (Array.isArray(favoritePlaces)) {
    return favoritePlaces
  }
  else return favoritePlaces
}

export const favoritePlaces = getFavoritePlacesFromLocalStorage()




