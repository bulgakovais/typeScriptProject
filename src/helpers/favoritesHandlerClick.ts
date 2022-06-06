import { getFavoritePlacesFromLocalStorage } from "./getFavoritePlacesFromLocalStorage.js"

export function favoritesHandlerClick(event, places) {

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
