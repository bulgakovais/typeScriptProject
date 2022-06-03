import { renderBlock } from './lib.js';
import { arrayComparison } from './helpers/arrayComparison.js';
import { favoritesHandlerClick } from './helpers/favoritesHandlerClick.js';
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
              <button>Забронировать</button>
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
    // функция сравнения массивов: из LocalStorage и выбранного по параметрам списка
    arrayComparison(places);
    // Запускаем слушатель события и обработчик события
    nodeListPlace.addEventListener("click", (event) => { favoritesHandlerClick(event); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFFMUUsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7OztLQUtDLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQUMsYUFBYTtJQUN6RCxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7V0FHTyxhQUFhOztLQUVuQixDQUNGLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUFDLE1BQWU7SUFFdEQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFBO0lBRW5CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLFVBQVUsSUFBSTs7O29CQUdBLEtBQUssQ0FBQyxFQUFFO3dDQUNZLEtBQUssQ0FBQyxLQUFLOzs7O2lCQUlsQyxLQUFLLENBQUMsSUFBSTsrQkFDSSxLQUFLLENBQUMsS0FBSzs7OzRDQUdFLEtBQUssQ0FBQyxXQUFXOzs7Ozs7OztVQVFuRCxDQUFBO1FBRU4sQ0FBQyxDQUFDLENBQUE7S0FDSDtJQUVELFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7Ozs7Ozs7Ozs7OztLQWVDLENBQ0YsQ0FBQTtJQUNELDBEQUEwRDtJQUMxRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDakUsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUUxRCxnRkFBZ0Y7SUFDaEYsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXZCLG1EQUFtRDtJQUNuRCxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3RGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSAnLi9oZWxwZXJzL2ludGVyZmFjZXMuanMnXG5pbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgYXJyYXlDb21wYXJpc29uIH0gZnJvbSAnLi9oZWxwZXJzL2FycmF5Q29tcGFyaXNvbi5qcydcbmltcG9ydCB7IGZhdm9yaXRlc0hhbmRsZXJDbGljayB9IGZyb20gJy4vaGVscGVycy9mYXZvcml0ZXNIYW5kbGVyQ2xpY2suanMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hTdHViQmxvY2soKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJiZWZvcmUtcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvc3RhcnQtc2VhcmNoLnBuZ1wiIC8+XG4gICAgICA8cD7Qp9GC0L7QsdGLINC90LDRh9Cw0YLRjCDQv9C+0LjRgdC6LCDQt9Cw0L/QvtC70L3QuNGC0LUg0YTQvtGA0LzRgyDQuCZuYnNwO9C90LDQttC80LjRgtC1IFwi0J3QsNC50YLQuFwiPC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRW1wdHlPckVycm9yU2VhcmNoQmxvY2socmVhc29uTWVzc2FnZSkge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvbm8tcmVzdWx0cy5wbmdcIiAvPlxuICAgICAgPHA+JHtyZWFzb25NZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaFJlc3VsdHNCbG9jayhwbGFjZXM6IFBsYWNlW10pIHtcblxuICBsZXQgcGxhY2VzTGlzdCA9ICcnXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocGxhY2VzKSAmJiBwbGFjZXMubGVuZ3RoID4gMCkge1xuICAgIHBsYWNlcy5mb3JFYWNoKHBsYWNlID0+IHtcbiAgICAgIHBsYWNlc0xpc3QgKz0gYDxsaSAgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgaWQ9JHtwbGFjZS5pZH0gY2xhc3M9XCJmYXZvcml0ZXNcIj48L2Rpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdWx0LWltZ1wiIHNyYz0ke3BsYWNlLmltYWdlfSBhbHQ9XCJcIj5cbiAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxwPiR7cGxhY2UubmFtZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtwbGFjZS5wcmljZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1tYXBcIj48aSBjbGFzcz1cIm1hcC1pY29uXCI+PC9pPiAyLjXQutC8INC+0YIg0LLQsNGBPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7cGxhY2UuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1mb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+YFxuXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1oZWFkZXJcIj5cbiAgICAgICAgPHA+0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/QvtC40YHQutCwPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtZmlsdGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1maWx0ZXJcIj48L2k+INCh0L7RgNGC0LjRgNC+0LLQsNGC0Yw6PC9zcGFuPlxuICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQtdGI0ZHQstGL0LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQvtGA0L7Qs9C40LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPtCh0L3QsNGH0LDQu9CwINCx0LvQuNC20LU8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJyZXN1bHRzLWxpc3QgcmVzdWx0cy1saXN0LS1qc1wiPlxuICAgICBcbiAgICA8L3VsPlxuICAgIGBcbiAgKVxuICAvLyDQn9C+0LvRg9GH0LDQtdC8IFVMINC40LcgRE9NINC00LXRgNC10LLQsCDQuCDQstGB0YLQsNCy0LvRj9C10Lwg0LIg0L3QtdCz0L4g0L3QsNGIINGB0L/QuNGB0L7QulxuICBjb25zdCBub2RlTGlzdFBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtbGlzdC0tanMnKVxuICBub2RlTGlzdFBsYWNlLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHBsYWNlc0xpc3QpXG5cbiAgLy8g0YTRg9C90LrRhtC40Y8g0YHRgNCw0LLQvdC10L3QuNGPINC80LDRgdGB0LjQstC+0LI6INC40LcgTG9jYWxTdG9yYWdlINC4INCy0YvQsdGA0LDQvdC90L7Qs9C+INC/0L4g0L/QsNGA0LDQvNC10YLRgNCw0Lwg0YHQv9C40YHQutCwXG4gIGFycmF5Q29tcGFyaXNvbihwbGFjZXMpXG5cbiAgLy8g0JfQsNC/0YPRgdC60LDQtdC8INGB0LvRg9GI0LDRgtC10LvRjCDRgdC+0LHRi9GC0LjRjyDQuCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRj1xuICBub2RlTGlzdFBsYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHsgZmF2b3JpdGVzSGFuZGxlckNsaWNrKGV2ZW50KSB9KVxufVxuIl19