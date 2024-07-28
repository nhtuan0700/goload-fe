import { Header } from '@/layout/Dashboard/Header'
import { Sidebar } from '@/layout/Dashboard/Sidebar'
import { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[300px]">
        <Sidebar />
      </div>

      <div className="flex-grow h-full flex flex-col">
        <Header />
        <div className="bg-gray w-full flex-grow overflow-auto p-5">
          <div className='bg-white w-full h-full rounded-xl p-4 drop-shadow-lg'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
