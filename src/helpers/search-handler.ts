
import { renderSearchResultsBlock, renderSearchResultsHeader } from "../search-results.js"
import { Provider } from "../store/domain/provider.js"
import { SearchFormData } from "../store/domain/search-filter.js"
import { APIProvider } from "../store/providers/Api/api-provider.js"
import { SDKProvider } from '../store/providers/SDK/sdk-provider.js'
import { getSearchData } from "./getSearchData.js"
import { sortByPriceFirstMin } from "./sort-handler.js"

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
  const chboxApi: HTMLInputElement | null = document.querySelector("#search-api")
  const chboxSdk: HTMLInputElement | null = document.querySelector("#search-sdk")


  async function logicSearcher(provider: Provider): Promise<void> {
    const result = await provider.find(searchFormData)
    result.sort(sortByPriceFirstMin)
    renderSearchResultsHeader(result)
    renderSearchResultsBlock(result)
  }


  if (getdateIn && getdateOut && searchFormData.priceLimit) {
    if (chboxApi && chboxSdk != null) {
      if (chboxApi.checked && chboxSdk.checked) {
        // мерджим все результаты в один
        const [allResults] = [...await Promise.all([
          apiSearch.find(searchFormData),
          sdkSearch.find(searchFormData)
        ])]

        // работаем с ними как с единым целым
        allResults.sort(sortByPriceFirstMin)
        renderSearchResultsHeader(allResults)
        renderSearchResultsBlock(allResults)
        return
      }
    }
    if (chboxApi != null) {
      if (chboxApi.checked) {
        logicSearcher(apiSearch)
        return
      }
    }
    if (chboxSdk != null) {
      if (chboxSdk.checked) {
        logicSearcher(sdkSearch)
        return
      }
    }

  }
}
