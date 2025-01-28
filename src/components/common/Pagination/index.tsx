import { usePagination } from '@/hooks/usePagniation'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import './style.css'

interface PaginationProps {
  totalRow?: number
  totalPage?: number
  pageLimit?: number
}

const Pagination = ({
  totalRow = 0,
  totalPage = 10,
  pageLimit = 10,
}: PaginationProps) => {
  const { currentPage, setCurrentPage } = usePagination(pageLimit)

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const pageList = useMemo(() => {
    const pageList = []
    for (let i = 0; i < totalPage; i++) {
      pageList.push(i + 1)
    }
    return pageList
  }, [totalRow])

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    current.set('page', String(currentPage))
    router.push(`${pathname}?${current.toString()}`)
  }, [currentPage])

  const onChangePage = (page: number) => {
    setCurrentPage(Number(page))
  }

  const onPrevOrNextPage = (next: boolean) => {
    if (next) {
      if (currentPage == totalPage) {
        return
      }
      setCurrentPage((page) => page + 1)
    } else {
      if (currentPage == 1) {
        return
      }
      setCurrentPage((page) => page - 1)
    }
  }

  return (
    <div className="pagination">
      <div>
        <b>Total:</b> {totalRow}
      </div>
      <div className="flex">
        <span className="item" onClick={() => onPrevOrNextPage(false)}>
          {'<'}
        </span>
        {pageList.map((item, i) => (
          <span
            key={i}
            className={`item ${currentPage == item && 'active'}`}
            onClick={() => onChangePage(item)}
          >
            {item}
          </span>
        ))}
        <span className="item" onClick={() => onPrevOrNextPage(true)}>
          {'>'}
        </span>
      </div>
    </div>
  )
}

export default Pagination
