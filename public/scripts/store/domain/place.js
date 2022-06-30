export class Place {
    constructor(provider, originalId, name, description, image, price, bookedDates, remoteness) {
        this.provider = provider;
        this.originalId = originalId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.bookedDates = bookedDates;
        this.remoteness = remoteness;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3RvcmUvZG9tYWluL3BsYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxLQUFLO0lBQ2hCLFlBQ21CLFFBQWdCLEVBQ2pCLFVBQWtCLEVBQzNCLElBQVksRUFDSCxXQUFtQixFQUNuQixLQUFhLEVBQ2IsS0FBYSxFQUNiLFdBQXFCLEVBQ3JCLFVBQWtCO1FBUGpCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ0gsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixnQkFBVyxHQUFYLFdBQVcsQ0FBVTtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQ2hDLENBQUM7SUFDTCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDOUMsQ0FBQztJQUNNLFlBQVksQ0FBQyxZQUFvQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFBO0lBQ3ZDLENBQUM7SUFDTSxPQUFPLENBQUMsZ0JBQXdCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQTtJQUNyQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNsYXNzIFBsYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm92aWRlcjogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBvcmlnaW5hbElkOiBzdHJpbmcsXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW1hZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJpY2U6IG51bWJlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgYm9va2VkRGF0ZXM6IG51bWJlcltdLFxuICAgIHB1YmxpYyByZWFkb25seSByZW1vdGVuZXNzOiBudW1iZXIsXG4gICkgeyB9XG4gIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyICsgJy0nICsgdGhpcy5vcmlnaW5hbElkXG4gIH1cbiAgcHVibGljIGlzUHJvdmlkZWRCeShwcm92aWRlck5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyID09PSBwcm92aWRlck5hbWVcbiAgfVxuICBwdWJsaWMgZ2V0TmFtZShuYW1lRnJvbVByb3ZpZGVyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lID0gbmFtZUZyb21Qcm92aWRlclxuICB9XG59XG5cbiJdfQ==