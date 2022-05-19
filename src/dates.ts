
const ONE_DAY = 1
const THREE_DAY = 3
const ONE_MONTH = 1
const TWO_MONTH = 2
let today = new Date();
let currDate = today.getDate().toString().padStart(2, "0");
let currMonth = (today.getMonth() + ONE_MONTH).toString().padStart(2, "0");
let nextMonth = (today.getMonth() + TWO_MONTH).toString().padStart(2, "0");
let currYear = today.getFullYear();
let lastDayDate = (new Date(today.getFullYear(), today.getMonth() + TWO_MONTH, 0)).toLocaleString('RU', { day: 'numeric' });

export const todayDMY: string = `${currYear}-${currMonth}-${currDate}`
export const defaultDateIn: string = `${currYear}-${currMonth}-${today.getDate() + ONE_DAY}`
export const defaultDateOff: string = `${currYear}-${currMonth}-${today.getDate() + THREE_DAY}`
export const lastDayNextMonth: string = `${currYear}-${nextMonth}-${lastDayDate}`
