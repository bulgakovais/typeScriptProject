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
// Получить из LocalStorage длинну массива Избранного
export const getFavoritesCaption = () => {
    const favoritesCaption = (JSON.parse(localStorage.getItem('favoriteItems'))).length;
    console.log(favoritesCaption);
    if (typeof favoritesCaption === 'number' && !isNaN(favoritesCaption)) {
        return favoritesCaption;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVycy91c2VyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLElBQUk7SUFHUixZQUFZLFFBQWdCLEVBQUUsYUFBcUI7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBRUQsTUFBTSxVQUFVLFdBQVc7SUFDekIsTUFBTSxJQUFJLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sTUFBTSxDQUFBO0tBQ2Q7SUFDRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksZUFBZSxJQUFJLElBQUksRUFBRTtZQUNqRCxPQUFPLElBQUksQ0FBQTtTQUNaO0tBQ0Y7O1FBQ0ksT0FBTyxJQUFJLENBQUE7QUFDbEIsQ0FBQztBQUVELHFEQUFxRDtBQUNyRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxHQUFHLEVBQUU7SUFDdEMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBO0lBQ25GLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUM3QixJQUFJLE9BQU8sZ0JBQWdCLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7UUFDcEUsT0FBTyxnQkFBZ0IsQ0FBQTtLQUN4QjtBQUVILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBVc2VyIHtcbiAgdXNlck5hbWU6IHN0cmluZztcbiAgdXNlckF2YXRhclVSTDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcih1c2VyTmFtZTogc3RyaW5nLCB1c2VyQXZhdGFyVVJMOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgdGhpcy51c2VyQXZhdGFyVVJMID0gdXNlckF2YXRhclVSTDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckRhdGEoKSB7XG4gIGNvbnN0IHVzZXI6IHVua25vd24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gIGlmICh1c2VyID09IG51bGwpIHtcbiAgICBjb25zdCBub1VzZXIgPSBuZXcgVXNlcihcItCf0L7QutCwINC/0YPRgdGC0L5cIiwgXCIvaW1nL2ltZzEuanBlZ1wiKVxuICAgIHJldHVybiBub1VzZXJcbiAgfVxuICBpZiAodHlwZW9mIHVzZXIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKCd1c2VyTmFtZScgaW4gdXNlciAmJiAndXNlckF2YXRhclVSTCcgaW4gdXNlcikge1xuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9XG4gIH1cbiAgZWxzZSByZXR1cm4gdXNlclxufVxuXG4vLyDQn9C+0LvRg9GH0LjRgtGMINC40LcgTG9jYWxTdG9yYWdlINC00LvQuNC90L3RgyDQvNCw0YHRgdC40LLQsCDQmNC30LHRgNCw0L3QvdC+0LPQvlxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlc0NhcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVJdGVtcycpKSkubGVuZ3RoXG4gIGNvbnNvbGUubG9nKGZhdm9yaXRlc0NhcHRpb24pXG4gIGlmICh0eXBlb2YgZmF2b3JpdGVzQ2FwdGlvbiA9PT0gJ251bWJlcicgJiYgIWlzTmFOKGZhdm9yaXRlc0NhcHRpb24pKSB7XG4gICAgcmV0dXJuIGZhdm9yaXRlc0NhcHRpb25cbiAgfVxuXG59XG5cbiJdfQ==