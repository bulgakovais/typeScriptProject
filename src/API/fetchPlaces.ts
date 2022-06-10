
import { defaultDateOff, defaultDateIn } from '../dates.js'
import { baseURL } from "./index.js"
import { renderSearchResultsBlock } from "../search-results.js"
import { Place } from '../helpers/interfaces.js'
import { renderToast } from '../lib.js'
import { FlatRentSdk, ParamsSearch, DatabaseItem } from "../flat-rent-sdk.js"
import { setAllPlacesArr } from '../helpers/setAllPlacesArr.js'



const myFlatRentSdk = new FlatRentSdk()
export const placeArray: Place[] = []
export let placeArraySdk: DatabaseItem[] = []


export function fetchPlaces(searchFormData) {

  const coordinates = `59.9386,30.3141`
  const checkIn = new Date(searchFormData.dateIn).getTime() || new Date(defaultDateIn).getTime()
  const checkOut = new Date(searchFormData.dateOut).getTime() || new Date(defaultDateOff).getTime()

  const myParamsSearch: ParamsSearch = {
    city: 'Санкт-Петербург',
    checkInDate: new Date(searchFormData.dateIn),
    checkOutDate: new Date(searchFormData.dateOut),
    priceLimit: searchFormData.maxPrice
  }
  // Checkboxes
  const chboxApi: HTMLInputElement = document.querySelector("#search-api")
  const chboxSdk: HTMLInputElement = document.querySelector("#search-sdk")


  if (checkIn && checkOut && searchFormData.maxPrice) {
    if (chboxApi.checked || chboxSdk.checked) {

      if (chboxApi.checked) {
        fetch(baseURL + `/places?coordinates=${coordinates}&checkInDate=${checkIn}&checkOutDate=${checkOut}&maxPrice=${searchFormData.maxPrice}`)
          .then(response => response.json())
          .then((data) => {

            data.forEach((dataItem) => {
              placeArray.push(dataItem)
            })
            // Записываем данные в один общий массив
            const allPlaceArray: object[] = setAllPlacesArr(placeArray)

            renderSearchResultsBlock(allPlaceArray)
            return allPlaceArray
          })
      }
      // ВОПРОС
      // Это вопрос, который я задавала в телеге:) метод search() библиотеки возвращает промис
      // и чтобы достать данные нужен then(). Но по описанию метод должен вернуть массив 
      // DataBaseItem[], у которого свойства then нет))

      if (chboxSdk.checked) {
        const result = myFlatRentSdk.search(myParamsSearch)
        result.then((placeArraySdk) => {

          // Записываем данные в один общий массив
          const allPlaceArraySdk: object[] = setAllPlacesArr(placeArraySdk)

          // Если активны оба чекбокса, не запускаем рендер, т.к. он отработает в fetch
          // ВОПРОС: всегда ли fetch будет отрабатывать последним в данном случае?
          if (!chboxApi.checked) {
            renderSearchResultsBlock(allPlaceArraySdk)
          }
        })
      }
    }
  }
  else (renderToast(
    {
      text: [`Необходимо заполнить все поля`],
      type: 'success'
    },
    {
      name: 'Понятно',
      handler: () => {
        console.log(`Уведомление закрыто`)
      }
    }))

}





