// 跨域代理前缀
const API_PROXY_PREFIX = '/api'
const BASE_URL = process.env.NODE_ENV === 'production' ? window.base_url : API_PROXY_PREFIX
module.exports = {
  BASE_URL

}
