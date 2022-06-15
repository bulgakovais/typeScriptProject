
import { renderSearchResultsBlock } from "../search-results.js"
import { Place } from "../store/domain/place.js"
import { SearchFormData } from "../store/domain/search-filter.js"
import { APIProvider } from "../store/providers/Api/api-provider.js"
import { SDKProvider } from '../store/providers/SDK/sdk-provider.js'
import { getSearchData } from "./getSearchData.js"

export function searchHandler() {

  const { getdateIn, getdateOut, getmaxPrice } = getSearchData()

  const searchFormData: SearchFormData = {
    city: 'Санкт-Петербург',
    checkInDate: new Date(getdateIn),
    checkOutDate: new Date(getdateOut),
    priceLimit: getmaxPrice
  }

  const sdkSearch = new SDKProvider()
  const apiSearch = new APIProvider()


  function sortByPrice(one: Place, two: Place) {

    if (one.price > two.price) {
      return 1
    } else if (one.price < two.price) {
      return -1
    } else {
      return 0
    }
  }

  // ---------------------------------------------------
  // ?? Не запускается код начиная с then() на 38 строке
  // ---------------------------------------------------

  Promise.all([
    apiSearch.find(searchFormData),
    sdkSearch.find(searchFormData)
  ]).then((results) => {
    console.log(results)
    // мерджим все результаты в один
    const allResults: Place[] = [].concat(results[0], results[1])
    console.log(allResults)
    // работаем с ними как с единым целым
    allResults.sort(sortByPrice)
    console.log(allResults)
    renderSearchResultsBlock(allResults)
  })

}




