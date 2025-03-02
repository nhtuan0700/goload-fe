import { StreamResultOfGoLoadStreamResponse } from '@/services/dataaccess'

export const streamData = (
  // eslint-disable-next-line no-unused-vars
  cb: (data: StreamResultOfGoLoadStreamResponse) => void
) => {
  var source = new EventSource('http://localhost:8080/v1/stream', {
    withCredentials: true,
  })
  source.onmessage = function (event) {
    cb(JSON.parse(event.data))
  }

  source.onerror = function (e) {
    console.log(e)
    source.close()
  }
}
