import axios from 'axios'
import { Toast } from 'vant'
import router from 'router'

axios.interceptors.request.use(
  config => {
    console.log(config)
  },
  error => {
    return Promise.error(error)
  }
)

axios.interceptors.response.use(
  res => {
    if (typeof res.data !== 'object') {
      Toast.fail('服务端异常！')
      return Promise.reject(res)
    }
    if (res.data.resultCode !== 200) {
      if (res.data.message) Toast.fail(res.data.message)
      if (res.data.resultCode === 416) {
        router.push({ path: '/login' })
      }
      return Promise.reject(res.data)
    }

    return res.data
  },
  error => {
    console.log(error)
    return Promise.reject(error.response)
  }
)

export default axios
