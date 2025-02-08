import { useAlert } from '@/hooks/useAlert'
import { getErrorMessage } from '@/services/api'
import {
  deleteDownloadTask
} from '@/services/api/downloadTask'
import {
  GoLoadDeleteDownloadTaskRequest
} from '@/services/dataaccess'
import { loadingState } from '@/store/loading'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSetRecoilState } from 'recoil'

export const useDeleteDownloadTask = () => {
  const queryClient = useQueryClient()
  const { setAlertError, setAlertSuccess } = useAlert()
  const setLoading = useSetRecoilState(loadingState)

  return useMutation({
    mutationKey: ['deleteDownloadTask'],
    mutationFn: async (request: GoLoadDeleteDownloadTaskRequest) => {
      return await deleteDownloadTask(request)
    },
    onMutate: function() {
      setLoading(true)
    },
    onSuccess: function () {
      setAlertSuccess('delete sucessfully')
      queryClient.invalidateQueries({ queryKey: ['getDownloadTaskList'] })
    },
    onError: async function (error) {
      const message = await getErrorMessage(await error)
      setAlertError(message)
    },
    onSettled: function() {
      setLoading(false)
    }
  })
}
