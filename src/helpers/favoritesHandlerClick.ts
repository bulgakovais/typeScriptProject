import { getFavoritePlacesFromLocalStorage } from "./getFavoritePlacesFromLocalStorage"

export function favoritesHandlerClick(event) {
  let targetHeart = event.target
  if (targetHeart.tagName != 'DIV') return
  toggleFavoriteItem(targetHeart)
}


function toggleFavoriteItem(listItem) {
  let favoritePlaces = getFavoritePlacesFromLocalStorage()
  if (listItem.classList.contains('active')) {
    listItem.classList.remove('active')
    if (Array.isArray(favoritePlaces)) {
      const updatedFavorites: Array<{ id: string }> = favoritePlaces.filter((f) => f.id !== listItem.id)
      localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites))
    }
  }
  else {
    listItem.classList.add('active')
    const data = { id: listItem.id, name: listItem.name, image: listItem.image }
    if (Array.isArray(favoritePlaces)) {
      const allData = JSON.stringify([...favoritePlaces, data])
      localStorage.setItem('favoriteItems', allData)
    }
  }
}
