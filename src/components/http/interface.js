import axios from './api'

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出

//  登录
export const login = data => {
  return axios({
    url: 'v1/web/pc/login',
    method: 'post',
    data
  })
}
// 机构信息维护查询
export const findSelfHospital = data => {
  return axios({
    url: 'v1/web/pc/hospital/findSelfHospital',
    method: 'post',
    data
  })
}
//   机构信息维护修改
export const updateSelfHospital = data => {
  return axios({
    url: 'v1/web/pc/hospital/updateSelfHospital',
    method: 'post',
    data
  })
}

//  科室信息维护查询
export const deptSimpleFindList = data => {
  return axios({
    url: 'v1/web/pc/deptSimple/findList',
    method: 'post',
    data
  })
}
//  科室信息维护新建
export const deptSimpleInsert = data => {
  return axios({
    url: 'v1/web/pc/deptSimple/insert',
    method: 'post',
    data
  })
}
//  科室信息维护修改
export const deptSimpleUpdate = data => {
  return axios({
    url: 'v1/web/pc/deptSimple/update',
    method: 'post',
    data
  })
}



// 默认全部导出
export default {
  login,
  findSelfHospital,
  updateSelfHospital,
  deptSimpleFindList,
  deptSimpleInsert,
  deptSimpleUpdate,
}
