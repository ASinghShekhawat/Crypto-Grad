export const makeMeTwoDigits = (n: number) => {
  return n < 10 ? `0${n}` : n
}

export const trimString = (str: string) => {
  return `${str.slice(0,4)}...${str.slice(39,)}`
}