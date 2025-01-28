import { toast } from 'react-toastify'

export const useAlert = () => {
  const setAlertError = (message: string) => {
    toast(message, { type: 'error' })
  }

  const setAlertSuccess = (message: string) => {
    toast(message, { type: 'success' })
  }

  return {
    setAlertError,
    setAlertSuccess
  }
}
