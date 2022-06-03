import { fetchPlaces } from './fetchPlaces.js'
import { SearchFormData } from "./interfaces.js"


export function searchHandler() {

  const getdateIn = (<HTMLInputElement>document.getElementById('check-in-date')).value
  const getdateOut = (<HTMLInputElement>document.getElementById('check-out-date')).value
  const getmaxPrice = Number((<HTMLInputElement>document.getElementById('max-price')).value)

  const searchFormData: SearchFormData = {
    dateIn: getdateIn,
    dateOut: getdateOut,
    maxPrice: getmaxPrice
  }
  fetchPlaces(getdateIn, getdateOut, getmaxPrice)

}




