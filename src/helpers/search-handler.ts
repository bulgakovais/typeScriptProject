import { fetchPlaces } from '../API/fetchPlaces.js'
import { SearchFormData } from "./interfaces.js"
import { getSearchData } from "./getSearchData.js"

export function searchHandler() {

  const { getdateIn, getdateOut, getmaxPrice } = getSearchData()

  const searchFormData: SearchFormData = {
    dateIn: getdateIn,
    dateOut: getdateOut,
    maxPrice: getmaxPrice
  }
  fetchPlaces(searchFormData)
}




