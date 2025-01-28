import { paginationState } from '@/store/page'
import { useMemo } from 'react'
import { useRecoilState } from 'recoil'

export const usePagination = (limitPage: number) => {
  const [currentPage, setCurrentPage] = useRecoilState(paginationState)
  const offset = useMemo(() => {
    return (currentPage - 1) * limitPage
  }, [currentPage])

  return {
    currentPage,
    offset,
    setCurrentPage
  }
}
