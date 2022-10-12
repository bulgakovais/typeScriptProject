
const ONE_DAY = 1
const THREE_DAY = 3
const ONE_MONTH = 1
const TWO_MONTH = 2

let today = new Date();
let currDate = today.getDate().toString().padStart(2, "0");
let currMontNum = today.getMonth() + ONE_MONTH
let currMonth = (today.getMonth() + ONE_MONTH).toString().padStart(2, "0");
let nextMonth = (today.getMonth() + TWO_MONTH).toString().padStart(2, "0");
let currYear = today.getFullYear();
let lastDayDate = (new Date(today.getFullYear(), today.getMonth() + TWO_MONTH, 0)).toLocaleString('RU', { day: 'numeric' });
let nextDay = today.getDate() + ONE_DAY
let afterTwoDay = today.getDate() + THREE_DAY
const lastDay = getLastDayMonth(currYear, currMontNum)

export const todayDMY: string = `${currYear}-${currMonth}-${currDate}`
export const defaultDateIn: string = getDefaultDateIn()
export const defaultDateOff: string = getDefaultDateOff()
export const lastDayNextMonth: string = `${currYear}-${nextMonth}-${lastDayDate}`


function getDefaultDateIn() {
  if (today.getDate() == lastDay) {
    currMonth = (today.getMonth() + TWO_MONTH).toString().padStart(2, "0");
    nextDay = 1
  } return `${currYear}-${currMonth}-${nextDay.toString().padStart(2, "0")}`
}

function getDefaultDateOff() {
  if (today.getDate() == lastDay) {
    currMonth = (today.getMonth() + TWO_MONTH).toString().padStart(2, "0");
    afterTwoDay = 3
  } return `${currYear}-${currMonth}-${afterTwoDay.toString().padStart(2, "0")}`
}

function getLastDayMonth(currYear: number, currMontNum: number) {
  let date = new Date(currYear, currMontNum, 0)
  return date.getDate()
}
