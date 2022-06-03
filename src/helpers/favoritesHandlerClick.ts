import { favoritePlaces, getFavoritePlacesFromLocalStorage } from "./getFavoritePlacesFromLocalStorage"

export function favoritesHandlerClick(event) {
  let targetHeart = event.target
  if (targetHeart.tagName != 'DIV') return
  highlight(targetHeart)
}

// favoritePl - объект, та же загвоздка, что и в arrayComparison.ts
// А для осуществления логики удаления/добавления в LStorage нужны 
// методы массива..

// let favoritePl = getFavoritePlacesFromLocalStorage()

function highlight(listItem) {
  if (listItem.classList.contains('active')) {
    listItem.classList.remove('active')
    // favoritePl.forEach((favoritePlace) => {
    //   if (favoritePlace.id === listItem.id)
    //     localStorage.removeItem(`${favoritePlace}`)
  }
  else {
    listItem.classList.add('active')
    // const data = { id: listItem.id, name: listItem.name, image: listItem.image }
    // favoritePl.push(data)
    // const allData = JSON.stringify(favoritePl)
    // localStorage.setItem('favoriteItems', allData)
  }
}
