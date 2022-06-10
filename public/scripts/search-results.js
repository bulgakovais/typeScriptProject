import { renderBlock } from './lib.js';
import { arrayComparison } from './helpers/arrayComparison.js';
import { favoritesHandlerClick } from './helpers/favoritesHandlerClick.js';
import { fetchToBookPlace } from './API/fetchToBookPlace.js';
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
          <img class="result-img" src=${place.image || place.photos[0]} alt="">
        </div>	
        <div class="result-info">
          <div class="result-info--header">
            <p>${place.name || place.title}</p>
            <p class="price">${place.price || place.totalPrice}</p>
          </div>
          <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
          <div class="result-info--descr">${place.description || place.details}</div>
          <div class="result-info--footer">
            <div>
              <button data-placeId=${place.id} data-name=${place.name || place.title} class="btn-book-place">Забронировать</button>
            </div>
          </div>
        </div>
      </div>
    </li>`;
        });
        // const nodeListPlace = document.querySelector('.results-list--js')
        // insertAdjacent(nodeListPlace, placesList)
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
    const nodeListPlace = document.querySelector('.results-list--js');
    insertAdjacent(nodeListPlace, placesList);
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
// export function renderSearchResultsBlockSdk(places: DatabaseItem[]) {
//   let placesListSdk = ''
//   if (Array.isArray(places) && places.length > 0) {
//     places.forEach(place => {
//       console.log(place)
//       placesListSdk += `<li  class="result">
//         <div class="result-container">
//           <div class="result-img-container">
//             <div id=${place.id} class="favorites"></div>
//             <img class="result-img" src=${place.photos[0]} alt="">
//           </div>	
//           <div class="result-info">
//             <div class="result-info--header">
//               <p>${place.title}</p>
//               <p class="price">${place.totalPrice}</p>
//             </div>
//             <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
//             <div class="result-info--descr">${place.details}</div>
//             <div class="result-info--footer">
//               <div>
//                 <button data-placeId=${place.id} data-name=${place.title} class="btn-book-place">Забронировать</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </li>`
//     })
//   }
// renderBlock(
//   'search-results-block',
//   `
//   <div class="search-results-header">
//       <p>Результаты поиска</p>
//       <div class="search-results-filter">
//           <span><i class="icon icon-filter"></i> Сортировать:</span>
//           <select>
//               <option selected="">Сначала дешёвые</option>
//               <option selected="">Сначала дорогие</option>
//               <option>Сначала ближе</option>
//           </select>
//       </div>
//   </div>
//   <ul class="results-list results-list--js">
//   </ul>
//   `
// )
// Получаем UL из DOM дерева и вставляем в него наш список
// const nodeListPlace = document.querySelector('.results-list--js')
// insertAdjacent(nodeListPlace, placesListSdk)
// if (places.length) {
//   // функция сравнения массивов: из LocalStorage и выбранного по параметрам списка
//   arrayComparison(places)
//   // Запускаем слушатель события и обработчик события при клике на избранное
//   const favorites = document.querySelectorAll('.favorites');
//   favorites.forEach(fav => {
//     fav.addEventListener("click", (event) => { favoritesHandlerClick(event, places) })
//   })
// }
// // Запускаем слушатель события и обработчик события при клике на кнопку "Забронировать"
// const btnsBook = document.querySelectorAll('.btn-book-place')
// btnsBook.forEach(btnBook => {
//   btnBook.addEventListener("click", (event) => { fetchToBookPlace(event) })
// })
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFLNUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRztJQUN6QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQy9DLENBQUM7QUFJRCxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7O0tBS0MsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxhQUFhO0lBQ3pELFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7OztXQUdPLGFBQWE7O0tBRW5CLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsTUFBTTtJQUU3QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7SUFFbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsVUFBVSxJQUFJOzs7b0JBR0EsS0FBSyxDQUFDLEVBQUU7d0NBQ1ksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7OztpQkFJckQsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSzsr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L2ludGVyZmFjZXMuanMnXG5pbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgYXJyYXlDb21wYXJpc29uIH0gZnJvbSAnLi9oZWxwZXJzL2FycmF5Q29tcGFyaXNvbi5qcydcbmltcG9ydCB7IGZhdm9yaXRlc0hhbmRsZXJDbGljayB9IGZyb20gJy4vaGVscGVycy9mYXZvcml0ZXNIYW5kbGVyQ2xpY2suanMnXG5pbXBvcnQgeyBmZXRjaFRvQm9va1BsYWNlIH0gZnJvbSAnLi9BUEkvZmV0Y2hUb0Jvb2tQbGFjZS5qcydcbmltcG9ydCB7IERhdGFiYXNlSXRlbSB9IGZyb20gXCIuL2ZsYXQtcmVudC1zZGsuanNcIlxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFkamFjZW50KGVsZW1lbnQsIGFycikge1xuICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgYXJyKVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImJlZm9yZS1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9zdGFydC1zZWFyY2gucG5nXCIgLz5cbiAgICAgIDxwPtCn0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0L7QuNGB0LosINC30LDQv9C+0LvQvdC40YLQtSDRhNC+0YDQvNGDINC4Jm5ic3A70L3QsNC20LzQuNGC0LUgXCLQndCw0LnRgtC4XCI8L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFbXB0eU9yRXJyb3JTZWFyY2hCbG9jayhyZWFzb25NZXNzYWdlKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9uby1yZXN1bHRzLnBuZ1wiIC8+XG4gICAgICA8cD4ke3JlYXNvbk1lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlcykge1xuXG4gIGxldCBwbGFjZXNMaXN0ID0gJydcblxuICBpZiAoQXJyYXkuaXNBcnJheShwbGFjZXMpICYmIHBsYWNlcy5sZW5ndGggPiAwKSB7XG4gICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4ge1xuICAgICAgcGxhY2VzTGlzdCArPSBgPGxpICBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBpZD0ke3BsYWNlLmlkfSBjbGFzcz1cImZhdm9yaXRlc1wiPjwvZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPSR7cGxhY2UuaW1hZ2UgfHwgcGxhY2UucGhvdG9zWzBdfSBhbHQ9XCJcIj5cbiAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxwPiR7cGxhY2UubmFtZSB8fCBwbGFjZS50aXRsZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtwbGFjZS5wcmljZSB8fCBwbGFjZS50b3RhbFByaWNlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPjxpIGNsYXNzPVwibWFwLWljb25cIj48L2k+IDIuNdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtwbGFjZS5kZXNjcmlwdGlvbiB8fCBwbGFjZS5kZXRhaWxzfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtcGxhY2VJZD0ke3BsYWNlLmlkfSBkYXRhLW5hbWU9JHtwbGFjZS5uYW1lIHx8IHBsYWNlLnRpdGxlfSBjbGFzcz1cImJ0bi1ib29rLXBsYWNlXCI+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+YFxuXG4gICAgfSlcbiAgICAvLyBjb25zdCBub2RlTGlzdFBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtbGlzdC0tanMnKVxuICAgIC8vIGluc2VydEFkamFjZW50KG5vZGVMaXN0UGxhY2UsIHBsYWNlc0xpc3QpXG5cbiAgfVxuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtaGVhZGVyXCI+XG4gICAgICAgIDxwPtCg0LXQt9GD0LvRjNGC0LDRgtGLINC/0L7QuNGB0LrQsDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWZpbHRlclwiPlxuICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJpY29uIGljb24tZmlsdGVyXCI+PC9pPiDQodC+0YDRgtC40YDQvtCy0LDRgtGMOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPtCh0L3QsNGH0LDQu9CwINC00LXRiNGR0LLRi9C1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPtCh0L3QsNGH0LDQu9CwINC00L7RgNC+0LPQuNC1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj7QodC90LDRh9Cw0LvQsCDQsdC70LjQttC1PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwicmVzdWx0cy1saXN0IHJlc3VsdHMtbGlzdC0tanNcIj5cbiAgICAgXG4gICAgPC91bD5cbiAgICBgXG4gIClcbiAgY29uc3Qgbm9kZUxpc3RQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzLWxpc3QtLWpzJylcblxuICBpbnNlcnRBZGphY2VudChub2RlTGlzdFBsYWNlLCBwbGFjZXNMaXN0KVxuXG5cbiAgaWYgKHBsYWNlcy5sZW5ndGgpIHtcbiAgICAvLyDRhNGD0L3QutGG0LjRjyDRgdGA0LDQstC90LXQvdC40Y8g0LzQsNGB0YHQuNCy0L7Qsjog0LjQtyBMb2NhbFN0b3JhZ2Ug0Lgg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0L/QviDQv9Cw0YDQsNC80LXRgtGA0LDQvCDRgdC/0LjRgdC60LBcbiAgICBhcnJheUNvbXBhcmlzb24ocGxhY2VzKVxuXG4gICAgLy8g0JfQsNC/0YPRgdC60LDQtdC8INGB0LvRg9GI0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjRjyDQuCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC40LfQsdGA0LDQvdC90L7QtVxuICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXMnKTtcbiAgICBmYXZvcml0ZXMuZm9yRWFjaChmYXYgPT4ge1xuICAgICAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHsgZmF2b3JpdGVzSGFuZGxlckNsaWNrKGV2ZW50LCBwbGFjZXMpIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vINCX0LDQv9GD0YHQutCw0LXQvCDRgdC70YPRiNCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40Y8g0Lgg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgXCLQl9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjFwiXG4gIGNvbnN0IGJ0bnNCb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1ib29rLXBsYWNlJylcbiAgYnRuc0Jvb2suZm9yRWFjaChidG5Cb29rID0+IHtcbiAgICBidG5Cb29rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHsgZmV0Y2hUb0Jvb2tQbGFjZShldmVudCkgfSlcbiAgfSlcblxuXG5cbn1cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2tTZGsocGxhY2VzOiBEYXRhYmFzZUl0ZW1bXSkge1xuXG4vLyAgIGxldCBwbGFjZXNMaXN0U2RrID0gJydcblxuXG4vLyAgIGlmIChBcnJheS5pc0FycmF5KHBsYWNlcykgJiYgcGxhY2VzLmxlbmd0aCA+IDApIHtcblxuLy8gICAgIHBsYWNlcy5mb3JFYWNoKHBsYWNlID0+IHtcblxuLy8gICAgICAgY29uc29sZS5sb2cocGxhY2UpXG4vLyAgICAgICBwbGFjZXNMaXN0U2RrICs9IGA8bGkgIGNsYXNzPVwicmVzdWx0XCI+XG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4vLyAgICAgICAgICAgICA8ZGl2IGlkPSR7cGxhY2UuaWR9IGNsYXNzPVwiZmF2b3JpdGVzXCI+PC9kaXY+XG4vLyAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdWx0LWltZ1wiIHNyYz0ke3BsYWNlLnBob3Rvc1swXX0gYWx0PVwiXCI+XG4vLyAgICAgICAgICAgPC9kaXY+XHRcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm9cIj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0taGVhZGVyXCI+XG4vLyAgICAgICAgICAgICAgIDxwPiR7cGxhY2UudGl0bGV9PC9wPlxuLy8gICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtwbGFjZS50b3RhbFByaWNlfTwvcD5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1tYXBcIj48aSBjbGFzcz1cIm1hcC1pY29uXCI+PC9pPiAyLjXQutC8INC+0YIg0LLQsNGBPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtwbGFjZS5kZXRhaWxzfTwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1mb290ZXJcIj5cbi8vICAgICAgICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtcGxhY2VJZD0ke3BsYWNlLmlkfSBkYXRhLW5hbWU9JHtwbGFjZS50aXRsZX0gY2xhc3M9XCJidG4tYm9vay1wbGFjZVwiPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9saT5gXG5cbi8vICAgICB9KVxuLy8gICB9XG5cbiAgLy8gcmVuZGVyQmxvY2soXG4gIC8vICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgLy8gICBgXG4gIC8vICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWhlYWRlclwiPlxuICAvLyAgICAgICA8cD7QoNC10LfRg9C70YzRgtCw0YLRiyDQv9C+0LjRgdC60LA8L3A+XG4gIC8vICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1maWx0ZXJcIj5cbiAgLy8gICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiaWNvbiBpY29uLWZpbHRlclwiPjwvaT4g0KHQvtGA0YLQuNGA0L7QstCw0YLRjDo8L3NwYW4+XG4gIC8vICAgICAgICAgICA8c2VsZWN0PlxuICAvLyAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7QodC90LDRh9Cw0LvQsCDQtNC10YjRkdCy0YvQtTwvb3B0aW9uPlxuICAvLyAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7QodC90LDRh9Cw0LvQsCDQtNC+0YDQvtCz0LjQtTwvb3B0aW9uPlxuICAvLyAgICAgICAgICAgICAgIDxvcHRpb24+0KHQvdCw0YfQsNC70LAg0LHQu9C40LbQtTwvb3B0aW9uPlxuICAvLyAgICAgICAgICAgPC9zZWxlY3Q+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgIDwvZGl2PlxuICAvLyAgIDx1bCBjbGFzcz1cInJlc3VsdHMtbGlzdCByZXN1bHRzLWxpc3QtLWpzXCI+XG5cbiAgLy8gICA8L3VsPlxuICAvLyAgIGBcbiAgLy8gKVxuICAvLyDQn9C+0LvRg9GH0LDQtdC8IFVMINC40LcgRE9NINC00LXRgNC10LLQsCDQuCDQstGB0YLQsNCy0LvRj9C10Lwg0LIg0L3QtdCz0L4g0L3QsNGIINGB0L/QuNGB0L7QulxuICAvLyBjb25zdCBub2RlTGlzdFBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtbGlzdC0tanMnKVxuXG4gIC8vIGluc2VydEFkamFjZW50KG5vZGVMaXN0UGxhY2UsIHBsYWNlc0xpc3RTZGspXG5cblxuICAvLyBpZiAocGxhY2VzLmxlbmd0aCkge1xuICAvLyAgIC8vINGE0YPQvdC60YbQuNGPINGB0YDQsNCy0L3QtdC90LjRjyDQvNCw0YHRgdC40LLQvtCyOiDQuNC3IExvY2FsU3RvcmFnZSDQuCDQstGL0LHRgNCw0L3QvdC+0LPQviDQv9C+INC/0LDRgNCw0LzQtdGC0YDQsNC8INGB0L/QuNGB0LrQsFxuICAvLyAgIGFycmF5Q29tcGFyaXNvbihwbGFjZXMpXG5cbiAgLy8gICAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNGPINC4INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPINC/0YDQuCDQutC70LjQutC1INC90LAg0LjQt9Cx0YDQsNC90L3QvtC1XG4gIC8vICAgY29uc3QgZmF2b3JpdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXRlcycpO1xuICAvLyAgIGZhdm9yaXRlcy5mb3JFYWNoKGZhdiA9PiB7XG4gIC8vICAgICBmYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4geyBmYXZvcml0ZXNIYW5kbGVyQ2xpY2soZXZlbnQsIHBsYWNlcykgfSlcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgLy8gLy8g0JfQsNC/0YPRgdC60LDQtdC8INGB0LvRg9GI0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjRjyDQuCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyBcItCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMXCJcbiAgLy8gY29uc3QgYnRuc0Jvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWJvb2stcGxhY2UnKVxuICAvLyBidG5zQm9vay5mb3JFYWNoKGJ0bkJvb2sgPT4ge1xuICAvLyAgIGJ0bkJvb2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4geyBmZXRjaFRvQm9va1BsYWNlKGV2ZW50KSB9KVxuICAvLyB9KVxuXG4vLyB9XG4iXX0=