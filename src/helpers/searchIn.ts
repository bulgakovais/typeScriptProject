import { SearchFormData } from './interfaces.js'

export function searchIn(data: SearchFormData, cb) {
  console.log(data)
  setInterval(cb, 1500)
}
