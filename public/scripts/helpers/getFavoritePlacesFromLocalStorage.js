// import { Place } from "./interfaces";
// interface favoritePlaces extends Partial<Place> {
//   id?: number;
//   name?: string;
//   image?: string;
// }
export function getFavoritePlacesFromLocalStorage() {
    let favoritePlaces = JSON.parse(localStorage.getItem('favoriteItems'));
    if (favoritePlaces == null) {
        return [];
    }
    if (typeof favoritePlaces === 'object') {
        return favoritePlaces;
    }
    else
        return favoritePlaces;
}
export const favoritePlaces = getFavoritePlacesFromLocalStorage();
// _________________________________________________________
// Этот вариант функции возвращает let favoritePlaces: favoritePlaces[]
// _________________________________________________________
// let favoritePlaces: favoritePlaces[] = []
// export function getFavoritePlacesFromLocalStorage() {
//   const data: unknown[] = JSON.parse(localStorage.getItem('favoriteItems'))
//   if (data == null) {
//     console.log(`dataNull: ${data}`)
//     return {}
//   }
//   if (typeof data === 'object') {
//     console.log(`dataObj: ${data}`)
//     data.forEach((item) => {
//       favoritePlaces.push(item)
//     })
//     return favoritePlaces
//   }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RmF2b3JpdGVQbGFjZXNGcm9tTG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hlbHBlcnMvZ2V0RmF2b3JpdGVQbGFjZXNGcm9tTG9jYWxTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3QztBQUd4QyxvREFBb0Q7QUFDcEQsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixvQkFBb0I7QUFDcEIsSUFBSTtBQUVKLE1BQU0sVUFBVSxpQ0FBaUM7SUFFL0MsSUFBSSxjQUFjLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFFL0UsSUFBSSxjQUFjLElBQUksSUFBSSxFQUFFO1FBQzFCLE9BQU8sRUFBRSxDQUFBO0tBQ1Y7SUFDRCxJQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsRUFBRTtRQUN0QyxPQUFPLGNBQWMsQ0FBQTtLQUN0Qjs7UUFDSSxPQUFPLGNBQWMsQ0FBQTtBQUM1QixDQUFDO0FBQ0QsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLGlDQUFpQyxFQUFFLENBQUE7QUFDakUsNERBQTREO0FBQzVELHVFQUF1RTtBQUN2RSw0REFBNEQ7QUFFNUQsNENBQTRDO0FBRTVDLHdEQUF3RDtBQUV4RCw4RUFBOEU7QUFFOUUsd0JBQXdCO0FBQ3hCLHVDQUF1QztBQUN2QyxnQkFBZ0I7QUFDaEIsTUFBTTtBQUNOLG9DQUFvQztBQUNwQyxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQyxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuXG4vLyBpbnRlcmZhY2UgZmF2b3JpdGVQbGFjZXMgZXh0ZW5kcyBQYXJ0aWFsPFBsYWNlPiB7XG4vLyAgIGlkPzogbnVtYmVyO1xuLy8gICBuYW1lPzogc3RyaW5nO1xuLy8gICBpbWFnZT86IHN0cmluZztcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhdm9yaXRlUGxhY2VzRnJvbUxvY2FsU3RvcmFnZSgpIHtcblxuICBsZXQgZmF2b3JpdGVQbGFjZXM6IHVua25vd24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZUl0ZW1zJykpXG5cbiAgaWYgKGZhdm9yaXRlUGxhY2VzID09IG51bGwpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBpZiAodHlwZW9mIGZhdm9yaXRlUGxhY2VzID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYXZvcml0ZVBsYWNlc1xuICB9XG4gIGVsc2UgcmV0dXJuIGZhdm9yaXRlUGxhY2VzXG59XG5leHBvcnQgY29uc3QgZmF2b3JpdGVQbGFjZXMgPSBnZXRGYXZvcml0ZVBsYWNlc0Zyb21Mb2NhbFN0b3JhZ2UoKVxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4vLyDQrdGC0L7RgiDQstCw0YDQuNCw0L3RgiDRhNGD0L3QutGG0LjQuCDQstC+0LfQstGA0LDRidCw0LXRgiBsZXQgZmF2b3JpdGVQbGFjZXM6IGZhdm9yaXRlUGxhY2VzW11cbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBsZXQgZmF2b3JpdGVQbGFjZXM6IGZhdm9yaXRlUGxhY2VzW10gPSBbXVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0RmF2b3JpdGVQbGFjZXNGcm9tTG9jYWxTdG9yYWdlKCkge1xuXG4vLyAgIGNvbnN0IGRhdGE6IHVua25vd25bXSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlSXRlbXMnKSlcblxuLy8gICBpZiAoZGF0YSA9PSBudWxsKSB7XG4vLyAgICAgY29uc29sZS5sb2coYGRhdGFOdWxsOiAke2RhdGF9YClcbi8vICAgICByZXR1cm4ge31cbi8vICAgfVxuLy8gICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4vLyAgICAgY29uc29sZS5sb2coYGRhdGFPYmo6ICR7ZGF0YX1gKVxuLy8gICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gICAgICAgZmF2b3JpdGVQbGFjZXMucHVzaChpdGVtKVxuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGZhdm9yaXRlUGxhY2VzXG4vLyAgIH1cblxuXG5cbiJdfQ==