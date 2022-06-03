export function favoritesHandlerClick(event) {
    let targetHeart = event.target;
    if (targetHeart.tagName != 'DIV')
        return;
    highlight(targetHeart);
}
// favoritePl - объект, та же загвоздка, что и в arrayComparison.ts
// А для осуществления логики удаления/добавления в LStorage нужны 
// методы массива..
// let favoritePl = getFavoritePlacesFromLocalStorage()
function highlight(listItem) {
    if (listItem.classList.contains('active')) {
        listItem.classList.remove('active');
        // favoritePl.forEach((favoritePlace) => {
        //   if (favoritePlace.id === listItem.id)
        //     localStorage.removeItem(`${favoritePlace}`)
    }
    else {
        listItem.classList.add('active');
        // const data = { id: listItem.id, name: listItem.name, image: listItem.image }
        // favoritePl.push(data)
        // const allData = JSON.stringify(favoritePl)
        // localStorage.setItem('favoriteItems', allData)
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzSGFuZGxlckNsaWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hlbHBlcnMvZmF2b3JpdGVzSGFuZGxlckNsaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxLQUFLO0lBQ3pDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDOUIsSUFBSSxXQUFXLENBQUMsT0FBTyxJQUFJLEtBQUs7UUFBRSxPQUFNO0lBQ3hDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUN4QixDQUFDO0FBRUQsbUVBQW1FO0FBQ25FLG1FQUFtRTtBQUNuRSxtQkFBbUI7QUFFbkIsdURBQXVEO0FBRXZELFNBQVMsU0FBUyxDQUFDLFFBQVE7SUFDekIsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQywwQ0FBMEM7UUFDMUMsMENBQTBDO1FBQzFDLGtEQUFrRDtLQUNuRDtTQUNJO1FBQ0gsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDaEMsK0VBQStFO1FBQy9FLHdCQUF3QjtRQUN4Qiw2Q0FBNkM7UUFDN0MsaURBQWlEO0tBQ2xEO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhdm9yaXRlUGxhY2VzLCBnZXRGYXZvcml0ZVBsYWNlc0Zyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9nZXRGYXZvcml0ZVBsYWNlc0Zyb21Mb2NhbFN0b3JhZ2VcIlxuXG5leHBvcnQgZnVuY3Rpb24gZmF2b3JpdGVzSGFuZGxlckNsaWNrKGV2ZW50KSB7XG4gIGxldCB0YXJnZXRIZWFydCA9IGV2ZW50LnRhcmdldFxuICBpZiAodGFyZ2V0SGVhcnQudGFnTmFtZSAhPSAnRElWJykgcmV0dXJuXG4gIGhpZ2hsaWdodCh0YXJnZXRIZWFydClcbn1cblxuLy8gZmF2b3JpdGVQbCAtINC+0LHRitC10LrRgiwg0YLQsCDQttC1INC30LDQs9Cy0L7Qt9C00LrQsCwg0YfRgtC+INC4INCyIGFycmF5Q29tcGFyaXNvbi50c1xuLy8g0JAg0LTQu9GPINC+0YHRg9GJ0LXRgdGC0LLQu9C10L3QuNGPINC70L7Qs9C40LrQuCDRg9C00LDQu9C10L3QuNGPL9C00L7QsdCw0LLQu9C10L3QuNGPINCyIExTdG9yYWdlINC90YPQttC90YsgXG4vLyDQvNC10YLQvtC00Ysg0LzQsNGB0YHQuNCy0LAuLlxuXG4vLyBsZXQgZmF2b3JpdGVQbCA9IGdldEZhdm9yaXRlUGxhY2VzRnJvbUxvY2FsU3RvcmFnZSgpXG5cbmZ1bmN0aW9uIGhpZ2hsaWdodChsaXN0SXRlbSkge1xuICBpZiAobGlzdEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgLy8gZmF2b3JpdGVQbC5mb3JFYWNoKChmYXZvcml0ZVBsYWNlKSA9PiB7XG4gICAgLy8gICBpZiAoZmF2b3JpdGVQbGFjZS5pZCA9PT0gbGlzdEl0ZW0uaWQpXG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke2Zhdm9yaXRlUGxhY2V9YClcbiAgfVxuICBlbHNlIHtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIC8vIGNvbnN0IGRhdGEgPSB7IGlkOiBsaXN0SXRlbS5pZCwgbmFtZTogbGlzdEl0ZW0ubmFtZSwgaW1hZ2U6IGxpc3RJdGVtLmltYWdlIH1cbiAgICAvLyBmYXZvcml0ZVBsLnB1c2goZGF0YSlcbiAgICAvLyBjb25zdCBhbGxEYXRhID0gSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVQbClcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVJdGVtcycsIGFsbERhdGEpXG4gIH1cbn1cbiJdfQ==