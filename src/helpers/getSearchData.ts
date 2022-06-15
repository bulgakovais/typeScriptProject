


export function getSearchData() {

  const getdateIn = (<HTMLInputElement>document.getElementById('check-in-date')).value
  const getdateOut = (<HTMLInputElement>document.getElementById('check-out-date')).value
  const getmaxPrice = Number((<HTMLInputElement>document.getElementById('max-price')).value)


  console.log(getdateIn, getdateOut, getmaxPrice)
  return { getdateIn, getdateOut, getmaxPrice }
}

