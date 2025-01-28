import { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="max-w-screen-sm bg-white p-20 w-full shadow-sm rounded-md flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
