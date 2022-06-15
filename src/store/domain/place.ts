


// export interface SearchFormData {
//   dateIn: string,
//   dateOut: string,
//   maxPrice: number
// }

export class Place {
  constructor(
    private readonly provider: string,
    public readonly originalId: number,
    public name: string,
    public readonly description: string,
    public readonly image: string,
    public readonly remoteness: number,
    public readonly bookedDates: number[],
    public readonly price: number
  ) { }
  get id() {
    return this.provider + '-' + this.originalId
  }
  public isProvidedBy(providerName: string): boolean {
    return this.provider === providerName
  }
  public getName(nameFromProvider: string) {
    return this.name = nameFromProvider
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
