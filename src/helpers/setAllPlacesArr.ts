


export let newArr: object[] = []

export function setAllPlacesArr(arr: object[]) {
  newArr.push(...arr)
  return newArr
}
