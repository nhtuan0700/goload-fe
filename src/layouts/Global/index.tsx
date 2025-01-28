'use client'
import Alert from '@/layouts/Alert'
import Loading from '@/layouts/Loading'
import 'react-toastify/dist/ReactToastify.min.css'
import { RecoilRoot } from 'recoil'

const Global = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <Alert />
      <Loading />
      {children}
    </RecoilRoot>
  )
}

export default Global
