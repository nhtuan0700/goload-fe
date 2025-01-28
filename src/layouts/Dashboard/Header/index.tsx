'use client'
import { IconButton } from '@/components/common/IconButton'
import { Account } from '@/layouts/Dashboard/Account'
import { IoIosNotificationsOutline } from 'react-icons/io'

export const Header = () => {
  return (
    <div className="bg-white flex p-2 items-center border-b border-gray-200v">
      <div className='flex-grow'></div>
      <div>
        <IconButton aria-controls="">
          <IoIosNotificationsOutline />
        </IconButton>
      </div>
      <div className='content-end'>
        <Account />
      </div>

      {/* <div className="">
        Hi TuanNH
        <p className="text-3xl">Welcome back</p>
      </div> */}
    </div>
  )
}
