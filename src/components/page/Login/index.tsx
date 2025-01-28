'use client'

import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { useAlert } from '@/hooks/useAlert'
import { getErrorMessage } from '@/services/api'
import { createSession } from '@/services/api/account'
import { GoLoadCreateAccountRequest } from '@/services/dataaccess'
import { loadingState } from '@/store/loading'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'

export default function LoginPage() {
  const router = useRouter()
  const setLoading = useSetRecoilState(loadingState)
  const { setAlertError, setAlertSuccess } = useAlert()

  const [formData, setFormData] = useState<GoLoadCreateAccountRequest>({
    accountName: '',
    password: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await createSession(formData)
      setAlertSuccess('Login successfully')
      router.push('/')
    } catch (error) {
      const message = await getErrorMessage(await error)
      setAlertError(message)
    } finally {
      setLoading(false)
    }
  }

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      <h3 className="text-2xl">Login</h3>
      <p className="my-2">Welcome to Goload. Please login to continue</p>
      <Input
        label="Username"
        wrapperClass="w-full mb-2"
        placeholder="Enter your username"
        name="accountName"
        onChange={onChangeForm}
      />
      <Input
        label="Password"
        wrapperClass="w-full mb-2"
        placeholder="Enter your password"
        type="password"
        name="password"
        onChange={onChangeForm}
      />
      <Link className="self-end text-sm text-blue-400" href="/">
        Forgot your password?
      </Link>
      <Button className="w-full mt-2">Login</Button>
      <p className="mt-2 text-sm">
        You don't have an account?{' '}
        <Link className="text-blue-400" href="/register">
          Signup now
        </Link>
      </p>
    </form>
  )
}
