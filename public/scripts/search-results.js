import { renderBlock } from './lib.js';
import { arrayComparison } from './helpers/arrayComparison.js';
import { favoritesHandlerClick } from './helpers/favoritesHandlerClick.js';
import { fetchToBookPlace } from './API/fetchToBookPlace.js';
import { selectToSelectedOption } from './helpers/sortHandler.js';
export function insertAdjacent(element, arr) {
    element.insertAdjacentHTML("afterbegin", arr);
}
export function renderSearchStubBlock() {
    renderBlock('search-results-block', `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    renderBlock('search-results-block', `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
export function renderSearchResultsBlock(places) {
    let placesList = '';
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
    </li>`;
        });
    }
    renderBlock('search-results-block', `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select id="select">
                <option class="option firstMin" >Сначала дешёвые</option>
                <option class="option firstMax" >Сначала дорогие</option>
                
            </select>
        </div>
    </div>
    <ul class="results-list results-list--js">
     
    </ul>
    `);
    const nodeListPlace = document.querySelector('.results-list--js');
    insertAdjacent(nodeListPlace, placesList);
    if (places.length) {
        // функция сравнения массивов: из LocalStorage и выбранного по параметрам списка
        arrayComparison(places);
        // Запускаем слушатель события и обработчик события при клике на избранное
        const favorites = document.querySelectorAll('.favorites');
        favorites.forEach(fav => {
            fav.addEventListener("click", (event) => {
                favoritesHandlerClick(event, places);
            });
        });
    }
    // Запускаем слушатель события и обработчик события при клике на кнопку "Забронировать"
    const btnsBook = document.querySelectorAll('.btn-book-place');
    btnsBook.forEach(btnBook => {
        btnBook.addEventListener("click", (event) => { fetchToBookPlace(event); });
    });
    // Запускаем слушатель изменения сортировки
    let sortSelect = document.querySelector('#select');
    sortSelect.addEventListener('change', () => { selectToSelectedOption(places, sortSelect); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFFNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUE7QUFHakUsTUFBTSxVQUFVLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRztJQUN6QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQy9DLENBQUM7QUFJRCxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7O0tBS0MsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxhQUFhO0lBQ3pELFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7OztXQUdPLGFBQWE7O0tBRW5CLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsTUFBTTtJQUU3QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7SUFFbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsVUFBVSxJQUFJOzs7b0JBR0EsS0FBSyxDQUFDLEVBQUU7d0NBQ1ksS0FBSyxDQUFDLEtBQUs7Ozs7aUJBSWxDLEtBQUssQ0FBQyxJQUFJOytCQUNJLEtBQUssQ0FBQyxLQUFLOzs7NENBR0UsS0FBSyxDQUFDLFdBQVc7OztxQ0FHeEIsS0FBSyxDQUFDLEVBQUUsY0FBYyxLQUFLLENBQUMsSUFBSTs7Ozs7VUFLM0QsQ0FBQTtRQUVOLENBQUMsQ0FBQyxDQUFBO0tBRUg7SUFHRCxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7S0FlQyxDQUNGLENBQUE7SUFDRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFFakUsY0FBYyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUd6QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDakIsZ0ZBQWdGO1FBQ2hGLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUV2QiwwRUFBMEU7UUFDMUUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN0QyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtLQUNIO0lBRUQsdUZBQXVGO0lBQ3ZGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQzdELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDekIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDLENBQUMsQ0FBQTtJQUVGLDJDQUEyQztJQUUzQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2xELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFN0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IGFycmF5Q29tcGFyaXNvbiB9IGZyb20gJy4vaGVscGVycy9hcnJheUNvbXBhcmlzb24uanMnXG5pbXBvcnQgeyBmYXZvcml0ZXNIYW5kbGVyQ2xpY2sgfSBmcm9tICcuL2hlbHBlcnMvZmF2b3JpdGVzSGFuZGxlckNsaWNrLmpzJ1xuaW1wb3J0IHsgZmV0Y2hUb0Jvb2tQbGFjZSB9IGZyb20gJy4vQVBJL2ZldGNoVG9Cb29rUGxhY2UuanMnXG5cbmltcG9ydCB7IHNlbGVjdFRvU2VsZWN0ZWRPcHRpb24gfSBmcm9tICcuL2hlbHBlcnMvc29ydEhhbmRsZXIuanMnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFkamFjZW50KGVsZW1lbnQsIGFycikge1xuICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgYXJyKVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImJlZm9yZS1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9zdGFydC1zZWFyY2gucG5nXCIgLz5cbiAgICAgIDxwPtCn0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0L7QuNGB0LosINC30LDQv9C+0LvQvdC40YLQtSDRhNC+0YDQvNGDINC4Jm5ic3A70L3QsNC20LzQuNGC0LUgXCLQndCw0LnRgtC4XCI8L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFbXB0eU9yRXJyb3JTZWFyY2hCbG9jayhyZWFzb25NZXNzYWdlKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9uby1yZXN1bHRzLnBuZ1wiIC8+XG4gICAgICA8cD4ke3JlYXNvbk1lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlcykge1xuXG4gIGxldCBwbGFjZXNMaXN0ID0gJydcblxuICBpZiAoQXJyYXkuaXNBcnJheShwbGFjZXMpICYmIHBsYWNlcy5sZW5ndGggPiAwKSB7XG4gICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4ge1xuICAgICAgcGxhY2VzTGlzdCArPSBgPGxpICBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBpZD0ke3BsYWNlLmlkfSBjbGFzcz1cImZhdm9yaXRlc1wiPjwvZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPSR7cGxhY2UuaW1hZ2V9IGFsdD1cIlwiPlxuICAgICAgICA8L2Rpdj5cdFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuICAgICAgICAgICAgPHA+JHtwbGFjZS5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke3BsYWNlLnByaWNlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPjxpIGNsYXNzPVwibWFwLWljb25cIj48L2k+IDIuNdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtwbGFjZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXBsYWNlSWQ9JHtwbGFjZS5pZH0gZGF0YS1uYW1lPSR7cGxhY2UubmFtZX0gY2xhc3M9XCJidG4tYm9vay1wbGFjZVwiPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPmBcblxuICAgIH0pXG5cbiAgfVxuXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWhlYWRlclwiPlxuICAgICAgICA8cD7QoNC10LfRg9C70YzRgtCw0YLRiyDQv9C+0LjRgdC60LA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1maWx0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiaWNvbiBpY29uLWZpbHRlclwiPjwvaT4g0KHQvtGA0YLQuNGA0L7QstCw0YLRjDo8L3NwYW4+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzcz1cIm9wdGlvbiBmaXJzdE1pblwiID7QodC90LDRh9Cw0LvQsCDQtNC10YjRkdCy0YvQtTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3M9XCJvcHRpb24gZmlyc3RNYXhcIiA+0KHQvdCw0YfQsNC70LAg0LTQvtGA0L7Qs9C40LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJyZXN1bHRzLWxpc3QgcmVzdWx0cy1saXN0LS1qc1wiPlxuICAgICBcbiAgICA8L3VsPlxuICAgIGBcbiAgKVxuICBjb25zdCBub2RlTGlzdFBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtbGlzdC0tanMnKVxuXG4gIGluc2VydEFkamFjZW50KG5vZGVMaXN0UGxhY2UsIHBsYWNlc0xpc3QpXG5cblxuICBpZiAocGxhY2VzLmxlbmd0aCkge1xuICAgIC8vINGE0YPQvdC60YbQuNGPINGB0YDQsNCy0L3QtdC90LjRjyDQvNCw0YHRgdC40LLQvtCyOiDQuNC3IExvY2FsU3RvcmFnZSDQuCDQstGL0LHRgNCw0L3QvdC+0LPQviDQv9C+INC/0LDRgNCw0LzQtdGC0YDQsNC8INGB0L/QuNGB0LrQsFxuICAgIGFycmF5Q29tcGFyaXNvbihwbGFjZXMpXG5cbiAgICAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNGPINC4INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPINC/0YDQuCDQutC70LjQutC1INC90LAg0LjQt9Cx0YDQsNC90L3QvtC1XG4gICAgY29uc3QgZmF2b3JpdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXRlcycpO1xuICAgIGZhdm9yaXRlcy5mb3JFYWNoKGZhdiA9PiB7XG4gICAgICBmYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBmYXZvcml0ZXNIYW5kbGVyQ2xpY2soZXZlbnQsIHBsYWNlcylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vINCX0LDQv9GD0YHQutCw0LXQvCDRgdC70YPRiNCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40Y8g0Lgg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgXCLQl9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjFwiXG4gIGNvbnN0IGJ0bnNCb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1ib29rLXBsYWNlJylcbiAgYnRuc0Jvb2suZm9yRWFjaChidG5Cb29rID0+IHtcbiAgICBidG5Cb29rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHsgZmV0Y2hUb0Jvb2tQbGFjZShldmVudCkgfSlcbiAgfSlcblxuICAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINC40LfQvNC10L3QtdC90LjRjyDRgdC+0YDRgtC40YDQvtCy0LrQuFxuXG4gIGxldCBzb3J0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpXG4gIHNvcnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4geyBzZWxlY3RUb1NlbGVjdGVkT3B0aW9uKHBsYWNlcywgc29ydFNlbGVjdCkgfSlcblxufVxuXG4iXX0=