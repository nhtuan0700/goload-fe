import { Popper } from '@/components/common/Popper'
import Image from 'next/image'
import { useState } from 'react'

export const Account = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const toggleUserInfo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget)
    } else {
      setAnchorEl(null)
    }
  }

  return (
    <div className="sticky bottom-4 py-4 w-full">
      <div
        className="flex items-center cursor-pointer hover:bg-gray w-full px-3 py-1 rounded-md transition"
        onClick={toggleUserInfo}
      >
        <Image
          src="/avatar.png"
          alt="image not found"
          width={46}
          height={46}
          className="rounded-full mr-2 w-[46px] h-[46px] object-cover p-1"
        />
        abc
      </div>
      <Popper
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        asdasd
        asdasd
      </Popper>
    </div>
  )
}
