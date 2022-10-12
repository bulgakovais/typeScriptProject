import { DatabaseItem, FlatRentSdk } from "../../../flat-rent-sdk.js"
import { Place } from "../../domain/place.js"
import { Provider } from "../../domain/provider.js"
import { SearchFormData } from "../../domain/search-filter.js"

const myFlatRentSdk = new FlatRentSdk()

export class SDKProvider implements Provider {

  public static provider = 'SDK'

  public async find(filter: SearchFormData): Promise<Place[]> {
    const result = myFlatRentSdk.search(filter)
    console.log(`Promise<Place[]>${result}`)
    return result.then((data) => {
      return this.convertPlaceListResponse(data)
    })
  }


  private convertPlaceListResponse(response: DatabaseItem[]): Place[] {
    return response.map((item) => {

      return this.convertPlaceResponse(item)
    })
  }

  private convertPlaceResponse(item: DatabaseItem): Place {

    return new Place(
      SDKProvider.provider,
      item.id,
      this.getName(item.title),
      this.getDescription(item.details || 'описание отсутствует'),
      this.getImage(item.photos ? item.photos[0] : "здесь скоро будет фото"),
      this.getPrice(item.totalPrice),
      item.bookedDates,
      this.getRemoteness(0)
    )

  }

  private getName(name: string): string {
    return name
  }
  private getDescription(description: string) {
    return description
  }
  private getImage(image: string) {
    return `http://localhost:3040/img/${image}`
  }
  private getRemoteness(remoteness: number) {
    return remoteness
  }
  private getPrice(price: number) {
    if (isNaN(price)) {
      return price = 0
    }
    return price
  }
}
