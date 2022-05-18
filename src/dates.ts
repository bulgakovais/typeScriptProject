
let today = new Date();

let curr_date = today.getDate().toString().padStart(2, "0");
let curr_month = (today.getMonth() + 1).toString().padStart(2, "0");
let next_month = (today.getMonth() + 2).toString().padStart(2, "0");
let curr_year = today.getFullYear();
let lastDayDate = (new Date(today.getFullYear(), today.getMonth() + 2, 0)).toLocaleString('RU', { day: 'numeric' });

export const todayDMY: string = `${curr_year}-${curr_month}-${curr_date}`
export const defaultDateIn: string = `${curr_year}-${curr_month}-${today.getDate() + 1}`
export const defaultDateOff: string = `${curr_year}-${curr_month}-${today.getDate() + 3}`
export const lastDayNextMonth: string = `${curr_year}-${next_month}-${lastDayDate}`
