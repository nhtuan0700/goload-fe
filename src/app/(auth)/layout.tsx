import AuthLayout from '@/layouts/Auth'
import { ReactNode } from 'react'

export default ({ children }: { children: ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>
}
