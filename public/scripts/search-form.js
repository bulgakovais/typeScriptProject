import { renderBlock } from './lib.js';
import { todayDMY, defaultDateOff, defaultDateIn, lastDayNextMonth } from './dates.js';
export function renderSearchFormBlock(checkInDate, checkOutDate) {
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDate || defaultDateIn}" min="${todayDMY}" max="${lastDayNextMonth}" name="checkin"></input>
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDate || defaultDateOff}" min="${todayDMY}" max="${lastDayNextMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="10000" name="price" class="max-price" />
          </div>
        </div>
        <div class="row">
          <div class="div-checkbox-search">
            <fieldset class="fieldset">
              <legend>Где будем искать?</legend>

              <div>
                <input type="checkbox" id="search-api" name="api"
                      checked>
                <label for="api">API</label>
              </div>

              <div>
                <input type="checkbox" id="search-sdk" name="sdk">
                <label for="sdk">SDK</label>
              </div>
            </fieldset>
          </div>
          <div class="div-btn-search">
            <button id="btn-search">Найти</button>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFHdEYsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFdBQW9CLEVBQUUsWUFBcUI7SUFFL0UsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJ1RCxXQUFXLElBQUksYUFBYSxVQUFVLFFBQVEsVUFBVSxnQkFBZ0I7Ozs7NERBSXZFLFlBQVksSUFBSSxjQUFjLFVBQVUsUUFBUSxVQUFVLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBOEJqSSxDQUNGLENBQUE7QUFFSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IHRvZGF5RE1ZLCBkZWZhdWx0RGF0ZU9mZiwgZGVmYXVsdERhdGVJbiwgbGFzdERheU5leHRNb250aCB9IGZyb20gJy4vZGF0ZXMuanMnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayhjaGVja0luRGF0ZT86IHN0cmluZywgY2hlY2tPdXREYXRlPzogc3RyaW5nKSB7XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2NoZWNrSW5EYXRlIHx8IGRlZmF1bHREYXRlSW59XCIgbWluPVwiJHt0b2RheURNWX1cIiBtYXg9XCIke2xhc3REYXlOZXh0TW9udGh9XCIgbmFtZT1cImNoZWNraW5cIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtjaGVja091dERhdGUgfHwgZGVmYXVsdERhdGVPZmZ9XCIgbWluPVwiJHt0b2RheURNWX1cIiBtYXg9XCIke2xhc3REYXlOZXh0TW9udGh9XCIgbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIxMDAwMFwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2LWNoZWNrYm94LXNlYXJjaFwiPlxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwiZmllbGRzZXRcIj5cbiAgICAgICAgICAgICAgPGxlZ2VuZD7Qk9C00LUg0LHRg9C00LXQvCDQuNGB0LrQsNGC0Yw/PC9sZWdlbmQ+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzZWFyY2gtYXBpXCIgbmFtZT1cImFwaVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYXBpXCI+QVBJPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzZWFyY2gtc2RrXCIgbmFtZT1cInNka1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzZGtcIj5TREs8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRpdi1idG4tc2VhcmNoXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXNlYXJjaFwiPtCd0LDQudGC0Lg8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcblxufVxuIl19