import { renderBlock } from './lib.js';
import { arrayComparison } from './helpers/arrayComparison.js';
import { favoritesHandlerClick } from './helpers/favoritesHandlerClick.js';
import { fetchToBookPlace } from './API/fetchToBookPlace.js';
import { selectToSelectedOption } from './helpers/sort-handler.js';
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
export function renderSearchResultsHeader(places) {
    renderBlock('search-results-header-block', `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select id="select">
                <option class="option" value="cheap">Сначала дешёвые</option>
                <option class="option" value="expensive">Сначала дорогие</option>
                
            </select>
        </div>
     </div>`);
    // Запускаем слушатель изменения сортировки
    let sortSelect = document.querySelector('#select');
    sortSelect.addEventListener('change', () => { selectToSelectedOption(places, sortSelect); });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFJbEUsTUFBTSxVQUFVLGNBQWMsQ0FBQyxPQUFnQixFQUFFLEdBQVc7SUFDMUQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUMvQyxDQUFDO0FBR0QsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7OztLQUtDLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQUMsYUFBcUI7SUFDakUsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7O1dBR08sYUFBYTs7S0FFbkIsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQUNELE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxNQUFlO0lBRXZELFdBQVcsQ0FDVCw2QkFBNkIsRUFDN0I7Ozs7Ozs7Ozs7O1lBV1EsQ0FDVCxDQUFBO0lBQ0QsMkNBQTJDO0lBQzNDLElBQUksVUFBVSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3JFLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFN0YsQ0FBQztBQUVELE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxNQUFlO0lBRXRELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQTtJQUVuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixVQUFVLElBQUk7OztvQkFHQSxLQUFLLENBQUMsRUFBRTt3Q0FDWSxLQUFLLENBQUMsS0FBSzs7OztpQkFJbEMsS0FBSyxDQUFDLElBQUk7K0JBQ0ksS0FBSyxDQUFDLEtBQUs7Ozs0Q0FHRSxLQUFLLENBQUMsV0FBVzs7O3FDQUd4QixLQUFLLENBQUMsRUFBRSxjQUFjLEtBQUssQ0FBQyxJQUFJOzs7OztVQUszRCxDQUFBO1FBRU4sQ0FBQyxDQUFDLENBQUE7S0FFSDtJQUdELFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7S0FJQyxDQUNGLENBQUE7SUFDRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFFakUsY0FBYyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUd6QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDakIsZ0ZBQWdGO1FBQ2hGLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUV2QiwwRUFBMEU7UUFDMUUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN0QyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtLQUNIO0lBRUQsdUZBQXVGO0lBQ3ZGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQzdELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDekIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQgeyBhcnJheUNvbXBhcmlzb24gfSBmcm9tICcuL2hlbHBlcnMvYXJyYXlDb21wYXJpc29uLmpzJ1xuaW1wb3J0IHsgZmF2b3JpdGVzSGFuZGxlckNsaWNrIH0gZnJvbSAnLi9oZWxwZXJzL2Zhdm9yaXRlc0hhbmRsZXJDbGljay5qcydcbmltcG9ydCB7IGZldGNoVG9Cb29rUGxhY2UgfSBmcm9tICcuL0FQSS9mZXRjaFRvQm9va1BsYWNlLmpzJ1xuaW1wb3J0IHsgc2VsZWN0VG9TZWxlY3RlZE9wdGlvbiB9IGZyb20gJy4vaGVscGVycy9zb3J0LWhhbmRsZXIuanMnXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gJy4vc3RvcmUvZG9tYWluL3BsYWNlLmpzJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZGphY2VudChlbGVtZW50OiBFbGVtZW50LCBhcnI6IHN0cmluZykge1xuICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgYXJyKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hTdHViQmxvY2soKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJiZWZvcmUtcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvc3RhcnQtc2VhcmNoLnBuZ1wiIC8+XG4gICAgICA8cD7Qp9GC0L7QsdGLINC90LDRh9Cw0YLRjCDQv9C+0LjRgdC6LCDQt9Cw0L/QvtC70L3QuNGC0LUg0YTQvtGA0LzRgyDQuCZuYnNwO9C90LDQttC80LjRgtC1IFwi0J3QsNC50YLQuFwiPC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRW1wdHlPckVycm9yU2VhcmNoQmxvY2socmVhc29uTWVzc2FnZTogc3RyaW5nKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9uby1yZXN1bHRzLnBuZ1wiIC8+XG4gICAgICA8cD4ke3JlYXNvbk1lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaFJlc3VsdHNIZWFkZXIocGxhY2VzOiBQbGFjZVtdKSB7XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWhlYWRlci1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1oZWFkZXJcIj5cbiAgICAgICAgPHA+0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/QvtC40YHQutCwPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtZmlsdGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1maWx0ZXJcIj48L2k+INCh0L7RgNGC0LjRgNC+0LLQsNGC0Yw6PC9zcGFuPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3M9XCJvcHRpb25cIiB2YWx1ZT1cImNoZWFwXCI+0KHQvdCw0YfQsNC70LAg0LTQtdGI0ZHQstGL0LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzPVwib3B0aW9uXCIgdmFsdWU9XCJleHBlbnNpdmVcIj7QodC90LDRh9Cw0LvQsCDQtNC+0YDQvtCz0LjQtTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5gXG4gIClcbiAgLy8g0JfQsNC/0YPRgdC60LDQtdC8INGB0LvRg9GI0LDRgtC10LvRjCDQuNC30LzQtdC90LXQvdC40Y8g0YHQvtGA0YLQuNGA0L7QstC60LhcbiAgbGV0IHNvcnRTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpXG4gIHNvcnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4geyBzZWxlY3RUb1NlbGVjdGVkT3B0aW9uKHBsYWNlcywgc29ydFNlbGVjdCkgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlczogUGxhY2VbXSkge1xuXG4gIGxldCBwbGFjZXNMaXN0ID0gJydcblxuICBpZiAoQXJyYXkuaXNBcnJheShwbGFjZXMpICYmIHBsYWNlcy5sZW5ndGggPiAwKSB7XG4gICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4ge1xuICAgICAgcGxhY2VzTGlzdCArPSBgPGxpICBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBpZD0ke3BsYWNlLmlkfSBjbGFzcz1cImZhdm9yaXRlc1wiPjwvZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPSR7cGxhY2UuaW1hZ2V9IGFsdD1cIlwiPlxuICAgICAgICA8L2Rpdj5cdFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuICAgICAgICAgICAgPHA+JHtwbGFjZS5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke3BsYWNlLnByaWNlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPjxpIGNsYXNzPVwibWFwLWljb25cIj48L2k+IDIuNdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtwbGFjZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXBsYWNlSWQ9JHtwbGFjZS5pZH0gZGF0YS1uYW1lPSR7cGxhY2UubmFtZX0gY2xhc3M9XCJidG4tYm9vay1wbGFjZVwiPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPmBcblxuICAgIH0pXG5cbiAgfVxuXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPHVsIGNsYXNzPVwicmVzdWx0cy1saXN0IHJlc3VsdHMtbGlzdC0tanNcIj5cbiAgICAgXG4gICAgPC91bD5cbiAgICBgXG4gIClcbiAgY29uc3Qgbm9kZUxpc3RQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzLWxpc3QtLWpzJylcblxuICBpbnNlcnRBZGphY2VudChub2RlTGlzdFBsYWNlLCBwbGFjZXNMaXN0KVxuXG5cbiAgaWYgKHBsYWNlcy5sZW5ndGgpIHtcbiAgICAvLyDRhNGD0L3QutGG0LjRjyDRgdGA0LDQstC90LXQvdC40Y8g0LzQsNGB0YHQuNCy0L7Qsjog0LjQtyBMb2NhbFN0b3JhZ2Ug0Lgg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0L/QviDQv9Cw0YDQsNC80LXRgtGA0LDQvCDRgdC/0LjRgdC60LBcbiAgICBhcnJheUNvbXBhcmlzb24ocGxhY2VzKVxuXG4gICAgLy8g0JfQsNC/0YPRgdC60LDQtdC8INGB0LvRg9GI0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjRjyDQuCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC40LfQsdGA0LDQvdC90L7QtVxuICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXMnKTtcbiAgICBmYXZvcml0ZXMuZm9yRWFjaChmYXYgPT4ge1xuICAgICAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZmF2b3JpdGVzSGFuZGxlckNsaWNrKGV2ZW50LCBwbGFjZXMpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNGPINC4INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPINC/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIFwi0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0YxcIlxuICBjb25zdCBidG5zQm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tYm9vay1wbGFjZScpXG4gIGJ0bnNCb29rLmZvckVhY2goYnRuQm9vayA9PiB7XG4gICAgYnRuQm9vay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7IGZldGNoVG9Cb29rUGxhY2UoZXZlbnQpIH0pXG4gIH0pXG5cbn1cblxuIl19