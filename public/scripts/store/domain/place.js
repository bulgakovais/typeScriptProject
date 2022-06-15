// export interface SearchFormData {
//   dateIn: string,
//   dateOut: string,
//   maxPrice: number
// }
export class Place {
    constructor(provider, originalId, name, description, image, remoteness, bookedDates, price) {
        this.provider = provider;
        this.originalId = originalId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.remoteness = remoteness;
        this.bookedDates = bookedDates;
        this.price = price;
    }
    get id() {
        return this.provider + '-' + this.originalId;
    }
    isProvidedBy(providerName) {
        return this.provider === providerName;
    }
    getName(nameFromProvider) {
        return this.name = nameFromProvider;
    }
}
// export interface Place {
//   id: number,
//   name: string,
//   description: string,
//   image: string,
//   remoteness: number,
//   bookedDates: number[],
//   price: number
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3RvcmUvZG9tYWluL3BsYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLG9DQUFvQztBQUNwQyxvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixJQUFJO0FBRUosTUFBTSxPQUFPLEtBQUs7SUFDaEIsWUFDbUIsUUFBZ0IsRUFDakIsVUFBa0IsRUFDM0IsSUFBWSxFQUNILFdBQW1CLEVBQ25CLEtBQWEsRUFDYixVQUFrQixFQUNsQixXQUFxQixFQUNyQixLQUFhO1FBUFosYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDSCxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixnQkFBVyxHQUFYLFdBQVcsQ0FBVTtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQzNCLENBQUM7SUFDTCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDOUMsQ0FBQztJQUNNLFlBQVksQ0FBQyxZQUFvQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFBO0lBQ3ZDLENBQUM7SUFDTSxPQUFPLENBQUMsZ0JBQXdCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQTtJQUNyQyxDQUFDO0NBQ0Y7QUFHRCwyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0Isa0JBQWtCO0FBQ2xCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4vLyBleHBvcnQgaW50ZXJmYWNlIFNlYXJjaEZvcm1EYXRhIHtcbi8vICAgZGF0ZUluOiBzdHJpbmcsXG4vLyAgIGRhdGVPdXQ6IHN0cmluZyxcbi8vICAgbWF4UHJpY2U6IG51bWJlclxuLy8gfVxuXG5leHBvcnQgY2xhc3MgUGxhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb3ZpZGVyOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IG9yaWdpbmFsSWQ6IG51bWJlcixcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBpbWFnZTogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSByZW1vdGVuZXNzOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IGJvb2tlZERhdGVzOiBudW1iZXJbXSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJpY2U6IG51bWJlclxuICApIHsgfVxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIgKyAnLScgKyB0aGlzLm9yaWdpbmFsSWRcbiAgfVxuICBwdWJsaWMgaXNQcm92aWRlZEJ5KHByb3ZpZGVyTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIgPT09IHByb3ZpZGVyTmFtZVxuICB9XG4gIHB1YmxpYyBnZXROYW1lKG5hbWVGcm9tUHJvdmlkZXI6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLm5hbWUgPSBuYW1lRnJvbVByb3ZpZGVyXG4gIH1cbn1cblxuXG4vLyBleHBvcnQgaW50ZXJmYWNlIFBsYWNlIHtcbi8vICAgaWQ6IG51bWJlcixcbi8vICAgbmFtZTogc3RyaW5nLFxuLy8gICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuLy8gICBpbWFnZTogc3RyaW5nLFxuLy8gICByZW1vdGVuZXNzOiBudW1iZXIsXG4vLyAgIGJvb2tlZERhdGVzOiBudW1iZXJbXSxcbi8vICAgcHJpY2U6IG51bWJlclxuLy8gfVxuIl19