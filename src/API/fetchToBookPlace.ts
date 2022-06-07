import { baseURL } from "./index.js"
import { getSearchData } from "../helpers/getSearchData.js"
import { renderToast } from "../lib.js"


export function fetchToBookPlace(event) {

  const { getdateIn, getdateOut, } = getSearchData()

  const placeId = event.target.dataset.placeid
  const placeName = event.target.dataset.name

  const checkIn = new Date(getdateIn).getTime()
  const checkOut = new Date(getdateOut).getTime()

  // Получаем все даты между checkIn и checkOut в формате Unix
  function allDate(checkIn, checkOut) {
    let dateArr = []
    for (let i = checkIn; i <= checkOut;) {
      dateArr.push(i)

      console.log(dateArr)
      i = i + 24 * 60 * 60 * 1000
    }
    return dateArr
  }


  const allBookedData = allDate(checkIn, checkOut)

  //
  fetch(baseURL + `/places/${placeId}?checkInDate=${checkIn}&checkOutDate=${checkOut}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      bookedDates: allBookedData
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
