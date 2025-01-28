import LoadingSpinner from '@/components/common/LoadingSpinner'

export default function Loading() {
  return (
    <div
      className="fixed flex justify-center items-center w-full h-full z-10 
      before:bg-white before:fixed before:top-0 before:left-0 before:right-0 before:bottom-0 before:opacity-50"
    >
      <LoadingSpinner />
    </div>
  )
}
