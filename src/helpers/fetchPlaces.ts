
import { defaultDateOff, defaultDateIn } from '../dates.js'
import { baseURL } from "../API/index.js"
import { renderSearchResultsBlock } from "../search-results.js"
import { Place } from './interfaces.js'

export const placeArray: Place[] = []

export function fetchPlaces(getdateIn, getdateOut, getmaxPrice) {

  const coordinates = `59.9386,30.3141`
  const checkIn = new Date(getdateIn).getTime() || new Date(defaultDateIn).getTime()
  const checkOut = new Date(getdateOut).getTime() || new Date(defaultDateOff).getTime()


  fetch(baseURL + `/places?coordinates=${coordinates}&checkInDate=${checkIn}&checkOutDate=${checkOut}&maxPrice=${getmaxPrice}`)
    .then(response => response.json())
    .then((data) => {
      data.forEach((dataItem) => {
        placeArray.push(dataItem)
      })

      console.log(placeArray)
      renderSearchResultsBlock(placeArray)
    })

}
