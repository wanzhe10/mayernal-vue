export default {
    method: 'get',
    // 基础url前缀
    // baseURL: 'http://www.wcqxzs.com/pregnant/',
    // baseURL: 'http://192.168.0.6:8763/',
    baseURL: 'http://192.168.0.6:8080/pregnant/',

   
    // 请求头信息
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    // 参数
    data: {},
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    withCredentials: true,
    // 返回数据类型
    responseType: 'json'
  }