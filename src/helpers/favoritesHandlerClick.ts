import { Place } from "../store/domain/place.js"
import { renderUserBlock } from "../user.js"
import { getFavoritePlacesFromLocalStorage } from "./getFavoritePlacesFromLocalStorage.js"
import { getFavoritesCaption, getUserData } from "./userData.js"


export function favoritesHandlerClick(event: Event, places: Place[]) {
  const element: HTMLElement = event.target as HTMLElement
  if (element.classList.contains("btn-book-place'")) {
    console.log(event.target)
  }
  // Если нажали на значок избранного
  if (element.classList.contains("favorites")) {
    let targetHeart: HTMLElement = event.target as HTMLElement
    if (targetHeart.tagName != 'DIV') return
    let targetPlace: Place = null
    places.forEach(place => {
      if (place.id == targetHeart.id) {
        return targetPlace = place
      }
    })
    toggleFavoriteItem(targetHeart, targetPlace)
  }
}

function toggleFavoriteItem(listItem: HTMLElement, targetPlace: Place) {
  let favoritePlaces: unknown[] = getFavoritePlacesFromLocalStorage()
  if (listItem.classList.contains('active')) {
    listItem.classList.remove('active')
    if (Array.isArray(favoritePlaces)) {

      const updatedFavorites: Array<{ id: string, name: string, image: string }> = favoritePlaces.filter((f) => f.id != listItem.id)
      localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites))
    }
  }
  else {
    listItem.classList.add('active')
    const data = { id: targetPlace.id, name: targetPlace.name, image: targetPlace.image }
    if (Array.isArray(favoritePlaces)) {
      const allData = JSON.stringify([...favoritePlaces, data])
      localStorage.setItem('favoriteItems', allData)
    }
  }

  // Запускаем рендер <header> сайта
  const user = getUserData()
  const favoritesCaption = getFavoritesCaption()
  renderUserBlock(user, favoritesCaption)
}


export interface favoritePlaceInterface extends Place {
  id: string,
  name: string,
  image: string
}
