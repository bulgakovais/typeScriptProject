// import { defaultDateOff, defaultDateIn } from '../dates.js'
// import { baseURL } from "./index.js"
// import { renderSearchResultsBlock } from "../search-results.js"
// import { Place } from '../store/domain/place.js'
// import { renderToast } from '../lib.js'
// import { FlatRentSdk, ParamsSearch, DatabaseItem } from "../flat-rent-sdk.js"
// // Создаем общий массив данных 
// let newArr: object[] = []
// export function setAllPlacesArr(arr: object[]) {
//   if (newArr.length > 0) {
//     const filteredArr: object[] = newArr.filter((f) => {
//       arr.forEach(a => {
//         f.id != a.id
//       })
//     })
//     newArr.push(...filteredArr)
//   } else {
//     newArr.push(...arr)
//   }
//   return newArr
// }
// const myFlatRentSdk = new FlatRentSdk()
// let placeArray: Place[] = []
// let placeArraySdk: DatabaseItem[] = []
// export function fetchPlaces(searchFormData) {
//   const coordinates = `59.9386,30.3141`
//   const checkIn = new Date(searchFormData.dateIn).getTime() || new Date(defaultDateIn).getTime()
//   const checkOut = new Date(searchFormData.dateOut).getTime() || new Date(defaultDateOff).getTime()
//   const myParamsSearch: ParamsSearch = {
//     city: 'Санкт-Петербург',
//     checkInDate: new Date(searchFormData.dateIn),
//     checkOutDate: new Date(searchFormData.dateOut),
//     priceLimit: searchFormData.maxPrice
//   }
//   // Checkboxes
//   const chboxApi: HTMLInputElement = document.querySelector("#search-api")
//   const chboxSdk: HTMLInputElement = document.querySelector("#search-sdk")
//   if (checkIn && checkOut && searchFormData.maxPrice) {
//     if (chboxApi.checked || chboxSdk.checked) {
//       if (chboxApi.checked) {
//         fetch(baseURL + `/places?coordinates=${coordinates}&checkInDate=${checkIn}&checkOutDate=${checkOut}&maxPrice=${searchFormData.maxPrice}`)
//           .then(response => response.json())
//           .then((data) => {
//             placeArray = []
//             data.forEach((dataItem) => {
//               placeArray.push(dataItem)
//             })
//             // Записываем данные в один общий массив
//             const allPlaceArray: object[] = setAllPlacesArr(placeArray)
//             renderSearchResultsBlock(allPlaceArray)
//             return allPlaceArray
//           })
//       }
//       // ВОПРОС
//       // Это вопрос, который я задавала в телеге:) метод search() библиотеки возвращает промис
//       // и чтобы достать данные нужен then(). Но по описанию метод должен вернуть массив 
//       // DataBaseItem[], у которого свойства then нет))
//       if (chboxSdk.checked) {
//         const result = myFlatRentSdk.search(myParamsSearch)
//         result.then((placeArraySdk) => {
//           // Записываем данные в один общий массив
//           const allPlaceArraySdk: object[] = setAllPlacesArr(placeArraySdk)
//           // Если активны оба чекбокса, не запускаем рендер, т.к. он отработает в fetch
//           // ВОПРОС: всегда ли fetch будет отрабатывать последним в данном случае?
//           if (!chboxApi.checked) {
//             renderSearchResultsBlock(allPlaceArraySdk)
//           }
//         })
//       }
//     }
//   }
//   else (renderToast(
//     {
//       text: [`Необходимо заполнить все поля`],
//       type: 'success'
//     },
//     {
//       name: 'Понятно',
//       handler: () => {
//         console.log(`Уведомление закрыто`)
//       }
//     }))
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hQbGFjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQVBJL2ZldGNoUGxhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDhEQUE4RDtBQUM5RCx1Q0FBdUM7QUFDdkMsa0VBQWtFO0FBQ2xFLG1EQUFtRDtBQUNuRCwwQ0FBMEM7QUFDMUMsZ0ZBQWdGO0FBR2hGLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFDNUIsbURBQW1EO0FBRW5ELDZCQUE2QjtBQUM3QiwyREFBMkQ7QUFDM0QsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixXQUFXO0FBQ1gsU0FBUztBQUNULGtDQUFrQztBQUNsQyxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCLE1BQU07QUFFTixrQkFBa0I7QUFDbEIsSUFBSTtBQUdKLDBDQUEwQztBQUMxQywrQkFBK0I7QUFDL0IseUNBQXlDO0FBR3pDLGdEQUFnRDtBQUVoRCwwQ0FBMEM7QUFDMUMsbUdBQW1HO0FBQ25HLHNHQUFzRztBQUV0RywyQ0FBMkM7QUFDM0MsK0JBQStCO0FBQy9CLG9EQUFvRDtBQUNwRCxzREFBc0Q7QUFDdEQsMENBQTBDO0FBQzFDLE1BQU07QUFDTixrQkFBa0I7QUFDbEIsNkVBQTZFO0FBQzdFLDZFQUE2RTtBQUc3RSwwREFBMEQ7QUFDMUQsa0RBQWtEO0FBRWxELGdDQUFnQztBQUNoQyxvSkFBb0o7QUFFcEosK0NBQStDO0FBQy9DLDhCQUE4QjtBQUU5Qiw4QkFBOEI7QUFFOUIsMkNBQTJDO0FBQzNDLDBDQUEwQztBQUMxQyxpQkFBaUI7QUFDakIsdURBQXVEO0FBQ3ZELDBFQUEwRTtBQUUxRSxzREFBc0Q7QUFDdEQsbUNBQW1DO0FBQ25DLGVBQWU7QUFDZixVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLGlHQUFpRztBQUNqRyw0RkFBNEY7QUFDNUYsMERBQTBEO0FBRTFELGdDQUFnQztBQUNoQyw4REFBOEQ7QUFDOUQsMkNBQTJDO0FBRTNDLHFEQUFxRDtBQUNyRCw4RUFBOEU7QUFFOUUsMEZBQTBGO0FBQzFGLHFGQUFxRjtBQUNyRixxQ0FBcUM7QUFDckMseURBQXlEO0FBQ3pELGNBQWM7QUFDZCxhQUFhO0FBQ2IsVUFBVTtBQUNWLFFBQVE7QUFDUixNQUFNO0FBQ04sdUJBQXVCO0FBQ3ZCLFFBQVE7QUFDUixpREFBaUQ7QUFDakQsd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVCxRQUFRO0FBQ1IseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qiw2Q0FBNkM7QUFDN0MsVUFBVTtBQUNWLFVBQVU7QUFFVixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBpbXBvcnQgeyBkZWZhdWx0RGF0ZU9mZiwgZGVmYXVsdERhdGVJbiB9IGZyb20gJy4uL2RhdGVzLmpzJ1xuLy8gaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gXCIuL2luZGV4LmpzXCJcbi8vIGltcG9ydCB7IHJlbmRlclNlYXJjaFJlc3VsdHNCbG9jayB9IGZyb20gXCIuLi9zZWFyY2gtcmVzdWx0cy5qc1wiXG4vLyBpbXBvcnQgeyBQbGFjZSB9IGZyb20gJy4uL3N0b3JlL2RvbWFpbi9wbGFjZS5qcydcbi8vIGltcG9ydCB7IHJlbmRlclRvYXN0IH0gZnJvbSAnLi4vbGliLmpzJ1xuLy8gaW1wb3J0IHsgRmxhdFJlbnRTZGssIFBhcmFtc1NlYXJjaCwgRGF0YWJhc2VJdGVtIH0gZnJvbSBcIi4uL2ZsYXQtcmVudC1zZGsuanNcIlxuXG5cbi8vIC8vINCh0L7Qt9C00LDQtdC8INC+0LHRidC40Lkg0LzQsNGB0YHQuNCyINC00LDQvdC90YvRhSBcbi8vIGxldCBuZXdBcnI6IG9iamVjdFtdID0gW11cbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRBbGxQbGFjZXNBcnIoYXJyOiBvYmplY3RbXSkge1xuXG4vLyAgIGlmIChuZXdBcnIubGVuZ3RoID4gMCkge1xuLy8gICAgIGNvbnN0IGZpbHRlcmVkQXJyOiBvYmplY3RbXSA9IG5ld0Fyci5maWx0ZXIoKGYpID0+IHtcbi8vICAgICAgIGFyci5mb3JFYWNoKGEgPT4ge1xuLy8gICAgICAgICBmLmlkICE9IGEuaWRcbi8vICAgICAgIH0pXG4vLyAgICAgfSlcbi8vICAgICBuZXdBcnIucHVzaCguLi5maWx0ZXJlZEFycilcbi8vICAgfSBlbHNlIHtcbi8vICAgICBuZXdBcnIucHVzaCguLi5hcnIpXG4vLyAgIH1cblxuLy8gICByZXR1cm4gbmV3QXJyXG4vLyB9XG5cblxuLy8gY29uc3QgbXlGbGF0UmVudFNkayA9IG5ldyBGbGF0UmVudFNkaygpXG4vLyBsZXQgcGxhY2VBcnJheTogUGxhY2VbXSA9IFtdXG4vLyBsZXQgcGxhY2VBcnJheVNkazogRGF0YWJhc2VJdGVtW10gPSBbXVxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFBsYWNlcyhzZWFyY2hGb3JtRGF0YSkge1xuXG4vLyAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYDU5LjkzODYsMzAuMzE0MWBcbi8vICAgY29uc3QgY2hlY2tJbiA9IG5ldyBEYXRlKHNlYXJjaEZvcm1EYXRhLmRhdGVJbikuZ2V0VGltZSgpIHx8IG5ldyBEYXRlKGRlZmF1bHREYXRlSW4pLmdldFRpbWUoKVxuLy8gICBjb25zdCBjaGVja091dCA9IG5ldyBEYXRlKHNlYXJjaEZvcm1EYXRhLmRhdGVPdXQpLmdldFRpbWUoKSB8fCBuZXcgRGF0ZShkZWZhdWx0RGF0ZU9mZikuZ2V0VGltZSgpXG5cbi8vICAgY29uc3QgbXlQYXJhbXNTZWFyY2g6IFBhcmFtc1NlYXJjaCA9IHtcbi8vICAgICBjaXR5OiAn0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMnLFxuLy8gICAgIGNoZWNrSW5EYXRlOiBuZXcgRGF0ZShzZWFyY2hGb3JtRGF0YS5kYXRlSW4pLFxuLy8gICAgIGNoZWNrT3V0RGF0ZTogbmV3IERhdGUoc2VhcmNoRm9ybURhdGEuZGF0ZU91dCksXG4vLyAgICAgcHJpY2VMaW1pdDogc2VhcmNoRm9ybURhdGEubWF4UHJpY2Vcbi8vICAgfVxuLy8gICAvLyBDaGVja2JveGVzXG4vLyAgIGNvbnN0IGNoYm94QXBpOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYXBpXCIpXG4vLyAgIGNvbnN0IGNoYm94U2RrOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtc2RrXCIpXG5cblxuLy8gICBpZiAoY2hlY2tJbiAmJiBjaGVja091dCAmJiBzZWFyY2hGb3JtRGF0YS5tYXhQcmljZSkge1xuLy8gICAgIGlmIChjaGJveEFwaS5jaGVja2VkIHx8IGNoYm94U2RrLmNoZWNrZWQpIHtcblxuLy8gICAgICAgaWYgKGNoYm94QXBpLmNoZWNrZWQpIHtcbi8vICAgICAgICAgZmV0Y2goYmFzZVVSTCArIGAvcGxhY2VzP2Nvb3JkaW5hdGVzPSR7Y29vcmRpbmF0ZXN9JmNoZWNrSW5EYXRlPSR7Y2hlY2tJbn0mY2hlY2tPdXREYXRlPSR7Y2hlY2tPdXR9Jm1heFByaWNlPSR7c2VhcmNoRm9ybURhdGEubWF4UHJpY2V9YClcblxuLy8gICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuXG4vLyAgICAgICAgICAgICBwbGFjZUFycmF5ID0gW11cblxuLy8gICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuLy8gICAgICAgICAgICAgICBwbGFjZUFycmF5LnB1c2goZGF0YUl0ZW0pXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgLy8g0JfQsNC/0LjRgdGL0LLQsNC10Lwg0LTQsNC90L3Ri9C1INCyINC+0LTQuNC9INC+0LHRidC40Lkg0LzQsNGB0YHQuNCyXG4vLyAgICAgICAgICAgICBjb25zdCBhbGxQbGFjZUFycmF5OiBvYmplY3RbXSA9IHNldEFsbFBsYWNlc0FycihwbGFjZUFycmF5KVxuXG4vLyAgICAgICAgICAgICByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2soYWxsUGxhY2VBcnJheSlcbi8vICAgICAgICAgICAgIHJldHVybiBhbGxQbGFjZUFycmF5XG4vLyAgICAgICAgICAgfSlcbi8vICAgICAgIH1cbi8vICAgICAgIC8vINCS0J7Qn9Cg0J7QoVxuLy8gICAgICAgLy8g0K3RgtC+INCy0L7Qv9GA0L7RgSwg0LrQvtGC0L7RgNGL0Lkg0Y8g0LfQsNC00LDQstCw0LvQsCDQsiDRgtC10LvQtdCz0LU6KSDQvNC10YLQvtC0IHNlYXJjaCgpINCx0LjQsdC70LjQvtGC0LXQutC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0YDQvtC80LjRgVxuLy8gICAgICAgLy8g0Lgg0YfRgtC+0LHRiyDQtNC+0YHRgtCw0YLRjCDQtNCw0L3QvdGL0LUg0L3Rg9C20LXQvSB0aGVuKCkuINCd0L4g0L/QviDQvtC/0LjRgdCw0L3QuNGOINC80LXRgtC+0LQg0LTQvtC70LbQtdC9INCy0LXRgNC90YPRgtGMINC80LDRgdGB0LjQsiBcbi8vICAgICAgIC8vIERhdGFCYXNlSXRlbVtdLCDRgyDQutC+0YLQvtGA0L7Qs9C+INGB0LLQvtC50YHRgtCy0LAgdGhlbiDQvdC10YIpKVxuXG4vLyAgICAgICBpZiAoY2hib3hTZGsuY2hlY2tlZCkge1xuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBteUZsYXRSZW50U2RrLnNlYXJjaChteVBhcmFtc1NlYXJjaClcbi8vICAgICAgICAgcmVzdWx0LnRoZW4oKHBsYWNlQXJyYXlTZGspID0+IHtcblxuLy8gICAgICAgICAgIC8vINCX0LDQv9C40YHRi9Cy0LDQtdC8INC00LDQvdC90YvQtSDQsiDQvtC00LjQvSDQvtCx0YnQuNC5INC80LDRgdGB0LjQslxuLy8gICAgICAgICAgIGNvbnN0IGFsbFBsYWNlQXJyYXlTZGs6IG9iamVjdFtdID0gc2V0QWxsUGxhY2VzQXJyKHBsYWNlQXJyYXlTZGspXG5cbi8vICAgICAgICAgICAvLyDQldGB0LvQuCDQsNC60YLQuNCy0L3RiyDQvtCx0LAg0YfQtdC60LHQvtC60YHQsCwg0L3QtSDQt9Cw0L/Rg9GB0LrQsNC10Lwg0YDQtdC90LTQtdGALCDRgi7Qui4g0L7QvSDQvtGC0YDQsNCx0L7RgtCw0LXRgiDQsiBmZXRjaFxuLy8gICAgICAgICAgIC8vINCS0J7Qn9Cg0J7QoTog0LLRgdC10LPQtNCwINC70LggZmV0Y2gg0LHRg9C00LXRgiDQvtGC0YDQsNCx0LDRgtGL0LLQsNGC0Ywg0L/QvtGB0LvQtdC00L3QuNC8INCyINC00LDQvdC90L7QvCDRgdC70YPRh9Cw0LU/XG4vLyAgICAgICAgICAgaWYgKCFjaGJveEFwaS5jaGVja2VkKSB7XG4vLyAgICAgICAgICAgICByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2soYWxsUGxhY2VBcnJheVNkaylcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGVsc2UgKHJlbmRlclRvYXN0KFxuLy8gICAgIHtcbi8vICAgICAgIHRleHQ6IFtg0J3QtdC+0LHRhdC+0LTQuNC80L4g0LfQsNC/0L7Qu9C90LjRgtGMINCy0YHQtSDQv9C+0LvRj2BdLFxuLy8gICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICBuYW1lOiAn0J/QvtC90Y/RgtC90L4nLFxuLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhg0KPQstC10LTQvtC80LvQtdC90LjQtSDQt9Cw0LrRgNGL0YLQvmApXG4vLyAgICAgICB9XG4vLyAgICAgfSkpXG5cbi8vIH1cblxuXG5cblxuXG4iXX0=