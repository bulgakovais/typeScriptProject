
import { Place } from './helpers/interfaces.js'
import { renderBlock } from './lib.js'
import { arrayComparison } from './helpers/arrayComparison.js'
import { favoritesHandlerClick } from './helpers/favoritesHandlerClick.js'
import { fetchToBookPlace } from './API/fetchToBookPlace.js'

export function renderSearchStubBlock() {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  )
}

export function renderEmptyOrErrorSearchBlock(reasonMessage) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}

export function renderSearchResultsBlock(places: Place[]) {

  let placesList = ''

  if (Array.isArray(places) && places.length > 0) {
    places.forEach(place => {
      placesList += `<li  class="result">
      <div class="result-container">
        <div class="result-img-container">
          <div id=${place.id} class="favorites"></div>
          <img class="result-img" src=${place.image} alt="">
        </div>	
        <div class="result-info">
          <div class="result-info--header">
            <p>${place.name}</p>
            <p class="price">${place.price}</p>
          </div>
          <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
          <div class="result-info--descr">${place.description}</div>
          <div class="result-info--footer">
            <div>
              <button data-placeId=${place.id} data-name=${place.name} class="btn-book-place">Забронировать</button>
            </div>
          </div>
        </div>
      </div>
    </li>`

    })
  }

  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list results-list--js">
     
    </ul>
    `
  )
  // Получаем UL из DOM дерева и вставляем в него наш список
  const nodeListPlace = document.querySelector('.results-list--js')
  nodeListPlace.insertAdjacentHTML('afterbegin', placesList)

  if (places.length) {
    // функция сравнения массивов: из LocalStorage и выбранного по параметрам списка
    arrayComparison(places)

    // Запускаем слушатель события и обработчик события при клике на избранное
    const favorites = document.querySelectorAll('.favorites');
    favorites.forEach(fav => {
      fav.addEventListener("click", (event) => { favoritesHandlerClick(event, places) })
    })
  }

  // Запускаем слушатель события и обработчик события при клике на кнопку "Забронировать"
  const btnsBook = document.querySelectorAll('.btn-book-place')
  btnsBook.forEach(btnBook => {
    btnBook.addEventListener("click", (event) => { fetchToBookPlace(event) })
  })

}
