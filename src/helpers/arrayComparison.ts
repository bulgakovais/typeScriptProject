import { getFavoritePlacesFromLocalStorage } from './getFavoritePlacesFromLocalStorage.js';


// На деле работает, но к типам придирается, не знаю как присвоить массив favoritePlaces
// Вообще функция возвращает let favoritePlaces: favoritePlaces[],но здесь при вызове возвращается объект
export function arrayComparison(places) {
  const favoritePlaces = getFavoritePlacesFromLocalStorage()

  places.forEach(place => {
    favoritePlaces.forEach((favoritePlace) => {
      if (place.id === favoritePlace.id) {
        const heart = document.getElementById(`${place.id}`)
        heart.classList.add('active')
      }
    })
  })
}
