'use client'

import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { useAlert } from '@/hooks/useAlert'
import { getErrorMessage } from '@/services/api'
import { createAccount } from '@/services/api/account'
import { GoLoadCreateAccountRequest } from '@/services/dataaccess'
import { loadingState } from '@/store/loading'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<GoLoadCreateAccountRequest>({
    accountName: '',
    password: '',
  })
  const setLoading = useSetRecoilState(loadingState)
  const { setAlertError, setAlertSuccess } = useAlert()

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setLoading(true)
      await createAccount(formData)
      setAlertSuccess('Register successfully')
      router.push('/login')
    } catch (error) {
      const message = await getErrorMessage(await error)
      setAlertError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      <h3 className="text-2xl">Register</h3>
      <p className="my-2">If you want to continue, please register!</p>
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

      <Button className="w-full mt-2" variant="secondary">
        Register
      </Button>
      <Link className="text-blue-400 text-sm mt-2" href="/login">
        Back to login
      </Link>
    </form>
  )
}
