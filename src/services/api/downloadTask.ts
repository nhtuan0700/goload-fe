import { buildClient } from '@/services/api'
import { GoLoadCreateDownloadTaskRequest, GoLoadGetDownloadTaskListRequest } from '@/services/dataaccess'

export const createDownloadTask = (request: GoLoadCreateDownloadTaskRequest) => {
  const client = buildClient()
  return client.goLoadServiceCreateDownloadTask({
    body: request,
  })
}

export const getDownloadTaskList = (request: GoLoadGetDownloadTaskListRequest) => {
  const client = buildClient()
  return client.goLoadServiceGetDownloadTaskList({
    body: request,
  })
}
