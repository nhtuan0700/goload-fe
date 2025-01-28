import { atom } from 'recoil'

export const paginationState = atom<number>({
  key: 'paginationState',
  default: 1,
})
