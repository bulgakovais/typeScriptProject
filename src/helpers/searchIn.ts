import { SearchFormData } from '../store/domain/search-filter.js'

export function searchIn(data: SearchFormData, cb: () => void) {
  console.log(data)
  setInterval(cb, 1500)
}
