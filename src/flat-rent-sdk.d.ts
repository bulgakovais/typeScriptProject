

export const database: object[]

export interface DatabaseItem {
  id: string,
  title: string,
  details?: string,
  photos?: string[],
  coordinates?: number[],
  bookedDates: number[],
  totalPrice: number
}

export interface ParamsSearch {
  city?: string,
  checkInDate: Date,
  checkOutDate: Date,
  priceLimit: number
}


export function cloneDate(str: string): object //return new Date

export function addDays(object: object, number: number): object


export const backendPort: number
export const localStorageKey: string

export class FlatRentSdk {
  get(id: string): Promise<Object | null>

  search(params: ParamsSearch): Promise<DatabaseItem[]>

  book(flatId: number, checkInDate: Date, checkOutDate: Date): number

  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): number

  _resetTime(date: Date): number

  _calculateDifferenceInDays(startDate: Date, endDate: Date): number

  _generateDateRange(from: Date, to: Date): Date[]

  _generateTransactionId(): number

  _areAllDatesAvailable(flat: object, dateRange: Date[]): DatabaseItem[]

  _formatFlatObject(flat: object, nightNumber: number): object

  _readDatabase(): object

  _writeDatabase(database: DatabaseItem): DatabaseItem

  _syncDatabase(database: DatabaseItem): DatabaseItem
}
