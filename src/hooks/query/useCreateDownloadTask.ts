import { useAlert } from '@/hooks/useAlert'
import { getErrorMessage } from '@/services/api'
import { createDownloadTask } from '@/services/api/downloadTask'
import { GoLoadCreateDownloadTaskRequest } from '@/services/dataaccess'
import { loadingState } from '@/store/loading'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSetRecoilState } from 'recoil'

export const useCreateDownloadTask = () => {
  const queryClient = useQueryClient()
  const { setAlertError, setAlertSuccess } = useAlert()
  const setLoading = useSetRecoilState(loadingState)

  return useMutation({
    mutationKey: ['createDownloadTask'],
    mutationFn: async (request: GoLoadCreateDownloadTaskRequest) => {
      return await createDownloadTask(request)
    },
    onMutate: function () {
      setLoading(true)
    },
    onSuccess: function () {
      setAlertSuccess('Create successfully!')
      queryClient.invalidateQueries({ queryKey: ['getDownloadTaskList'] })
    },
    onError: async function (error) {
      const message = await getErrorMessage(await error)
      setAlertError(message)
    },
    onSettled: function () {
      setLoading(false)
    },
  })
}
