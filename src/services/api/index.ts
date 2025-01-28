import {
  Configuration,
  FetchError,
  FetchParams,
  GoLoadServiceApi,
  Middleware,
  RequestContext,
  RequiredError,
  ResponseError,
  RpcStatus,
} from '@/services/dataaccess'

export const config = (): Configuration =>
  new Configuration({
    basePath: process.env.NEXT_PUBLIC_API_URL,
    middleware: [middleware()],
    credentials: 'include',
  })

export const middleware = (): Middleware => ({
  pre: (context: RequestContext): Promise<FetchParams | void> => {
    context.init.mode = 'cors' // allow api request cross origin before request to api
    return Promise.resolve({
      url: context.url,
      init: context.init,
    })
  },
  // post: (context: ResponseContext): Promise<Response | void> => {
  //   console.log(context.response)
  //   if (context.response.status >= 400) {
  //     return Promise.reject(
  //       new ResponseError(context.response, 'Response returned an error code 1')
  //     )
  //   }
  //   return Promise.resolve(context.response)
  // },
  // onError: (context: ErrorContext): Promise<Response | void> => {
  //   return Promise.resolve(context.response)
  // },
})

export const buildClient = () => {
  return new GoLoadServiceApi(config())
}

export const getErrorMessage = async (e: any) => {
  let message = ''

  console.log(e)
  if (e instanceof ResponseError) {
    return GetResponseErrorMessage(await e.response.json())
  }
  if (e instanceof FetchError) {
    message = e.message
  }
  if (e instanceof RequiredError) {
    message = e.message
  }

  return 'An error occurred in the system\n' + message
}

export const GetResponseErrorMessage = (
  response: RpcStatus & {
    message: string
  }
) => {
  if (response.message) {
    return response.message
  }
  return 'An error occurred in the system'
}
