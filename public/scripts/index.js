import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
// import { renderToast } from './lib.js'
import { getUserData, getFavoritesCaption } from './helpers/userData.js';
import { searchHandler } from './helpers/search-handler.js';
const favoritesCaption = getFavoritesCaption();
const user = getUserData();
window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock(user, favoritesCaption);
    renderSearchFormBlock();
    renderSearchStubBlock();
    const btnSearch = document.getElementById("btn-search");
    btnSearch.addEventListener("click", (event) => {
        event.preventDefault();
        searchHandler();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUMzQyx5Q0FBeUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQTtBQUUzRCxNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixFQUFFLENBQUE7QUFDOUMsTUFBTSxJQUFJLEdBQUcsV0FBVyxFQUFFLENBQUE7QUFHMUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUUvQyxlQUFlLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFDdkMscUJBQXFCLEVBQUUsQ0FBQTtJQUN2QixxQkFBcUIsRUFBRSxDQUFBO0lBRXZCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUE7SUFFdkQsU0FBUyxDQUFDLGdCQUFnQixDQUFVLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO1FBQzFELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUN0QixhQUFhLEVBQUUsQ0FBQTtJQUVqQixDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyU2VhcmNoRm9ybUJsb2NrIH0gZnJvbSAnLi9zZWFyY2gtZm9ybS5qcydcbmltcG9ydCB7IHJlbmRlclNlYXJjaFN0dWJCbG9jayB9IGZyb20gJy4vc2VhcmNoLXJlc3VsdHMuanMnXG5pbXBvcnQgeyByZW5kZXJVc2VyQmxvY2sgfSBmcm9tICcuL3VzZXIuanMnXG4vLyBpbXBvcnQgeyByZW5kZXJUb2FzdCB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgZ2V0VXNlckRhdGEsIGdldEZhdm9yaXRlc0NhcHRpb24gfSBmcm9tICcuL2hlbHBlcnMvdXNlckRhdGEuanMnXG5pbXBvcnQgeyBzZWFyY2hIYW5kbGVyIH0gZnJvbSAnLi9oZWxwZXJzL3NlYXJjaC1oYW5kbGVyLmpzJ1xuXG5jb25zdCBmYXZvcml0ZXNDYXB0aW9uID0gZ2V0RmF2b3JpdGVzQ2FwdGlvbigpXG5jb25zdCB1c2VyID0gZ2V0VXNlckRhdGEoKVxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gIHJlbmRlclVzZXJCbG9jayh1c2VyLCBmYXZvcml0ZXNDYXB0aW9uKVxuICByZW5kZXJTZWFyY2hGb3JtQmxvY2soKVxuICByZW5kZXJTZWFyY2hTdHViQmxvY2soKVxuXG4gIGNvbnN0IGJ0blNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXNlYXJjaFwiKVxuXG4gIGJ0blNlYXJjaC5hZGRFdmVudExpc3RlbmVyPFwiY2xpY2tcIj4oXCJjbGlja1wiLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBzZWFyY2hIYW5kbGVyKClcblxuICB9KVxuXG59KVxuXG4iXX0=