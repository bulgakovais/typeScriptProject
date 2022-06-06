import { getFavoritePlacesFromLocalStorage } from "./getFavoritePlacesFromLocalStorage.js"
import { fetchToBookPlace } from "../API/fetchToBookPlace.js"


export function favoritesHandlerClick(event, places) {


  if (event.target.classList.contains("btn-book-place'")) {
    // fetchToBookPlace(event)
    console.log(event.target)
  }
  // Если нажали на значок избранного
  if (event.target.classList.contains("favorites")) {
    let targetHeart = event.target
    if (targetHeart.tagName != 'DIV') return
    let targetPlace: unknown = {}
    places.forEach(place => {
      if (place.id == targetHeart.id) {
        targetPlace = place
      }
    })
    toggleFavoriteItem(targetHeart, targetPlace)
  }

  // Если нажали на кнопку бронирования
  // if (event.target.classList.contains("btn-book-place'")) {
  //   // fetchToBookPlace(event)
  //   console.log(event.target)
  // }
}

function toggleFavoriteItem(listItem, targetPlace) {
  let favoritePlaces = getFavoritePlacesFromLocalStorage()
  if (listItem.classList.contains('active')) {
    listItem.classList.remove('active')
    if (Array.isArray(favoritePlaces)) {

      const updatedFavorites: Array<{ id: number, name: string, image: string }> = favoritePlaces.filter((f) => f.id !== Number(listItem.id))
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

}
