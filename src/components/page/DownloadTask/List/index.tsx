'use client'

import { Button } from '@/components/common/Button'
import Pagination from '@/components/common/Pagination'
import { usePagination } from '@/hooks/usePagniation'
import { getDownloadTaskList } from '@/services/api/downloadTask'
import { GoLoadGetDownloadTaskListResponse } from '@/services/dataaccess'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DownloadTaskListPage() {
  const [downloadListData, setDownloadTaskListData] =
    useState<GoLoadGetDownloadTaskListResponse>()
  const router = useRouter()
  const pageLimit = 10
  const { offset } = usePagination(pageLimit)
  const searchParams = useSearchParams()

  useEffect(() => {
    ;(async () => {
      const data = await getDownloadTaskList({
        limit: String(pageLimit),
        offset: String(offset)
      })
      setDownloadTaskListData(data)
    })()
  }, [searchParams])

  return (
    <>
      <div className="flex items-center mb-2">
        <h2 className="flex-grow">Download tasks</h2>
        <Button onClick={() => router.push('/download-task/create')}>
          Create
        </Button>
      </div>
      <div>
        <table className="table w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <td width="10%">ID</td>
              <td>URL</td>
              <td width="20%">Status</td>
              <td width="20%">Action</td>
            </tr>
          </thead>
          <tbody>
            {downloadListData?.downloadTaskList?.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.url}</td>
                <td>{item.downloadStatus}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalRow={Number(downloadListData?.totalCount)}
          totalPage={Math.ceil(Number(downloadListData?.totalCount) / 10)}
        />
      </div>
    </>
  )
}
