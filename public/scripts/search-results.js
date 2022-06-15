import { renderBlock } from './lib.js';
import { arrayComparison } from './helpers/arrayComparison.js';
import { favoritesHandlerClick } from './helpers/favoritesHandlerClick.js';
import { fetchToBookPlace } from './API/fetchToBookPlace.js';
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
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list results-list--js">
     
    </ul>
    `);
    // Получаем UL из DOM дерева и вставляем в него наш список
    const nodeListPlace = document.querySelector('.results-list--js');
    nodeListPlace.insertAdjacentHTML('afterbegin', placesList);
    if (places.length) {
        // функция сравнения массивов: из LocalStorage и выбранного по параметрам списка
        arrayComparison(places);
        // Запускаем слушатель события и обработчик события при клике на избранное
        const favorites = document.querySelectorAll('.favorites');
        favorites.forEach(fav => {
            fav.addEventListener("click", (event) => { favoritesHandlerClick(event, places); });
        });
    }
    // Запускаем слушатель события и обработчик события при клике на кнопку "Забронировать"
    const btnsBook = document.querySelectorAll('.btn-book-place');
    btnsBook.forEach(btnBook => {
        btnBook.addEventListener("click", (event) => { fetchToBookPlace(event); });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFFNUQsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7OztLQUtDLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQUMsYUFBYTtJQUN6RCxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7V0FHTyxhQUFhOztLQUVuQixDQUNGLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUFDLE1BQWU7SUFFdEQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFBO0lBRW5CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLFVBQVUsSUFBSTs7O29CQUdBLEtBQUssQ0FBQyxFQUFFO3dDQUNZLEtBQUssQ0FBQyxLQUFLOzs7O2lCQUlsQyxLQUFLLENBQUMsSUFBSTsrQkFDSSxLQUFLLENBQUMsS0FBSzs7OzRDQUdFLEtBQUssQ0FBQyxXQUFXOzs7cUNBR3hCLEtBQUssQ0FBQyxFQUFFLGNBQWMsS0FBSyxDQUFDLElBQUk7Ozs7O1VBSzNELENBQUE7UUFFTixDQUFDLENBQUMsQ0FBQTtLQUNIO0lBRUQsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7Ozs7Ozs7Ozs7Ozs7O0tBZUMsQ0FDRixDQUFBO0lBQ0QsMERBQTBEO0lBQzFELE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUNqRSxhQUFhLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBRTFELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNqQixnRkFBZ0Y7UUFDaEYsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRXZCLDBFQUEwRTtRQUMxRSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRixDQUFDLENBQUMsQ0FBQTtLQUNIO0lBRUQsdUZBQXVGO0lBQ3ZGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQzdELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDekIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSAnLi9oZWxwZXJzL2ludGVyZmFjZXMuanMnXG5pbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgYXJyYXlDb21wYXJpc29uIH0gZnJvbSAnLi9oZWxwZXJzL2FycmF5Q29tcGFyaXNvbi5qcydcbmltcG9ydCB7IGZhdm9yaXRlc0hhbmRsZXJDbGljayB9IGZyb20gJy4vaGVscGVycy9mYXZvcml0ZXNIYW5kbGVyQ2xpY2suanMnXG5pbXBvcnQgeyBmZXRjaFRvQm9va1BsYWNlIH0gZnJvbSAnLi9BUEkvZmV0Y2hUb0Jvb2tQbGFjZS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImJlZm9yZS1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9zdGFydC1zZWFyY2gucG5nXCIgLz5cbiAgICAgIDxwPtCn0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0L7QuNGB0LosINC30LDQv9C+0LvQvdC40YLQtSDRhNC+0YDQvNGDINC4Jm5ic3A70L3QsNC20LzQuNGC0LUgXCLQndCw0LnRgtC4XCI8L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFbXB0eU9yRXJyb3JTZWFyY2hCbG9jayhyZWFzb25NZXNzYWdlKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9uby1yZXN1bHRzLnBuZ1wiIC8+XG4gICAgICA8cD4ke3JlYXNvbk1lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlczogUGxhY2VbXSkge1xuXG4gIGxldCBwbGFjZXNMaXN0ID0gJydcblxuICBpZiAoQXJyYXkuaXNBcnJheShwbGFjZXMpICYmIHBsYWNlcy5sZW5ndGggPiAwKSB7XG4gICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4ge1xuICAgICAgcGxhY2VzTGlzdCArPSBgPGxpICBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBpZD0ke3BsYWNlLmlkfSBjbGFzcz1cImZhdm9yaXRlc1wiPjwvZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPSR7cGxhY2UuaW1hZ2V9IGFsdD1cIlwiPlxuICAgICAgICA8L2Rpdj5cdFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuICAgICAgICAgICAgPHA+JHtwbGFjZS5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke3BsYWNlLnByaWNlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPjxpIGNsYXNzPVwibWFwLWljb25cIj48L2k+IDIuNdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtwbGFjZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXBsYWNlSWQ9JHtwbGFjZS5pZH0gZGF0YS1uYW1lPSR7cGxhY2UubmFtZX0gY2xhc3M9XCJidG4tYm9vay1wbGFjZVwiPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPmBcblxuICAgIH0pXG4gIH1cblxuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtaGVhZGVyXCI+XG4gICAgICAgIDxwPtCg0LXQt9GD0LvRjNGC0LDRgtGLINC/0L7QuNGB0LrQsDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWZpbHRlclwiPlxuICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJpY29uIGljb24tZmlsdGVyXCI+PC9pPiDQodC+0YDRgtC40YDQvtCy0LDRgtGMOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPtCh0L3QsNGH0LDQu9CwINC00LXRiNGR0LLRi9C1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPtCh0L3QsNGH0LDQu9CwINC00L7RgNC+0LPQuNC1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj7QodC90LDRh9Cw0LvQsCDQsdC70LjQttC1PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwicmVzdWx0cy1saXN0IHJlc3VsdHMtbGlzdC0tanNcIj5cbiAgICAgXG4gICAgPC91bD5cbiAgICBgXG4gIClcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCBVTCDQuNC3IERPTSDQtNC10YDQtdCy0LAg0Lgg0LLRgdGC0LDQstC70Y/QtdC8INCyINC90LXQs9C+INC90LDRiCDRgdC/0LjRgdC+0LpcbiAgY29uc3Qgbm9kZUxpc3RQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzLWxpc3QtLWpzJylcbiAgbm9kZUxpc3RQbGFjZS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBwbGFjZXNMaXN0KVxuXG4gIGlmIChwbGFjZXMubGVuZ3RoKSB7XG4gICAgLy8g0YTRg9C90LrRhtC40Y8g0YHRgNCw0LLQvdC10L3QuNGPINC80LDRgdGB0LjQstC+0LI6INC40LcgTG9jYWxTdG9yYWdlINC4INCy0YvQsdGA0LDQvdC90L7Qs9C+INC/0L4g0L/QsNGA0LDQvNC10YLRgNCw0Lwg0YHQv9C40YHQutCwXG4gICAgYXJyYXlDb21wYXJpc29uKHBsYWNlcylcblxuICAgIC8vINCX0LDQv9GD0YHQutCw0LXQvCDRgdC70YPRiNCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40Y8g0Lgg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0L/RgNC4INC60LvQuNC60LUg0L3QsCDQuNC30LHRgNCw0L3QvdC+0LVcbiAgICBjb25zdCBmYXZvcml0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdGVzJyk7XG4gICAgZmF2b3JpdGVzLmZvckVhY2goZmF2ID0+IHtcbiAgICAgIGZhdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7IGZhdm9yaXRlc0hhbmRsZXJDbGljayhldmVudCwgcGxhY2VzKSB9KVxuICAgIH0pXG4gIH1cblxuICAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNGPINC4INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPINC/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIFwi0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0YxcIlxuICBjb25zdCBidG5zQm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tYm9vay1wbGFjZScpXG4gIGJ0bnNCb29rLmZvckVhY2goYnRuQm9vayA9PiB7XG4gICAgYnRuQm9vay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7IGZldGNoVG9Cb29rUGxhY2UoZXZlbnQpIH0pXG4gIH0pXG5cbn1cbiJdfQ==