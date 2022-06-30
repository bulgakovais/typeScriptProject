import { renderSearchResultsBlock } from "../search-results.js"
import { Place } from "../store/domain/place.js"


export function sortByPriceFirstMin(one: Place, two: Place) {
  if (one.price > two.price) {
    return 1
  } else if (one.price < two.price) {
    return -1
  } else {
    return 0
  }
}
export function sortByPriceFirstMax(one: Place, two: Place) {
  if (one.price < two.price) {
    return 1
  } else if (one.price > two.price) {
    return -1
  } else {
    return 0
  }
}

export function selectToSelectedOption(places, sortSelect) {
  // Выбранный элемент
  let selectedOption: HTMLElement = sortSelect.options[sortSelect.selectedIndex]

  if (selectedOption.classList.contains('firstMin')) {
    selectedOption.setAttribute("selected", "selected")
    places.sort(sortByPriceFirstMin)
  }
  else if (selectedOption.classList.contains('firstMax')) {
    selectedOption.setAttribute("selected", "selected")
    places.sort(sortByPriceFirstMax)

  }
  renderSearchResultsBlock(places)
}

