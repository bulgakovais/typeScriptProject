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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFPNUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRztJQUN6QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQy9DLENBQUM7QUFJRCxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7O0tBS0MsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxhQUFhO0lBQ3pELFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7OztXQUdPLGFBQWE7O0tBRW5CLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsTUFBTTtJQUU3QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7SUFFbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsVUFBVSxJQUFJOzs7b0JBR0EsS0FBSyxDQUFDLEVBQUU7d0NBQ1ksS0FBSyxDQUFDLEtBQUs7Ozs7aUJBSWxDLEtBQUssQ0FBQyxJQUFJOytCQUNJLEtBQUssQ0FBQyxLQUFLOzs7NENBR0UsS0FBSyxDQUFDLFdBQVc7OztxQ0FHeEIsS0FBSyxDQUFDLEVBQUUsY0FBYyxLQUFLLENBQUMsSUFBSTs7Ozs7VUFLM0QsQ0FBQTtRQUVOLENBQUMsQ0FBQyxDQUFBO0tBRUg7SUFDRCxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7S0FlQyxDQUNGLENBQUE7SUFDRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFFakUsY0FBYyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUd6QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDakIsZ0ZBQWdGO1FBQ2hGLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUV2QiwwRUFBMEU7UUFDMUUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN0QyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtLQUNIO0lBRUQsdUZBQXVGO0lBQ3ZGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQzdELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDekIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDLENBQUMsQ0FBQTtBQUlKLENBQUM7QUFJRCx3RUFBd0U7QUFFeEUsMkJBQTJCO0FBRzNCLHNEQUFzRDtBQUV0RCxnQ0FBZ0M7QUFFaEMsMkJBQTJCO0FBQzNCLCtDQUErQztBQUMvQyx5Q0FBeUM7QUFDekMsK0NBQStDO0FBQy9DLDJEQUEyRDtBQUMzRCxxRUFBcUU7QUFDckUsb0JBQW9CO0FBQ3BCLHNDQUFzQztBQUN0QyxnREFBZ0Q7QUFDaEQsc0NBQXNDO0FBQ3RDLHlEQUF5RDtBQUN6RCxxQkFBcUI7QUFDckIsd0ZBQXdGO0FBQ3hGLHFFQUFxRTtBQUNyRSxnREFBZ0Q7QUFDaEQsc0JBQXNCO0FBQ3RCLDBIQUEwSDtBQUMxSCx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUVmLFNBQVM7QUFDVCxNQUFNO0FBRUosZUFBZTtBQUNmLDRCQUE0QjtBQUM1QixNQUFNO0FBQ04sd0NBQXdDO0FBQ3hDLGlDQUFpQztBQUNqQyw0Q0FBNEM7QUFDNUMsdUVBQXVFO0FBQ3ZFLHFCQUFxQjtBQUNyQiw2REFBNkQ7QUFDN0QsNkRBQTZEO0FBQzdELCtDQUErQztBQUMvQyxzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLFdBQVc7QUFDWCwrQ0FBK0M7QUFFL0MsVUFBVTtBQUNWLE1BQU07QUFDTixJQUFJO0FBQ0osMERBQTBEO0FBQzFELG9FQUFvRTtBQUVwRSwrQ0FBK0M7QUFHL0MsdUJBQXVCO0FBQ3ZCLHFGQUFxRjtBQUNyRiw0QkFBNEI7QUFFNUIsK0VBQStFO0FBQy9FLCtEQUErRDtBQUMvRCwrQkFBK0I7QUFDL0IseUZBQXlGO0FBQ3pGLE9BQU87QUFDUCxJQUFJO0FBRUosMEZBQTBGO0FBQzFGLGdFQUFnRTtBQUNoRSxnQ0FBZ0M7QUFDaEMsOEVBQThFO0FBQzlFLEtBQUs7QUFFUCxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gJy4vc3RvcmUvZG9tYWluL3BsYWNlLmpzJ1xuaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IGFycmF5Q29tcGFyaXNvbiB9IGZyb20gJy4vaGVscGVycy9hcnJheUNvbXBhcmlzb24uanMnXG5pbXBvcnQgeyBmYXZvcml0ZXNIYW5kbGVyQ2xpY2sgfSBmcm9tICcuL2hlbHBlcnMvZmF2b3JpdGVzSGFuZGxlckNsaWNrLmpzJ1xuaW1wb3J0IHsgZmV0Y2hUb0Jvb2tQbGFjZSB9IGZyb20gJy4vQVBJL2ZldGNoVG9Cb29rUGxhY2UuanMnXG5pbXBvcnQgeyBEYXRhYmFzZUl0ZW0gfSBmcm9tIFwiLi9mbGF0LXJlbnQtc2RrLmpzXCJcbmltcG9ydCB7IHJlbmRlclVzZXJCbG9jayB9IGZyb20gJy4vdXNlci5qcydcbmltcG9ydCB7IGdldFVzZXJEYXRhLCBnZXRGYXZvcml0ZXNDYXB0aW9uIH0gZnJvbSAnLi9oZWxwZXJzL3VzZXJEYXRhLmpzJ1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFkamFjZW50KGVsZW1lbnQsIGFycikge1xuICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgYXJyKVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImJlZm9yZS1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9zdGFydC1zZWFyY2gucG5nXCIgLz5cbiAgICAgIDxwPtCn0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0L7QuNGB0LosINC30LDQv9C+0LvQvdC40YLQtSDRhNC+0YDQvNGDINC4Jm5ic3A70L3QsNC20LzQuNGC0LUgXCLQndCw0LnRgtC4XCI8L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFbXB0eU9yRXJyb3JTZWFyY2hCbG9jayhyZWFzb25NZXNzYWdlKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9uby1yZXN1bHRzLnBuZ1wiIC8+XG4gICAgICA8cD4ke3JlYXNvbk1lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlcykge1xuXG4gIGxldCBwbGFjZXNMaXN0ID0gJydcblxuICBpZiAoQXJyYXkuaXNBcnJheShwbGFjZXMpICYmIHBsYWNlcy5sZW5ndGggPiAwKSB7XG4gICAgcGxhY2VzLmZvckVhY2gocGxhY2UgPT4ge1xuICAgICAgcGxhY2VzTGlzdCArPSBgPGxpICBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBpZD0ke3BsYWNlLmlkfSBjbGFzcz1cImZhdm9yaXRlc1wiPjwvZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPSR7cGxhY2UuaW1hZ2V9IGFsdD1cIlwiPlxuICAgICAgICA8L2Rpdj5cdFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuICAgICAgICAgICAgPHA+JHtwbGFjZS5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke3BsYWNlLnByaWNlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPjxpIGNsYXNzPVwibWFwLWljb25cIj48L2k+IDIuNdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtwbGFjZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXBsYWNlSWQ9JHtwbGFjZS5pZH0gZGF0YS1uYW1lPSR7cGxhY2UubmFtZX0gY2xhc3M9XCJidG4tYm9vay1wbGFjZVwiPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPmBcblxuICAgIH0pXG5cbiAgfVxuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtaGVhZGVyXCI+XG4gICAgICAgIDxwPtCg0LXQt9GD0LvRjNGC0LDRgtGLINC/0L7QuNGB0LrQsDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWZpbHRlclwiPlxuICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJpY29uIGljb24tZmlsdGVyXCI+PC9pPiDQodC+0YDRgtC40YDQvtCy0LDRgtGMOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPtCh0L3QsNGH0LDQu9CwINC00LXRiNGR0LLRi9C1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPtCh0L3QsNGH0LDQu9CwINC00L7RgNC+0LPQuNC1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj7QodC90LDRh9Cw0LvQsCDQsdC70LjQttC1PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwicmVzdWx0cy1saXN0IHJlc3VsdHMtbGlzdC0tanNcIj5cbiAgICAgXG4gICAgPC91bD5cbiAgICBgXG4gIClcbiAgY29uc3Qgbm9kZUxpc3RQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzLWxpc3QtLWpzJylcblxuICBpbnNlcnRBZGphY2VudChub2RlTGlzdFBsYWNlLCBwbGFjZXNMaXN0KVxuXG5cbiAgaWYgKHBsYWNlcy5sZW5ndGgpIHtcbiAgICAvLyDRhNGD0L3QutGG0LjRjyDRgdGA0LDQstC90LXQvdC40Y8g0LzQsNGB0YHQuNCy0L7Qsjog0LjQtyBMb2NhbFN0b3JhZ2Ug0Lgg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0L/QviDQv9Cw0YDQsNC80LXRgtGA0LDQvCDRgdC/0LjRgdC60LBcbiAgICBhcnJheUNvbXBhcmlzb24ocGxhY2VzKVxuXG4gICAgLy8g0JfQsNC/0YPRgdC60LDQtdC8INGB0LvRg9GI0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjRjyDQuCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC40LfQsdGA0LDQvdC90L7QtVxuICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXMnKTtcbiAgICBmYXZvcml0ZXMuZm9yRWFjaChmYXYgPT4ge1xuICAgICAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZmF2b3JpdGVzSGFuZGxlckNsaWNrKGV2ZW50LCBwbGFjZXMpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINGB0L7QsdGL0YLQuNGPINC4INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPINC/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIFwi0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0YxcIlxuICBjb25zdCBidG5zQm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tYm9vay1wbGFjZScpXG4gIGJ0bnNCb29rLmZvckVhY2goYnRuQm9vayA9PiB7XG4gICAgYnRuQm9vay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7IGZldGNoVG9Cb29rUGxhY2UoZXZlbnQpIH0pXG4gIH0pXG5cblxuXG59XG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrU2RrKHBsYWNlczogRGF0YWJhc2VJdGVtW10pIHtcblxuLy8gICBsZXQgcGxhY2VzTGlzdFNkayA9ICcnXG5cblxuLy8gICBpZiAoQXJyYXkuaXNBcnJheShwbGFjZXMpICYmIHBsYWNlcy5sZW5ndGggPiAwKSB7XG5cbi8vICAgICBwbGFjZXMuZm9yRWFjaChwbGFjZSA9PiB7XG5cbi8vICAgICAgIGNvbnNvbGUubG9nKHBsYWNlKVxuLy8gICAgICAgcGxhY2VzTGlzdFNkayArPSBgPGxpICBjbGFzcz1cInJlc3VsdFwiPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRhaW5lclwiPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW1nLWNvbnRhaW5lclwiPlxuLy8gICAgICAgICAgICAgPGRpdiBpZD0ke3BsYWNlLmlkfSBjbGFzcz1cImZhdm9yaXRlc1wiPjwvZGl2PlxuLy8gICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3VsdC1pbWdcIiBzcmM9JHtwbGFjZS5waG90b3NbMF19IGFsdD1cIlwiPlxuLy8gICAgICAgICAgIDwvZGl2Plx0XG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuLy8gICAgICAgICAgICAgICA8cD4ke3BsYWNlLnRpdGxlfTwvcD5cbi8vICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiR7cGxhY2UudG90YWxQcmljZX08L3A+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tbWFwXCI+PGkgY2xhc3M9XCJtYXAtaWNvblwiPjwvaT4gMi410LrQvCDQvtGCINCy0LDRgTwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7cGxhY2UuZGV0YWlsc308L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZm9vdGVyXCI+XG4vLyAgICAgICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXBsYWNlSWQ9JHtwbGFjZS5pZH0gZGF0YS1uYW1lPSR7cGxhY2UudGl0bGV9IGNsYXNzPVwiYnRuLWJvb2stcGxhY2VcIj7Ql9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvbGk+YFxuXG4vLyAgICAgfSlcbi8vICAgfVxuXG4gIC8vIHJlbmRlckJsb2NrKFxuICAvLyAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gIC8vICAgYFxuICAvLyAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1oZWFkZXJcIj5cbiAgLy8gICAgICAgPHA+0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/QvtC40YHQutCwPC9wPlxuICAvLyAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtZmlsdGVyXCI+XG4gIC8vICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1maWx0ZXJcIj48L2k+INCh0L7RgNGC0LjRgNC+0LLQsNGC0Yw6PC9zcGFuPlxuICAvLyAgICAgICAgICAgPHNlbGVjdD5cbiAgLy8gICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQtdGI0ZHQstGL0LU8L29wdGlvbj5cbiAgLy8gICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQvtGA0L7Qs9C40LU8L29wdGlvbj5cbiAgLy8gICAgICAgICAgICAgICA8b3B0aW9uPtCh0L3QsNGH0LDQu9CwINCx0LvQuNC20LU8L29wdGlvbj5cbiAgLy8gICAgICAgICAgIDwvc2VsZWN0PlxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gICA8dWwgY2xhc3M9XCJyZXN1bHRzLWxpc3QgcmVzdWx0cy1saXN0LS1qc1wiPlxuXG4gIC8vICAgPC91bD5cbiAgLy8gICBgXG4gIC8vIClcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCBVTCDQuNC3IERPTSDQtNC10YDQtdCy0LAg0Lgg0LLRgdGC0LDQstC70Y/QtdC8INCyINC90LXQs9C+INC90LDRiCDRgdC/0LjRgdC+0LpcbiAgLy8gY29uc3Qgbm9kZUxpc3RQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzLWxpc3QtLWpzJylcblxuICAvLyBpbnNlcnRBZGphY2VudChub2RlTGlzdFBsYWNlLCBwbGFjZXNMaXN0U2RrKVxuXG5cbiAgLy8gaWYgKHBsYWNlcy5sZW5ndGgpIHtcbiAgLy8gICAvLyDRhNGD0L3QutGG0LjRjyDRgdGA0LDQstC90LXQvdC40Y8g0LzQsNGB0YHQuNCy0L7Qsjog0LjQtyBMb2NhbFN0b3JhZ2Ug0Lgg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0L/QviDQv9Cw0YDQsNC80LXRgtGA0LDQvCDRgdC/0LjRgdC60LBcbiAgLy8gICBhcnJheUNvbXBhcmlzb24ocGxhY2VzKVxuXG4gIC8vICAgLy8g0JfQsNC/0YPRgdC60LDQtdC8INGB0LvRg9GI0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjRjyDQuCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC40LfQsdGA0LDQvdC90L7QtVxuICAvLyAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZXMnKTtcbiAgLy8gICBmYXZvcml0ZXMuZm9yRWFjaChmYXYgPT4ge1xuICAvLyAgICAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHsgZmF2b3JpdGVzSGFuZGxlckNsaWNrKGV2ZW50LCBwbGFjZXMpIH0pXG4gIC8vICAgfSlcbiAgLy8gfVxuXG4gIC8vIC8vINCX0LDQv9GD0YHQutCw0LXQvCDRgdC70YPRiNCw0YLQtdC70Ywg0YHQvtCx0YvRgtC40Y8g0Lgg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgXCLQl9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjFwiXG4gIC8vIGNvbnN0IGJ0bnNCb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1ib29rLXBsYWNlJylcbiAgLy8gYnRuc0Jvb2suZm9yRWFjaChidG5Cb29rID0+IHtcbiAgLy8gICBidG5Cb29rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHsgZmV0Y2hUb0Jvb2tQbGFjZShldmVudCkgfSlcbiAgLy8gfSlcblxuLy8gfVxuIl19