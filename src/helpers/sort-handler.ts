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

export function selectToSelectedOption(places: Place[], sortSelect: HTMLSelectElement | null) {
  if (sortSelect != null) {
    let selectedOption: HTMLOptionElement = sortSelect.options[sortSelect.selectedIndex]
    const selectedValue: string = selectedOption.value
    if (selectedValue === 'cheap') {
      places.sort(sortByPriceFirstMin)
    }
    else if (selectedValue === 'expensive') {
      places.sort(sortByPriceFirstMax)
    }

    renderSearchResultsBlock(places)
  }
}

