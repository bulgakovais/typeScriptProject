import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
// import { renderToast } from './lib.js'
import { getUserData, getFavoritesAmount } from './helpers/userData.js';
import { searchHandler } from './helpers/search-handler.js';
const favoritesCaption = getFavoritesAmount();
const user = getUserData();
window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock(user, favoritesCaption);
    renderSearchFormBlock();
    renderSearchStubBlock();
    // renderToast(
    //   {
    //     text: 'Это пример уведомления. Используйте его при необходимости',
    //     type: 'success'
    //   },
    //   {
    //     name: 'Понял',
    //     handler: () => {
    //       console.log('Уведомление закрыто')
    //     }
    //   })
    const btnSearch = document.getElementById("btn-search");
    btnSearch.addEventListener("click", (event) => {
        event.preventDefault();
        searchHandler();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUMzQyx5Q0FBeUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQTtBQUUzRCxNQUFNLGdCQUFnQixHQUFHLGtCQUFrQixFQUFFLENBQUE7QUFDN0MsTUFBTSxJQUFJLEdBQUcsV0FBVyxFQUFFLENBQUE7QUFHMUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUUvQyxlQUFlLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFDdkMscUJBQXFCLEVBQUUsQ0FBQTtJQUN2QixxQkFBcUIsRUFBRSxDQUFBO0lBQ3ZCLGVBQWU7SUFDZixNQUFNO0lBQ04seUVBQXlFO0lBQ3pFLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsTUFBTTtJQUNOLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsMkNBQTJDO0lBQzNDLFFBQVE7SUFDUixPQUFPO0lBRVAsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUV2RCxTQUFTLENBQUMsZ0JBQWdCLENBQVUsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDMUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3RCLGFBQWEsRUFBRSxDQUFBO0lBRWpCLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJTZWFyY2hGb3JtQmxvY2sgfSBmcm9tICcuL3NlYXJjaC1mb3JtLmpzJ1xuaW1wb3J0IHsgcmVuZGVyU2VhcmNoU3R1YkJsb2NrIH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy5qcydcbmltcG9ydCB7IHJlbmRlclVzZXJCbG9jayB9IGZyb20gJy4vdXNlci5qcydcbi8vIGltcG9ydCB7IHJlbmRlclRvYXN0IH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQgeyBnZXRVc2VyRGF0YSwgZ2V0RmF2b3JpdGVzQW1vdW50IH0gZnJvbSAnLi9oZWxwZXJzL3VzZXJEYXRhLmpzJ1xuaW1wb3J0IHsgc2VhcmNoSGFuZGxlciB9IGZyb20gJy4vaGVscGVycy9zZWFyY2gtaGFuZGxlci5qcydcblxuY29uc3QgZmF2b3JpdGVzQ2FwdGlvbiA9IGdldEZhdm9yaXRlc0Ftb3VudCgpXG5jb25zdCB1c2VyID0gZ2V0VXNlckRhdGEoKVxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gIHJlbmRlclVzZXJCbG9jayh1c2VyLCBmYXZvcml0ZXNDYXB0aW9uKVxuICByZW5kZXJTZWFyY2hGb3JtQmxvY2soKVxuICByZW5kZXJTZWFyY2hTdHViQmxvY2soKVxuICAvLyByZW5kZXJUb2FzdChcbiAgLy8gICB7XG4gIC8vICAgICB0ZXh0OiAn0K3RgtC+INC/0YDQuNC80LXRgCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPLiDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC10LPQviDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LgnLFxuICAvLyAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBuYW1lOiAn0J/QvtC90Y/QuycsXG4gIC8vICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCfQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC30LDQutGA0YvRgtC+JylcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuXG4gIGNvbnN0IGJ0blNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXNlYXJjaFwiKVxuXG4gIGJ0blNlYXJjaC5hZGRFdmVudExpc3RlbmVyPFwiY2xpY2tcIj4oXCJjbGlja1wiLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBzZWFyY2hIYW5kbGVyKClcblxuICB9KVxuXG59KVxuXG4iXX0=