

export class Place {
  constructor(
    private readonly provider: string,
    public readonly originalId: string,
    public name: string,
    public readonly description: string,
    public readonly image: string,
    public readonly price: number,
    public readonly bookedDates: number[],
    public readonly remoteness: number,
  ) { }
  get id(): string {
    return this.provider + '-' + this.originalId
  }
  public isProvidedBy(providerName: string): boolean {
    return this.provider === providerName
  }
  public getName(nameFromProvider: string) {
    return this.name = nameFromProvider
  }
}

