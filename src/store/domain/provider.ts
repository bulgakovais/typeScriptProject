import { Place } from "./place";
import { SearchFormData } from "./search-filter";




export interface Provider {
  /**
  * Источник получает фильтр в общем виде и сам должен преобразовать его в
  свой формат
  * Источник также должен конвертировать свой ответ в объекты книг
  */
  find(filter: SearchFormData): Promise<Place[]>
  // getById(id: string): Promise<Place>
}
