import { renderBlock } from './lib.js'
import { todayDMY, defaultDateOff, defaultDateIn, lastDayNextMonth } from './dates.js'


export function renderSearchFormBlock(checkInDate?: string, checkOutDate?: string) {

  renderBlock(
    'search-form-block',
    `
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
            <input id="max-price" type="text" value="" name="price" class="max-price" />
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
    `
  )

}


// // <div class="div-btn-search">
// <div><button id="btn-search">Найти</button></div>    </div>
// <div><button id="btn-search-sdk">Найти в базе SDK</button></div>
// <div><button id="btn-search-sdk">Искать везде</button></div>
