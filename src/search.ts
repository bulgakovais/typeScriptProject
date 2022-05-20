import { SearchFormData } from './search-handler'

export function search(data: SearchFormData, cb) {
  console.log(data)
  setInterval(cb, 1500)
}
