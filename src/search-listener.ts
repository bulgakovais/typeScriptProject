import { searchHandler } from './search-handler'

const btnSearch = document.getElementById("btn-search")

btnSearch.addEventListener<"click">("click", (event: any) => {
  event.preventDefault()
  searchHandler()
})

// Не работает) страница перезагружается и searchHandler() не запускается
// И вся остальная логика тоже
