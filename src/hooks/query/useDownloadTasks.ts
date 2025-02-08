import { getDownloadTaskList } from '@/services/api/downloadTask'
import { GoLoadGetDownloadTaskListRequest } from '@/services/dataaccess'
import { useQuery } from '@tanstack/react-query'

export const useDownloadTasks = (request: GoLoadGetDownloadTaskListRequest) => {
  return useQuery({
    queryKey: ['getDownloadTaskList', request],
    queryFn: async () => {
      return await getDownloadTaskList(request)
    },
  })
}
