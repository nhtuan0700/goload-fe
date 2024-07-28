import { buildClient } from '@/services/api'
import { GoLoadCreateAccountRequest, GoLoadCreateSessionRequest } from '@/services/dataaccess'

export const createAccount = (request: GoLoadCreateAccountRequest) => {
  const client = buildClient()

  return client.goLoadServiceCreateAccount({
    body: request,
  })
}

export const createSession = (request: GoLoadCreateSessionRequest) => {
  const client = buildClient()
  return client.goLoadServiceCreateSession({
    body: request
  })
}
