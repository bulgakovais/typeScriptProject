export function getFavoritePlacesFromLocalStorage() {
    let favoritePlaces = JSON.parse(localStorage.getItem('favoriteItems'));
    if (favoritePlaces == null) {
        console.log(`dataNull: ${favoritePlaces}`);
        return [];
    }
    if (typeof favoritePlaces === 'object') {
        console.log(`dataObj: ${favoritePlaces}`);
        return favoritePlaces;
    }
    else
        return favoritePlaces;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RmF2b3JpdGVQbGFjZXNGcm9tTG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hlbHBlcnMvZ2V0RmF2b3JpdGVQbGFjZXNGcm9tTG9jYWxTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE1BQU0sVUFBVSxpQ0FBaUM7SUFFL0MsSUFBSSxjQUFjLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFFL0UsSUFBSSxjQUFjLElBQUksSUFBSSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxjQUFjLEVBQUUsQ0FBQyxDQUFBO1FBQzFDLE9BQU8sRUFBRSxDQUFBO0tBQ1Y7SUFDRCxJQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsRUFBRTtRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksY0FBYyxFQUFFLENBQUMsQ0FBQTtRQUN6QyxPQUFPLGNBQWMsQ0FBQTtLQUN0Qjs7UUFDSSxPQUFPLGNBQWMsQ0FBQTtBQUM1QixDQUFDO0FBQ0QsNERBQTREO0FBQzVELHVFQUF1RTtBQUN2RSw0REFBNEQ7QUFFNUQsNENBQTRDO0FBRTVDLHdEQUF3RDtBQUV4RCw4RUFBOEU7QUFFOUUsd0JBQXdCO0FBQ3hCLHVDQUF1QztBQUN2QyxnQkFBZ0I7QUFDaEIsTUFBTTtBQUNOLG9DQUFvQztBQUNwQyxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQyxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuXG5leHBvcnQgaW50ZXJmYWNlIGZhdm9yaXRlUGxhY2VzIGV4dGVuZHMgUGFydGlhbDxQbGFjZT4ge1xuICBpZD86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZVBsYWNlc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG5cbiAgbGV0IGZhdm9yaXRlUGxhY2VzOiB1bmtub3duID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVJdGVtcycpKVxuXG4gIGlmIChmYXZvcml0ZVBsYWNlcyA9PSBudWxsKSB7XG4gICAgY29uc29sZS5sb2coYGRhdGFOdWxsOiAke2Zhdm9yaXRlUGxhY2VzfWApXG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgaWYgKHR5cGVvZiBmYXZvcml0ZVBsYWNlcyA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zb2xlLmxvZyhgZGF0YU9iajogJHtmYXZvcml0ZVBsYWNlc31gKVxuICAgIHJldHVybiBmYXZvcml0ZVBsYWNlc1xuICB9XG4gIGVsc2UgcmV0dXJuIGZhdm9yaXRlUGxhY2VzXG59XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbi8vINCt0YLQvtGCINCy0LDRgNC40LDQvdGCINGE0YPQvdC60YbQuNC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIGxldCBmYXZvcml0ZVBsYWNlczogZmF2b3JpdGVQbGFjZXNbXVxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIGxldCBmYXZvcml0ZVBsYWNlczogZmF2b3JpdGVQbGFjZXNbXSA9IFtdXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZVBsYWNlc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG5cbi8vICAgY29uc3QgZGF0YTogdW5rbm93bltdID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVJdGVtcycpKVxuXG4vLyAgIGlmIChkYXRhID09IG51bGwpIHtcbi8vICAgICBjb25zb2xlLmxvZyhgZGF0YU51bGw6ICR7ZGF0YX1gKVxuLy8gICAgIHJldHVybiB7fVxuLy8gICB9XG4vLyAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbi8vICAgICBjb25zb2xlLmxvZyhgZGF0YU9iajogJHtkYXRhfWApXG4vLyAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyAgICAgICBmYXZvcml0ZVBsYWNlcy5wdXNoKGl0ZW0pXG4vLyAgICAgfSlcbi8vICAgICByZXR1cm4gZmF2b3JpdGVQbGFjZXNcbi8vICAgfVxuXG5cblxuIl19