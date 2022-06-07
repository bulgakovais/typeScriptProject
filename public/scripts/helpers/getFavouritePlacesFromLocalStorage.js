export function getFavouritePlacesFromLocalStorage() {
    let favouritePlaces = JSON.parse(localStorage.getItem('favouriteItems'));
    if (favouritePlaces == null) {
        console.log(`dataNull: ${favouritePlaces}`);
        return {};
    }
    // if (typeof favouritePlaces === 'object') {
    //   console.log(`dataObj: ${favouritePlaces}`)
    //   return favouritePlaces
    // }
    else
        return favouritePlaces;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RmF2b3VyaXRlUGxhY2VzRnJvbUxvY2FsU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2dldEZhdm91cml0ZVBsYWNlc0Zyb21Mb2NhbFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0EsTUFBTSxVQUFVLGtDQUFrQztJQUVoRCxJQUFJLGVBQWUsR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0lBRWpGLElBQUksZUFBZSxJQUFJLElBQUksRUFBRTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsZUFBZSxFQUFFLENBQUMsQ0FBQTtRQUMzQyxPQUFPLEVBQUUsQ0FBQTtLQUNWO0lBQ0QsNkNBQTZDO0lBQzdDLCtDQUErQztJQUMvQywyQkFBMkI7SUFDM0IsSUFBSTs7UUFDQyxPQUFPLGVBQWUsQ0FBQTtBQUM3QixDQUFDO0FBRUQsNERBQTREO0FBQzVELHVFQUF1RTtBQUN2RSw0REFBNEQ7QUFFNUQsNENBQTRDO0FBRTVDLHdEQUF3RDtBQUV4RCw4RUFBOEU7QUFFOUUsd0JBQXdCO0FBQ3hCLHVDQUF1QztBQUN2QyxnQkFBZ0I7QUFDaEIsTUFBTTtBQUNOLG9DQUFvQztBQUNwQyxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQyxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuXG5leHBvcnQgaW50ZXJmYWNlIGZhdm91cml0ZVBsYWNlcyBleHRlbmRzIFBhcnRpYWw8UGxhY2U+IHtcbiAgaWQ/OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmF2b3VyaXRlUGxhY2VzRnJvbUxvY2FsU3RvcmFnZSgpIHtcblxuICBsZXQgZmF2b3VyaXRlUGxhY2VzOiB1bmtub3duID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3VyaXRlSXRlbXMnKSlcblxuICBpZiAoZmF2b3VyaXRlUGxhY2VzID09IG51bGwpIHtcbiAgICBjb25zb2xlLmxvZyhgZGF0YU51bGw6ICR7ZmF2b3VyaXRlUGxhY2VzfWApXG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgLy8gaWYgKHR5cGVvZiBmYXZvdXJpdGVQbGFjZXMgPT09ICdvYmplY3QnKSB7XG4gIC8vICAgY29uc29sZS5sb2coYGRhdGFPYmo6ICR7ZmF2b3VyaXRlUGxhY2VzfWApXG4gIC8vICAgcmV0dXJuIGZhdm91cml0ZVBsYWNlc1xuICAvLyB9XG4gIGVsc2UgcmV0dXJuIGZhdm91cml0ZVBsYWNlc1xufVxuXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbi8vINCt0YLQvtGCINCy0LDRgNC40LDQvdGCINGE0YPQvdC60YbQuNC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIGxldCBmYXZvcml0ZVBsYWNlczogZmF2b3JpdGVQbGFjZXNbXVxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIGxldCBmYXZvcml0ZVBsYWNlczogZmF2b3JpdGVQbGFjZXNbXSA9IFtdXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZVBsYWNlc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG5cbi8vICAgY29uc3QgZGF0YTogdW5rbm93bltdID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVJdGVtcycpKVxuXG4vLyAgIGlmIChkYXRhID09IG51bGwpIHtcbi8vICAgICBjb25zb2xlLmxvZyhgZGF0YU51bGw6ICR7ZGF0YX1gKVxuLy8gICAgIHJldHVybiB7fVxuLy8gICB9XG4vLyAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbi8vICAgICBjb25zb2xlLmxvZyhgZGF0YU9iajogJHtkYXRhfWApXG4vLyAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyAgICAgICBmYXZvcml0ZVBsYWNlcy5wdXNoKGl0ZW0pXG4vLyAgICAgfSlcbi8vICAgICByZXR1cm4gZmF2b3JpdGVQbGFjZXNcbi8vICAgfVxuXG5cblxuIl19