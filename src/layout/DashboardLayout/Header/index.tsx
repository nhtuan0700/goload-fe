import { IconButton } from '@/components/IconButton'
import { IoIosNotificationsOutline } from 'react-icons/io'

export const Header = () => {
  return (
    <div className="flex p-5 justify-between items-center border-b border-gray-200v">
      <div className="">
        Hi TuanNH
        <p className="text-3xl">Welcome back</p>
      </div>
      <div>
        <IconButton aria-controls="">
          <IoIosNotificationsOutline />
        </IconButton>
      </div>
    </div>
  )
}
