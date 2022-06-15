import { renderBlock } from './lib.js';
export function renderUserBlock(user, favoritesCaption) {
    console.log(user);
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${user.userAvatarURL}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${user.userName}</p>
          <p class="fav">
            <i class="heart-icon${favoritesCaption > 0 ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFJLEVBQUUsZ0JBQWlCO0lBRXJELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFakIsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLElBQUksQ0FBQyxhQUFhOzs0QkFFdkIsSUFBSSxDQUFDLFFBQVE7O2tDQUVQLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsZ0JBQWdCOzs7O0tBSTNGLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrKHVzZXIsIGZhdm9yaXRlc0NhcHRpb24/KSB7XG5cbiAgY29uc29sZS5sb2codXNlcilcblxuICByZW5kZXJCbG9jayhcbiAgICAndXNlci1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiJHt1c2VyLnVzZXJBdmF0YXJVUkx9XCIgYWx0PVwiV2FkZSBXYXJyZW5cIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke3VzZXIudXNlck5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWljb24ke2Zhdm9yaXRlc0NhcHRpb24gPiAwID8gJyBhY3RpdmUnIDogJyd9XCI+PC9pPiR7ZmF2b3JpdGVzQ2FwdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cbiJdfQ==