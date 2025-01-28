import LoadingSpinner from '@/components/common/LoadingSpinner'
import { loadingState } from '@/store/loading'
import { useRecoilValue } from 'recoil'

const Loading = () => {
  const loading = useRecoilValue(loadingState)

  if (!loading) {
    return null
  }

  return (
    <div
      className="fixed flex justify-center items-center w-full h-full z-10 
      before:bg-white before:fixed before:top-0 before:left-0 before:right-0 before:bottom-0 before:opacity-50"
    >
      <LoadingSpinner />
    </div>
  )
}

export default Loading
