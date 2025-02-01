'use client'

import { Button } from '@/components/common/Button'
import Pagination from '@/components/common/Pagination'
import { useAlert } from '@/hooks/useAlert'
import { usePagination } from '@/hooks/usePagniation'
import { getErrorMessage } from '@/services/api'
import {
  deleteDownloadTask,
  getDownloadTaskList,
} from '@/services/api/downloadTask'
import { GoLoadGetDownloadTaskListResponse } from '@/services/dataaccess'
import { loadingState } from '@/store/loading'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

export default function DownloadTaskListPage() {
  const [downloadListData, setDownloadTaskListData] =
    useState<GoLoadGetDownloadTaskListResponse>()
  const router = useRouter()
  const pageLimit = 10
  const { offset } = usePagination(pageLimit)
  const searchParams = useSearchParams()
  const { setAlertError, setAlertSuccess } = useAlert()
  const setLoading = useSetRecoilState(loadingState)

  const fetchDownloadTaskList = async () => {
    const data = await getDownloadTaskList({
      limit: String(pageLimit),
      offset: String(offset),
    })
    setDownloadTaskListData(data)
  }

  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        await fetchDownloadTaskList()
      } catch (error) {
        const message = await getErrorMessage(await error)
        setAlertError(message)
      } finally {
        setLoading(false)
      }
    })()
  }, [searchParams])

  const onHandleDelete = async (downloadTaskId?: string) => {
    if (!downloadTaskId) {
      return
    }
    try {
      setLoading(true)
      await deleteDownloadTask({
        downloadTaskId,
      })
      await fetchDownloadTaskList()
      setAlertSuccess('delete sucessfully')
    } catch (error) {
      const message = await getErrorMessage(await error)
      setAlertError(message)
    } finally {
      setLoading(false)
    }
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
            {downloadListData?.downloadTaskList?.map((item, i) => (
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
          totalRow={Number(downloadListData?.totalCount)}
          totalPage={Math.ceil(Number(downloadListData?.totalCount) / 10)}
        />
      </div>
    </>
  )
}
