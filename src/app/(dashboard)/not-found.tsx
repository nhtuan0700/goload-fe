import { CiWarning } from 'react-icons/ci'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-20">
        <CiWarning fontSize={64} />
      </div>
      <p className="text-xl mt-4">404: Page not found!</p>
      <p className="text-xl">Something wrong. Try again later!</p>
    </div>
  )
}
