import { defaultDateIn, defaultDateOff } from "../../../dates.js";
import { Place } from "../../domain/place.js";
import { Provider } from "../../domain/provider.js";
import { SearchFormData } from "../../domain/search-filter.js";
import { HttpHelper } from "../../utils/http-helper.js";
import { apiPlace } from "./api-response.js";

export class APIProvider implements Provider {


  public static provider = 'API'

  private static apiUrl = 'http://localhost:3030'
  public async find(filter: SearchFormData): Promise<Place[]> {

    return HttpHelper.fetchAsJson<apiPlace[]>(
      APIProvider.apiUrl + '/places?' + this.convertFilterToQueryString(filter)
    )
      .then((response) => {
        console.log(response)
        // // проверим, что с ответ корректный
        // this.assertIsValidResponse(response)
        return this.convertPlaceListResponse(response)
      })
  }

  public async getById(id: string): Promise<Place> {
    return HttpHelper.fetchAsJson<apiPlace>(APIProvider.apiUrl + '/places/' +
      id)
      .then((response) => {
        // // проверим, что с ответ корректный
        // this.assertIsValidResponse(response)
        return this.convertPlaceResponse(response)
      })
  }

  private convertFilterToQueryString(filter: SearchFormData): string {

    const coordinates = `59.9386,30.3141`
    const checkIn = new Date(filter.checkInDate).getTime() || new Date(defaultDateIn).getTime()
    const checkOut = new Date(filter.checkOutDate).getTime() || new Date(defaultDateOff).getTime()

    return `coordinates=${coordinates}&checkInDate=${checkIn}&checkOutDate=${checkOut}&maxPrice=${filter.priceLimit}`
  }


  private convertPlaceListResponse(response: apiPlace[]): Place[] {
    return response.map((item) => {
      return this.convertPlaceResponse(item)
    })
  }

  private convertPlaceResponse(item: apiPlace): Place {
    return new Place(
      APIProvider.provider,
      String(item.id),
      item.name,
      item.description,
      item.image,
      item.price,
      item.bookedDates,
      this.getRemoteness(0)
    )
  }

  private getRemoteness(remoteness: number) {
    return remoteness
  }
}
