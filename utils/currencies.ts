export interface ICurrency {
  name: string
  icon: string
}

export const currencies: ICurrency[] = [
  {
    name: 'ETH',
    icon: '/crypto/ETH.png',
  },
  {
    name: 'BNB',
    icon: '/crypto/BNB.png',
  },
  {
    name: 'USDC',
    icon: '/crypto/USDC.png',
  },
]
