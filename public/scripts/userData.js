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
    // Так корректно приводить к объекту тип unknown?)Или есть другой способ?
    else
        return Object(user);
}
export const getFavoritesAmount = () => {
    const favoritesAmount = Number(localStorage.getItem('favoritAmount'));
    console.log(favoritesAmount);
    return favoritesAmount;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXNlckRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxJQUFJO0lBR1IsWUFBWSxRQUFnQixFQUFFLGFBQXFCO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQUVELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE1BQU0sSUFBSSxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQzlELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtRQUN2RCxPQUFPLE1BQU0sQ0FBQTtLQUNkO0lBQ0QseUVBQXlFOztRQUNwRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMxQixDQUFDO0FBR0QsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFO0lBQ3JDLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUM1QixPQUFPLGVBQWUsQ0FBQTtBQUN4QixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFVzZXIge1xuICB1c2VyTmFtZTogc3RyaW5nO1xuICB1c2VyQXZhdGFyVVJMOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHVzZXJOYW1lOiBzdHJpbmcsIHVzZXJBdmF0YXJVUkw6IHN0cmluZykge1xuICAgIHRoaXMudXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgICB0aGlzLnVzZXJBdmF0YXJVUkwgPSB1c2VyQXZhdGFyVVJMO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRGF0YSgpIHtcbiAgY29uc3QgdXNlcjogdW5rbm93biA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcbiAgaWYgKHVzZXIgPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vVXNlciA9IG5ldyBVc2VyKFwi0J/QvtC60LAg0L/Rg9GB0YLQvlwiLCBcIi9pbWcvaW1nMS5qcGVnXCIpXG4gICAgcmV0dXJuIG5vVXNlclxuICB9XG4gIC8vINCi0LDQuiDQutC+0YDRgNC10LrRgtC90L4g0L/RgNC40LLQvtC00LjRgtGMINC6INC+0LHRitC10LrRgtGDINGC0LjQvyB1bmtub3duPynQmNC70Lgg0LXRgdGC0Ywg0LTRgNGD0LPQvtC5INGB0L/QvtGB0L7QsT9cbiAgZWxzZSByZXR1cm4gT2JqZWN0KHVzZXIpXG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEZhdm9yaXRlc0Ftb3VudCA9ICgpID0+IHtcbiAgY29uc3QgZmF2b3JpdGVzQW1vdW50ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0QW1vdW50JykpXG4gIGNvbnNvbGUubG9nKGZhdm9yaXRlc0Ftb3VudClcbiAgcmV0dXJuIGZhdm9yaXRlc0Ftb3VudFxufVxuIl19