
import { defaultDateOff, defaultDateIn } from '../dates.js'
import { baseURL } from "./index.js"
import { renderSearchResultsBlock } from "../search-results.js"
import { Place } from '../helpers/interfaces.js'

export const placeArray: Place[] = []

export function fetchPlaces(searchFormData) {

  const coordinates = `59.9386,30.3141`
  const checkIn = new Date(searchFormData.dateIn).getTime() || new Date(defaultDateIn).getTime()
  const checkOut = new Date(searchFormData.dateOut).getTime() || new Date(defaultDateOff).getTime()


  fetch(baseURL + `/places?coordinates=${coordinates}&checkInDate=${checkIn}&checkOutDate=${checkOut}&maxPrice=${searchFormData.maxPrice}`)
    .then(response => response.json())
    .then((data) => {
      data.forEach((dataItem) => {
        placeArray.push(dataItem)
      })

      console.log(placeArray)
      renderSearchResultsBlock(placeArray)
      return placeArray
    })

}


