import { baseURL } from "./index.js"
import { getSearchData } from "../helpers/getSearchData.js"
import { renderToast } from "../lib.js"


export function fetchToBookPlace(event: Event) {

  const { getdateIn, getdateOut, } = getSearchData()
  const element = event.target as HTMLElement;
  const placeId: number = Number(element.dataset.placeid)
  const placeName: string = element.dataset.name

  const checkIn = new Date(getdateIn).getTime()
  const checkOut = new Date(getdateOut).getTime()

  fetch(baseURL + `/places/${placeId}?checkInDate=${checkIn}&checkOutDate=${checkOut}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      bookedDates: [checkIn, checkOut]
    })
  })
    .then(response => response.json())
    .then(() => {
      renderToast(
        {
          text: [`Вы успешно забронировали номер в отеле ${placeName} c ${getdateIn} по ${getdateOut}.`],
          type: 'success'
        },
        {
          name: 'Отлично!',
          handler: () => {
            console.log(`Уведомление закрыто, ${placeName}`)
          }
        })
    })

}
