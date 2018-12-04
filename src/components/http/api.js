import axios from 'axios';
import config from './config';
import qs from 'qs';
// import Cookies from "js-cookie";
import {
  Message, Loading
} from 'element-ui';
import router from '@/router'
 
// 使用vuex做全局loading时使用
// import store from '@/store'
export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: {},
      transformResponse: [function (data) {
      }]
    })
 
    // request 拦截器
    instance.interceptors.request.use(
      config => {

        // let token = localStorage.getItem('token')
        // 1. 请求开始的时候可以结合 vuex 开启全屏 loading 动画
        // console.log(store.state.loading)
        // console.log('准备发送请求...')
        // 2. 带上token
        // if (token) {
        //   config.headers.token = token
        // } else {
        //   // 重定向到登录页面
        //   console.log(111)
        //   router.push('/login')
        // }
        // 3. 根据请求方法，序列化传来的参数，根据后端需求是否序列化
        if (config.method === 'post') {
          if (config.data.__proto__ === FormData.prototype
            || config.url.endsWith('path')
            || config.url.endsWith('mark')
            || config.url.endsWith('patchs')

          ) {
          } else {
            config.data = qs.stringify(config.data)

          }
        }
        return config

      },
 
      error => {
        // 请求错误时
        console.log('request:', error)
        // 1. 判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          console.log('timeout请求超时')
          // return service.request(originalRequest);//再重复请求一次
        }
        // 2. 需要重定向到错误页面
        const errorInfo = error.response
        console.log(errorInfo)
        if (errorInfo) {
          //error =errorInfo.data  //页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
          const errorStatus = errorInfo.status; // 404 403 500 ...
          router.push({
            path: `/error/${errorStatus}`
          })
        }
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    )
 
    // response 拦截器
    instance.interceptors.response.use(
      response => {
      let loadingInstance = Loading.service(options);
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
          data = JSON.parse(response.request.responseText)
            loadingInstance.close();

        } else {
          data = response.data
            loadingInstance.close();
        }
 
        // 根据返回的code值来做不同的处理
        switch (data.rc) {
          case 1:
            console.log(data.desc)
            break;
          case 0:
            store.commit('changeState')
            // console.log('登录成功')
            break;
           case 20250:
            //  store.commit('changeState')
           console.log('未登录')
           default:
        }
        // 若不是正确的返回code，且已经登录，就抛出错误
        // const err = new Error(data.desc)
        // err.data = data
        // err.response = response
        // throw err
        return data
      },
      err => {
        if (err && err.response) {
          if (err.response.status ==503 ) {
            alert(1)
          }
          switch (err.response.status) {
            case 400:
              err.Message = '请求错误'
              break
 
            case 401:
              err.Message = '未授权，请登录'
              break
 
            case 403:
              err.Message = '拒绝访问'
              break
 
            case 404:
              err.Message = `请求地址出错: ${err.response.config.url}`
              break
 
            case 408:
              err.Message = '请求超时'
              break
 
            case 500:
              err.Message = '服务器内部错误'
              break
 
            case 501:
              err.Message = '服务未实现'
              break
 
            case 502:
              err.Message = '网关错误'
              break
 
            case 503:
              err.Message = '服务不可用'
              break
 
            case 504:
              err.Message = '网关超时'
              break
 
            case 505:
              err.Message = 'HTTP版本不受支持'
              break
 
            default:
          }
        }else{
       err.Message = '连接服务器失败!'
        }
         message.error(err.Message);
        Message({
         showClose: true,
         duration:0,
          message: err.message,
          type: 'error'
        });
        return Promise.reject(err) // 返回接口返回的错误信息
      }
      
    )
 
    // 请求处理
    instance(options).then(res => {
      resolve(res)
      return false
    }).catch(error => {
      reject(error)
    })
  })
}