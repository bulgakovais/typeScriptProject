import { renderSearchResultsBlock, renderSearchResultsHeader } from "../search-results.js";
import { APIProvider } from "../store/providers/Api/api-provider.js";
import { SDKProvider } from '../store/providers/SDK/sdk-provider.js';
import { getSearchData } from "./getSearchData.js";
import { sortByPriceFirstMin } from "./sort-handler.js";
export async function searchHandler() {
    const { getdateIn, getdateOut, getmaxPrice } = getSearchData();
    const searchFormData = {
        city: 'Санкт-Петербург',
        checkInDate: new Date(getdateIn),
        checkOutDate: new Date(getdateOut),
        priceLimit: getmaxPrice
    };
    const sdkSearch = new SDKProvider();
    const apiSearch = new APIProvider();
    //  Checkboxes
    const chboxApi = document.querySelector("#search-api");
    const chboxSdk = document.querySelector("#search-sdk");
    async function logicSearcher(provider) {
        const result = await provider.find(searchFormData);
        result.sort(sortByPriceFirstMin);
        renderSearchResultsHeader(result);
        renderSearchResultsBlock(result);
    }
    if (getdateIn && getdateOut && searchFormData.priceLimit) {
        if (chboxApi.checked && chboxSdk.checked) {
            const results = await Promise.all([
                apiSearch.find(searchFormData),
                sdkSearch.find(searchFormData)
            ]);
            // мерджим все результаты в один
            const allResults = [].concat(results[0], results[1]);
            // работаем с ними как с единым целым
            allResults.sort(sortByPriceFirstMin);
            renderSearchResultsHeader(allResults);
            renderSearchResultsBlock(allResults);
            return;
        }
        if (chboxApi.checked) {
            logicSearcher(apiSearch);
            return;
        }
        if (chboxSdk.checked) {
            logicSearcher(sdkSearch);
            return;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVycy9zZWFyY2gtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUkxRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0NBQXdDLENBQUE7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdDQUF3QyxDQUFBO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUV2RCxNQUFNLENBQUMsS0FBSyxVQUFVLGFBQWE7SUFFakMsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEdBQUcsYUFBYSxFQUFFLENBQUE7SUFFOUQsTUFBTSxjQUFjLEdBQW1CO1FBQ3JDLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLFVBQVUsRUFBRSxXQUFXO0tBQ3hCLENBQUE7SUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBO0lBQ25DLE1BQU0sU0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7SUFDbkMsY0FBYztJQUNkLE1BQU0sUUFBUSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3hFLE1BQU0sUUFBUSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBR3hFLEtBQUssVUFBVSxhQUFhLENBQUMsUUFBa0I7UUFDN0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNoQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBR0QsSUFBSSxTQUFTLElBQUksVUFBVSxJQUFJLGNBQWMsQ0FBQyxVQUFVLEVBQUU7UUFDeEQsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFFeEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDL0IsQ0FBQyxDQUFBO1lBQ0YsZ0NBQWdDO1lBQ2hDLE1BQU0sVUFBVSxHQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzdELHFDQUFxQztZQUNyQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFDcEMseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDckMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDcEMsT0FBTTtTQUNQO1FBRUQsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BCLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN4QixPQUFNO1NBQ1A7UUFFRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3hCLE9BQU07U0FDUDtLQUVGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrLCByZW5kZXJTZWFyY2hSZXN1bHRzSGVhZGVyIH0gZnJvbSBcIi4uL3NlYXJjaC1yZXN1bHRzLmpzXCJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uL3N0b3JlL2RvbWFpbi9wbGFjZS5qc1wiXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCIuLi9zdG9yZS9kb21haW4vcHJvdmlkZXIuanNcIlxuaW1wb3J0IHsgU2VhcmNoRm9ybURhdGEgfSBmcm9tIFwiLi4vc3RvcmUvZG9tYWluL3NlYXJjaC1maWx0ZXIuanNcIlxuaW1wb3J0IHsgQVBJUHJvdmlkZXIgfSBmcm9tIFwiLi4vc3RvcmUvcHJvdmlkZXJzL0FwaS9hcGktcHJvdmlkZXIuanNcIlxuaW1wb3J0IHsgU0RLUHJvdmlkZXIgfSBmcm9tICcuLi9zdG9yZS9wcm92aWRlcnMvU0RLL3Nkay1wcm92aWRlci5qcydcbmltcG9ydCB7IGdldFNlYXJjaERhdGEgfSBmcm9tIFwiLi9nZXRTZWFyY2hEYXRhLmpzXCJcbmltcG9ydCB7IHNvcnRCeVByaWNlRmlyc3RNaW4gfSBmcm9tIFwiLi9zb3J0LWhhbmRsZXIuanNcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoSGFuZGxlcigpOiBQcm9taXNlPHZvaWQ+IHtcblxuICBjb25zdCB7IGdldGRhdGVJbiwgZ2V0ZGF0ZU91dCwgZ2V0bWF4UHJpY2UgfSA9IGdldFNlYXJjaERhdGEoKVxuXG4gIGNvbnN0IHNlYXJjaEZvcm1EYXRhOiBTZWFyY2hGb3JtRGF0YSA9IHtcbiAgICBjaXR5OiAn0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMnLFxuICAgIGNoZWNrSW5EYXRlOiBuZXcgRGF0ZShnZXRkYXRlSW4pLFxuICAgIGNoZWNrT3V0RGF0ZTogbmV3IERhdGUoZ2V0ZGF0ZU91dCksXG4gICAgcHJpY2VMaW1pdDogZ2V0bWF4UHJpY2VcbiAgfVxuXG4gIGNvbnN0IHNka1NlYXJjaCA9IG5ldyBTREtQcm92aWRlcigpXG4gIGNvbnN0IGFwaVNlYXJjaCA9IG5ldyBBUElQcm92aWRlcigpXG4gIC8vICBDaGVja2JveGVzXG4gIGNvbnN0IGNoYm94QXBpOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYXBpXCIpXG4gIGNvbnN0IGNoYm94U2RrOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtc2RrXCIpXG5cblxuICBhc3luYyBmdW5jdGlvbiBsb2dpY1NlYXJjaGVyKHByb3ZpZGVyOiBQcm92aWRlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb3ZpZGVyLmZpbmQoc2VhcmNoRm9ybURhdGEpXG4gICAgcmVzdWx0LnNvcnQoc29ydEJ5UHJpY2VGaXJzdE1pbilcbiAgICByZW5kZXJTZWFyY2hSZXN1bHRzSGVhZGVyKHJlc3VsdClcbiAgICByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2socmVzdWx0KVxuICB9XG5cblxuICBpZiAoZ2V0ZGF0ZUluICYmIGdldGRhdGVPdXQgJiYgc2VhcmNoRm9ybURhdGEucHJpY2VMaW1pdCkge1xuICAgIGlmIChjaGJveEFwaS5jaGVja2VkICYmIGNoYm94U2RrLmNoZWNrZWQpIHtcblxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgYXBpU2VhcmNoLmZpbmQoc2VhcmNoRm9ybURhdGEpLFxuICAgICAgICBzZGtTZWFyY2guZmluZChzZWFyY2hGb3JtRGF0YSlcbiAgICAgIF0pXG4gICAgICAvLyDQvNC10YDQtNC20LjQvCDQstGB0LUg0YDQtdC30YPQu9GM0YLQsNGC0Ysg0LIg0L7QtNC40L1cbiAgICAgIGNvbnN0IGFsbFJlc3VsdHM6IFBsYWNlW10gPSBbXS5jb25jYXQocmVzdWx0c1swXSwgcmVzdWx0c1sxXSlcbiAgICAgIC8vINGA0LDQsdC+0YLQsNC10Lwg0YEg0L3QuNC80Lgg0LrQsNC6INGBINC10LTQuNC90YvQvCDRhtC10LvRi9C8XG4gICAgICBhbGxSZXN1bHRzLnNvcnQoc29ydEJ5UHJpY2VGaXJzdE1pbilcbiAgICAgIHJlbmRlclNlYXJjaFJlc3VsdHNIZWFkZXIoYWxsUmVzdWx0cylcbiAgICAgIHJlbmRlclNlYXJjaFJlc3VsdHNCbG9jayhhbGxSZXN1bHRzKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNoYm94QXBpLmNoZWNrZWQpIHtcbiAgICAgIGxvZ2ljU2VhcmNoZXIoYXBpU2VhcmNoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNoYm94U2RrLmNoZWNrZWQpIHtcbiAgICAgIGxvZ2ljU2VhcmNoZXIoc2RrU2VhcmNoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==