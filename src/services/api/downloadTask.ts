import { buildClient } from '@/services/api'
import {
  GoLoadCreateDownloadTaskRequest,
  GoLoadDeleteDownloadTaskRequest,
  GoLoadGetDownloadTaskListRequest,
} from '@/services/dataaccess'

export const controller = new AbortController() // Create an abort controller
export const signal = controller.signal

export const createDownloadTask = (
  request: GoLoadCreateDownloadTaskRequest
) => {
  const client = buildClient()
  return client.goLoadServiceCreateDownloadTask({
    body: request,
  })
}

export const getDownloadTaskList = (
  request: GoLoadGetDownloadTaskListRequest
) => {
  const client = buildClient()
  return client.goLoadServiceGetDownloadTaskList({
    body: request,
  })
}

export const deleteDownloadTask = (
  request: GoLoadDeleteDownloadTaskRequest
) => {
  const client = buildClient()
  return client.goLoadServiceDeleteDownloadTask({
    body: request,
  })
}
