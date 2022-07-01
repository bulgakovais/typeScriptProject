
import { renderSearchResultsBlock } from "../search-results.js"
import { Place } from "../store/domain/place.js"
import { Provider } from "../store/domain/provider.js"
import { SearchFormData } from "../store/domain/search-filter.js"
import { APIProvider } from "../store/providers/Api/api-provider.js"
import { SDKProvider } from '../store/providers/SDK/sdk-provider.js'
import { getSearchData } from "./getSearchData.js"
import { sortByPriceFirstMin } from "./sortHandler.js"

export async function searchHandler(): Promise<void> {

  const { getdateIn, getdateOut, getmaxPrice } = getSearchData()

  const searchFormData: SearchFormData = {
    city: 'Санкт-Петербург',
    checkInDate: new Date(getdateIn),
    checkOutDate: new Date(getdateOut),
    priceLimit: getmaxPrice
  }

  const sdkSearch = new SDKProvider()
  const apiSearch = new APIProvider()
  //  Checkboxes
  const chboxApi: HTMLInputElement = document.querySelector("#search-api")
  const chboxSdk: HTMLInputElement = document.querySelector("#search-sdk")


  async function logicSearcher(provider: Provider): Promise<void> {
    const result = await provider.find(searchFormData)
    result.sort(sortByPriceFirstMin)
    renderSearchResultsBlock(result)
  }


  if (getdateIn && getdateOut && searchFormData.priceLimit) {
    if (chboxApi.checked && chboxSdk.checked) {

      const results = await Promise.all([
        apiSearch.find(searchFormData),
        sdkSearch.find(searchFormData)
      ])
      // мерджим все результаты в один
      const allResults: Place[] = [].concat(results[0], results[1])
      // работаем с ними как с единым целым
      allResults.sort(sortByPriceFirstMin)
      renderSearchResultsBlock(allResults)
    }

    if (chboxApi.checked) {
      logicSearcher(apiSearch)
    }

    if (chboxSdk.checked) {
      logicSearcher(sdkSearch)
    }

  }
}
