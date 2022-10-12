import { Place } from '../store/domain/place.js';
import { getFavoritePlacesFromLocalStorage } from './getFavoritePlacesFromLocalStorage.js';

export function arrayComparison(places: Place[]) {
  const favoritePlaces = getFavoritePlacesFromLocalStorage()

  if (Array.isArray(favoritePlaces)) {
    places.forEach(place => {
      favoritePlaces.forEach((favoritePlace) => {
        if (place.id === favoritePlace.id) {
          const heart = document.getElementById(`${place.id}`)
          if (heart != null) {
            heart.classList.add('active')
          }
        }
      })
    })
  }

}

