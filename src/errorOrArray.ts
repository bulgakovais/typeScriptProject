import { Place } from './search-handler'

export function errorOrArray(placeArray: Place[], Error: string) {
  let probability = Math.random() < 0.5 ? placeArray : Error
  console.log(probability)
}
