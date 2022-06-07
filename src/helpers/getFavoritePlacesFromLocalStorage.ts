// import { Place } from "./interfaces";


// interface favoritePlaces extends Partial<Place> {
//   id?: number;
//   name?: string;
//   image?: string;
// }

export function getFavoritePlacesFromLocalStorage() {

  let favoritePlaces: unknown = JSON.parse(localStorage.getItem('favoriteItems'))

  if (favoritePlaces == null) {
    return []
  }
  if (typeof favoritePlaces === 'object') {
    return favoritePlaces
  }
  else return favoritePlaces
}
export const favoritePlaces = getFavoritePlacesFromLocalStorage()
// _________________________________________________________
// Этот вариант функции возвращает let favoritePlaces: favoritePlaces[]
// _________________________________________________________

// let favoritePlaces: favoritePlaces[] = []

// export function getFavoritePlacesFromLocalStorage() {

//   const data: unknown[] = JSON.parse(localStorage.getItem('favoriteItems'))

//   if (data == null) {
//     console.log(`dataNull: ${data}`)
//     return {}
//   }
//   if (typeof data === 'object') {
//     console.log(`dataObj: ${data}`)
//     data.forEach((item) => {
//       favoritePlaces.push(item)
//     })
//     return favoritePlaces
//   }



