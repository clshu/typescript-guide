export const dataStringToDate = (dataString: string): Date => {
  // dataString: 28/10/2018 Euro format
  const dataParts = dataString
    .split('/')
    .map((value: string): number => {
      return parseInt(value)
    })
  // Year, Month(zero based), Day
  return new Date(dataParts[2], dataParts[1] - 1, dataParts[0])
}