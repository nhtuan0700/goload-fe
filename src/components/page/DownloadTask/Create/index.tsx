'use client'

import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { Select } from '@/components/common/Select'
import { useAlert } from '@/hooks/useAlert'
import { createDownloadTask } from '@/services/api/downloadTask'
import {
  GoLoadCreateDownloadTaskRequest,
  GoLoadDownloadType,
} from '@/services/dataaccess'
import { SelectOption } from '@/types/common'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

const options: SelectOption<GoLoadDownloadType>[] = [
  { label: 'HTTP', value: 'DOWNLOAD_TYPE_HTTP' },
  { label: 'Unspecified', value: 'DOWNLOAD_TYPE_UNSPECIFIED' },
]

export default function DownloadTaskCreatePage() {
  const [formData, setFormData] = useState<GoLoadCreateDownloadTaskRequest>({
    downloadType: 'DOWNLOAD_TYPE_HTTP',
    url: '',
  })
  const router = useRouter()
  const { setAlertError, setAlertSuccess } = useAlert()

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      await createDownloadTask(formData)
      setAlertSuccess('Create download successfully!')
    } catch (error) {
      setAlertError('Failed to create!')
    }
  }

  const onChangeForm = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Button onClick={() => router.push('/download-task')} variant="secondary">
        Back
      </Button>
      <Input
        label="URL"
        wrapperClass="w-full mb-2"
        placeholder=""
        name="url"
        onChange={onChangeForm}
      />
      <Select
        label="Type"
        options={options}
        name="downloadType"
        onChange={onChangeForm}
      />
      <Button className="mt-2" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  )
}
