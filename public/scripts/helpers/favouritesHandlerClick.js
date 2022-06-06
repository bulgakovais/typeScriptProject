export function favouritesHandlerClick(event) {
    let targetHeart = event.target;
    if (targetHeart.tagName != 'DIV')
        return;
    toggleFavouriteItem(targetHeart);
}
function toggleFavouriteItem(listItem) {
    // let favouritePlaces = getFavouritePlacesFromLocalStorage()
    if (listItem.classList.contains('active')) {
        listItem.classList.remove('active');
        // if (Array.isArray(favouritePlaces)) {
        //   const updatedFavourites: Array<{ id: number }> = favouritePlaces.filter((f) => f.id !== listItem.id)
        //   localStorage.setItem('favouriteItems', JSON.stringify(updatedFavourites))
        // }
    }
    else {
        listItem.classList.add('active');
        // const data = { id: listItem.id, name: listItem.name, image: listItem.image }
        // if (Array.isArray(favouritePlaces)) {
        //   const allData = JSON.stringify([...favouritePlaces, data])
        //   localStorage.setItem('favouriteItems', allData)
        // }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3VyaXRlc0hhbmRsZXJDbGljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2Zhdm91cml0ZXNIYW5kbGVyQ2xpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxVQUFVLHNCQUFzQixDQUFDLEtBQUs7SUFDMUMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtJQUM5QixJQUFJLFdBQVcsQ0FBQyxPQUFPLElBQUksS0FBSztRQUFFLE9BQU07SUFDeEMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDbEMsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUMsUUFBUTtJQUNuQyw2REFBNkQ7SUFDN0QsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQyx3Q0FBd0M7UUFDeEMseUdBQXlHO1FBQ3pHLDhFQUE4RTtRQUM5RSxJQUFJO0tBQ0w7U0FDSTtRQUNILFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hDLCtFQUErRTtRQUMvRSx3Q0FBd0M7UUFDeEMsK0RBQStEO1FBQy9ELG9EQUFvRDtRQUNwRCxJQUFJO0tBQ0w7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RmF2b3VyaXRlUGxhY2VzRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2dldEZhdm91cml0ZVBsYWNlc0Zyb21Mb2NhbFN0b3JhZ2VcIlxuXG5leHBvcnQgZnVuY3Rpb24gZmF2b3VyaXRlc0hhbmRsZXJDbGljayhldmVudCkge1xuICBsZXQgdGFyZ2V0SGVhcnQgPSBldmVudC50YXJnZXRcbiAgaWYgKHRhcmdldEhlYXJ0LnRhZ05hbWUgIT0gJ0RJVicpIHJldHVyblxuICB0b2dnbGVGYXZvdXJpdGVJdGVtKHRhcmdldEhlYXJ0KVxufVxuXG5mdW5jdGlvbiB0b2dnbGVGYXZvdXJpdGVJdGVtKGxpc3RJdGVtKSB7XG4gIC8vIGxldCBmYXZvdXJpdGVQbGFjZXMgPSBnZXRGYXZvdXJpdGVQbGFjZXNGcm9tTG9jYWxTdG9yYWdlKClcbiAgaWYgKGxpc3RJdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIC8vIGlmIChBcnJheS5pc0FycmF5KGZhdm91cml0ZVBsYWNlcykpIHtcbiAgICAvLyAgIGNvbnN0IHVwZGF0ZWRGYXZvdXJpdGVzOiBBcnJheTx7IGlkOiBudW1iZXIgfT4gPSBmYXZvdXJpdGVQbGFjZXMuZmlsdGVyKChmKSA9PiBmLmlkICE9PSBsaXN0SXRlbS5pZClcbiAgICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvdXJpdGVJdGVtcycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRGYXZvdXJpdGVzKSlcbiAgICAvLyB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAvLyBjb25zdCBkYXRhID0geyBpZDogbGlzdEl0ZW0uaWQsIG5hbWU6IGxpc3RJdGVtLm5hbWUsIGltYWdlOiBsaXN0SXRlbS5pbWFnZSB9XG4gICAgLy8gaWYgKEFycmF5LmlzQXJyYXkoZmF2b3VyaXRlUGxhY2VzKSkge1xuICAgIC8vICAgY29uc3QgYWxsRGF0YSA9IEpTT04uc3RyaW5naWZ5KFsuLi5mYXZvdXJpdGVQbGFjZXMsIGRhdGFdKVxuICAgIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm91cml0ZUl0ZW1zJywgYWxsRGF0YSlcbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==