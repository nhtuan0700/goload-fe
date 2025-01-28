import { Popper } from '@/components/common/Popper'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { LuLogOut } from 'react-icons/lu'

export const Account = () => {
  const ref = useRef(null)
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const toggleUserInfo = () => {
    if (!anchorEl) {
      setAnchorEl(ref.current)
    } else {
      setAnchorEl(null)
    }
  }

  return (
    <div
      className={`flex items-center cursor-pointer w-full px-3 py-1 rounded-md transition hover:bg-gray ${anchorEl ? 'bg-gray' : ''}`}
      ref={ref}
      onClick={toggleUserInfo}
    >
      <Image
        src="/avatar.png"
        alt="image not found"
        width={40}
        height={40}
        className="rounded-full  object-cover p-1"
      />
      <Popper
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className="bg-gray-200 min-w-[200px] cursor-pointer"
      >
        <div className="p-3 flex items-center hover:bg-gray transition cursor-pointer border-b">
          <FaUser className="mr-2" />
          Profile
        </div>
        <div className="p-3 flex items-center hover:bg-gray transition cursor-pointer">
          <LuLogOut className="mr-2" />
          Logout
        </div>
      </Popper>
      TuanNH
    </div>
  )
}
