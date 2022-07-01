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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUE7QUFJakUsTUFBTSxVQUFVLGNBQWMsQ0FBQyxPQUFnQixFQUFFLEdBQVc7SUFDMUQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUMvQyxDQUFDO0FBR0QsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7OztLQUtDLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQUMsYUFBcUI7SUFDakUsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7O1dBR08sYUFBYTs7S0FFbkIsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxNQUFlO0lBRXRELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQTtJQUVuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixVQUFVLElBQUk7OztvQkFHQSxLQUFLLENBQUMsRUFBRTt3Q0FDWSxLQUFLLENBQUMsS0FBSzs7OztpQkFJbEMsS0FBSyxDQUFDLElBQUk7K0JBQ0ksS0FBSyxDQUFDLEtBQUs7Ozs0Q0FHRSxLQUFLLENBQUMsV0FBVzs7O3FDQUd4QixLQUFLLENBQUMsRUFBRSxjQUFjLEtBQUssQ0FBQyxJQUFJOzs7OztVQUszRCxDQUFBO1FBRU4sQ0FBQyxDQUFDLENBQUE7S0FFSDtJQUdELFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7Ozs7Ozs7Ozs7OztLQWVDLENBQ0YsQ0FBQTtJQUNELE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUVqRSxjQUFjLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBR3pDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNqQixnRkFBZ0Y7UUFDaEYsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRXZCLDBFQUEwRTtRQUMxRSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0tBQ0g7SUFFRCx1RkFBdUY7SUFDdkYsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDN0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN6QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzNFLENBQUMsQ0FBQyxDQUFBO0lBRUYsMkNBQTJDO0lBRTNDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbEQsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUU3RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgYXJyYXlDb21wYXJpc29uIH0gZnJvbSAnLi9oZWxwZXJzL2FycmF5Q29tcGFyaXNvbi5qcydcbmltcG9ydCB7IGZhdm9yaXRlc0hhbmRsZXJDbGljayB9IGZyb20gJy4vaGVscGVycy9mYXZvcml0ZXNIYW5kbGVyQ2xpY2suanMnXG5pbXBvcnQgeyBmZXRjaFRvQm9va1BsYWNlIH0gZnJvbSAnLi9BUEkvZmV0Y2hUb0Jvb2tQbGFjZS5qcydcbmltcG9ydCB7IHNlbGVjdFRvU2VsZWN0ZWRPcHRpb24gfSBmcm9tICcuL2hlbHBlcnMvc29ydEhhbmRsZXIuanMnXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gJy4vc3RvcmUvZG9tYWluL3BsYWNlLmpzJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZGphY2VudChlbGVtZW50OiBFbGVtZW50LCBhcnI6IHN0cmluZykge1xuICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgYXJyKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hTdHViQmxvY2soKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJiZWZvcmUtcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvc3RhcnQtc2VhcmNoLnBuZ1wiIC8+XG4gICAgICA8cD7Qp9GC0L7QsdGLINC90LDRh9Cw0YLRjCDQv9C+0LjRgdC6LCDQt9Cw0L/QvtC70L3QuNGC0LUg0YTQvtGA0LzRgyDQuCZuYnNwO9C90LDQttC80LjRgtC1IFwi0J3QsNC50YLQuFwiPC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRW1wdHlPckVycm9yU2VhcmNoQmxvY2socmVhc29uTWVzc2FnZTogc3RyaW5nKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9uby1yZXN1bHRzLnBuZ1wiIC8+XG4gICAgICA8cD4ke3JlYXNvbk1lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlczogUGxhY2VbXSkge1xuXG4gIGxldCBwbGFjZXNMaXN0ID0gJydcblxuICBpZiAoQXJyYXkuaXNBcnJheShwbGFjZXMpICYmIHBsYWNlcy5sZW5ndGggPiAwKSB7XG4gICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4ge1xuICAgICAgcGxhY2VzTGlzdCArPSBgPGxpICBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBpZD0ke3BsYWNlLmlkfSBjbGFzcz1cImZhdm9yaXRlc1wiPjwvZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPSR7cGxhY2UuaW1hZ2V9IGFsdD1cIlwiPlxuICAgICAgICA8L2Rpdj5cdFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuICAgICAgICAgICAgPHA+JHtwbGFjZS5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke3BsYWNlLnByaWNlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPjxpIGNsYXNzPVwibWFwLWljb25cIj48L2k+IDIuNdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtwbGFjZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXBsYWNlSWQ9JHtwbGFjZS5pZH0gZGF0YS1uYW1lPSR7cGxhY2UubmFtZX0gY2xhc3M9XCJidG4tYm9vay1wbGFjZVwiPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPmBcblxuICAgIH0pXG5cbiAgfVxuXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWhlYWRlclwiPlxuICAgICAgICA8cD7QoNC10LfRg9C70YzRgtCw0YLRiyDQv9C+0LjRgdC60LA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1maWx0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiaWNvbiBpY29uLWZpbHRlclwiPjwvaT4g0KHQvtGA0YLQuNGA0L7QstCw0YLRjDo8L3NwYW4+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzcz1cIm9wdGlvbiBmaXJzdE1pblwiID7QodC90LDRh9Cw0LvQsCDQtNC10YjRkdCy0YvQtTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3M9XCJvcHRpb24gZmlyc3RNYXhcIiA+0KHQvdCw0YfQsNC70LAg0LTQvtGA0L7Qs9C40LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJyZXN1bHRzLWxpc3QgcmVzdWx0cy1saXN0LS1qc1wiPlxuICAgICBcbiAgICA8L3VsPlxuICAgIGBcbiAgKVxuICBjb25zdCBub2RlTGlzdFBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtbGlzdC0tanMnKVxuXG4gIGluc2VydEFkamFjZW50KG5vZGVMaXN0UGxhY2UsIHBsYWNlc0xpc3QpXG5cblxuICBpZiAocGxhY2VzLmxlbmd0aCkge1xuICAgIC8vINGE0YPQvdC60YbQuNGPINGB0YDQsNCy0L3QtdC90LjRjyDQvNCw0YHRgdC40LLQvtCyOiDQuNC3IExvY2FsU3RvcmFnZSDQuCDQstGL0LHRgNCw0L3QvdC+0LPQviDQv9C+INC/0LDRgNCw0LzQtdGC0YDQsNC8INGB0L/QuNGB0LrQsFxuICAgIGFycmF5Q29tcGFyaXNvbihwbGFjZXMpXG5cbiAgICAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNGPINC4INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPINC/0YDQuCDQutC70LjQutC1INC90LAg0LjQt9Cx0YDQsNC90L3QvtC1XG4gICAgY29uc3QgZmF2b3JpdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXRlcycpO1xuICAgIGZhdm9yaXRlcy5mb3JFYWNoKGZhdiA9PiB7XG4gICAgICBmYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBmYXZvcml0ZXNIYW5kbGVyQ2xpY2soZXZlbnQsIHBsYWNlcylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vINCX0LDQv9GD0YHQutCw0LXQvCDRgdC70YPRiNCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40Y8g0Lgg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgXCLQl9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjFwiXG4gIGNvbnN0IGJ0bnNCb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1ib29rLXBsYWNlJylcbiAgYnRuc0Jvb2suZm9yRWFjaChidG5Cb29rID0+IHtcbiAgICBidG5Cb29rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHsgZmV0Y2hUb0Jvb2tQbGFjZShldmVudCkgfSlcbiAgfSlcblxuICAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINC40LfQvNC10L3QtdC90LjRjyDRgdC+0YDRgtC40YDQvtCy0LrQuFxuXG4gIGxldCBzb3J0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpXG4gIHNvcnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4geyBzZWxlY3RUb1NlbGVjdGVkT3B0aW9uKHBsYWNlcywgc29ydFNlbGVjdCkgfSlcblxufVxuXG4iXX0=