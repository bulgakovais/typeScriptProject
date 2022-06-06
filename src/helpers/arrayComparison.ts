import { getFavoritePlacesFromLocalStorage } from './getFavoritePlacesFromLocalStorage.js';

export function arrayComparison(places) {
  const favoritePlaces = getFavoritePlacesFromLocalStorage()

  if (Array.isArray(favoritePlaces)) {
    places.forEach(place => {
      favoritePlaces.forEach((favoritePlace) => {
        if (place.id === favoritePlace.id) {
          const heart = document.getElementById(`${place.id}`)
          heart.classList.add('active')
        }
      })
    })
  }

}
