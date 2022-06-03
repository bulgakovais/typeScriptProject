import { search } from "./search.js"
import { errorOrArray } from './errorOrArray'

export interface SearchFormData {
  dateIn: string,
  dateOut: string,
  maxPrice: number
}

export interface Place {
  params: string
}

export const placeArray: Place[] = []

export function searchHandler() {

  const getdateIn = (<HTMLInputElement>document.getElementById('check-in-date')).value
  const getdateOut = (<HTMLInputElement>document.getElementById('check-out-date')).value
  const getmaxPrice = Number((<HTMLInputElement>document.getElementById('max-price')).value)

  const searchFormData: SearchFormData = {
    dateIn: getdateIn,
    dateOut: getdateOut,
    maxPrice: getmaxPrice
  }

  search(searchFormData, errorOrArray(placeArray, "Error"))
}
