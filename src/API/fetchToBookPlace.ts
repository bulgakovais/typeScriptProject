import { baseURL } from "./index.js"
import { getSearchData } from "../helpers/getSearchData.js"
import { renderToast } from "../lib.js"


export function fetchToBookPlace(event) {

  const { getdateIn, getdateOut, getmaxPrice } = getSearchData()
  const placeId = event.target.dataset.placeId
  const placeName = event.target.dataset.name
  fetch(baseURL + `/places/:${placeId}`)
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
