


export interface SearchFormData {
  dateIn: string,
  dateOut: string,
  maxPrice: number
}

export interface Place {
  id: number,
  name: string,
  description: string,
  image: string,
  remoteness: number,
  bookedDates: number[],
  price: number
}

