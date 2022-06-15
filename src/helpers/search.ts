import { SearchFormData } from './interfaces.js'

export function search(data: SearchFormData, cb) {
  console.log(data)
  setInterval(cb, 1500)
}
