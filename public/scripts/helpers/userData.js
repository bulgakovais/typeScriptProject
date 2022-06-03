class User {
    constructor(userName, userAvatarURL) {
        this.userName = userName;
        this.userAvatarURL = userAvatarURL;
    }
}
export function getUserData() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user == null) {
        const noUser = new User("Пока пусто", "/img/img1.jpeg");
        return noUser;
    }
    if (typeof user === 'object') {
        if ('userName' in user && 'userAvatarURL' in user) {
            return user;
        }
    }
    else
        return user;
}
export const getFavoritesAmount = () => {
    const favoritesAmount = Number(localStorage.getItem('favoritAmount'));
    // const favoriteItems: unknown = JSON.parse(localStorage.getItem('favoriteItems'))
    // if (favoriteItems == null) {
    //   favorites.classList.remove('active')
    // }
    // if (typeof favoriteItems === 'object') {
    //   if ('id' in favoriteItems && 'name' in favoriteItems && 'image' in favoriteItems) {
    //     favorites.classList.add('active')
    //   }
    if (typeof Number(favoritesAmount) === 'number' && !isNaN(Number(favoritesAmount))) {
        console.log(favoritesAmount);
        return favoritesAmount;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVycy91c2VyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLElBQUk7SUFHUixZQUFZLFFBQWdCLEVBQUUsYUFBcUI7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBRUQsTUFBTSxVQUFVLFdBQVc7SUFDekIsTUFBTSxJQUFJLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sTUFBTSxDQUFBO0tBQ2Q7SUFDRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksZUFBZSxJQUFJLElBQUksRUFBRTtZQUNqRCxPQUFPLElBQUksQ0FBQTtTQUNaO0tBQ0Y7O1FBQ0ksT0FBTyxJQUFJLENBQUE7QUFDbEIsQ0FBQztBQUdELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtJQUVyQyxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3JFLG1GQUFtRjtJQUNuRiwrQkFBK0I7SUFDL0IseUNBQXlDO0lBQ3pDLElBQUk7SUFDSiwyQ0FBMkM7SUFDM0Msd0ZBQXdGO0lBQ3hGLHdDQUF3QztJQUN4QyxNQUFNO0lBRU4sSUFBSSxPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUU7UUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUM1QixPQUFPLGVBQWUsQ0FBQTtLQUN2QjtBQUVILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBVc2VyIHtcbiAgdXNlck5hbWU6IHN0cmluZztcbiAgdXNlckF2YXRhclVSTDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcih1c2VyTmFtZTogc3RyaW5nLCB1c2VyQXZhdGFyVVJMOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgdGhpcy51c2VyQXZhdGFyVVJMID0gdXNlckF2YXRhclVSTDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckRhdGEoKSB7XG4gIGNvbnN0IHVzZXI6IHVua25vd24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gIGlmICh1c2VyID09IG51bGwpIHtcbiAgICBjb25zdCBub1VzZXIgPSBuZXcgVXNlcihcItCf0L7QutCwINC/0YPRgdGC0L5cIiwgXCIvaW1nL2ltZzEuanBlZ1wiKVxuICAgIHJldHVybiBub1VzZXJcbiAgfVxuICBpZiAodHlwZW9mIHVzZXIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKCd1c2VyTmFtZScgaW4gdXNlciAmJiAndXNlckF2YXRhclVSTCcgaW4gdXNlcikge1xuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9XG4gIH1cbiAgZWxzZSByZXR1cm4gdXNlclxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRGYXZvcml0ZXNBbW91bnQgPSAoKSA9PiB7XG5cbiAgY29uc3QgZmF2b3JpdGVzQW1vdW50ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0QW1vdW50JykpXG4gIC8vIGNvbnN0IGZhdm9yaXRlSXRlbXM6IHVua25vd24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZUl0ZW1zJykpXG4gIC8vIGlmIChmYXZvcml0ZUl0ZW1zID09IG51bGwpIHtcbiAgLy8gICBmYXZvcml0ZXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgLy8gfVxuICAvLyBpZiAodHlwZW9mIGZhdm9yaXRlSXRlbXMgPT09ICdvYmplY3QnKSB7XG4gIC8vICAgaWYgKCdpZCcgaW4gZmF2b3JpdGVJdGVtcyAmJiAnbmFtZScgaW4gZmF2b3JpdGVJdGVtcyAmJiAnaW1hZ2UnIGluIGZhdm9yaXRlSXRlbXMpIHtcbiAgLy8gICAgIGZhdm9yaXRlcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAvLyAgIH1cblxuICBpZiAodHlwZW9mIE51bWJlcihmYXZvcml0ZXNBbW91bnQpID09PSAnbnVtYmVyJyAmJiAhaXNOYU4oTnVtYmVyKGZhdm9yaXRlc0Ftb3VudCkpKSB7XG4gICAgY29uc29sZS5sb2coZmF2b3JpdGVzQW1vdW50KVxuICAgIHJldHVybiBmYXZvcml0ZXNBbW91bnRcbiAgfVxuXG59XG5cbiJdfQ==