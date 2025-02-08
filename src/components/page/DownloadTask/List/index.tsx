'use client'

import { Button } from '@/components/common/Button'
import Pagination from '@/components/common/Pagination'
import { useDeleteDownloadTask } from '@/hooks/query/useDeleteDownloadTask'
import { useDownloadTasks } from '@/hooks/query/useDownloadTasks'
import { usePagination } from '@/hooks/usePagniation'
import { loadingState } from '@/store/loading'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

export default function DownloadTaskListPage() {
  const router = useRouter()
  const pageLimit = 10
  const { offset } = usePagination(pageLimit)
  const setLoading = useSetRecoilState(loadingState)
  const { data: downloadTaskListData, isFetched } = useDownloadTasks({
    limit: String(pageLimit),
    offset: String(offset),
  })
  const { mutate } = useDeleteDownloadTask()

  useEffect(() => {
    if (isFetched) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [isFetched])

  const onHandleDelete = async (downloadTaskId?: string) => {
    if (!downloadTaskId) {
      return
    }
    mutate({ downloadTaskId: downloadTaskId })
  }

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
            {downloadTaskListData?.downloadTaskList?.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.url}</td>
                <td>{item.downloadStatus}</td>
                <td>
                  <div className="flex">
                    <Button className="mr-2" variant="secondary" size="sm">
                      Detail
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onHandleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalRow={Number(downloadTaskListData?.totalCount)}
          totalPage={Math.ceil(Number(downloadTaskListData?.totalCount) / 10)}
        />
      </div>
    </>
  )
}
