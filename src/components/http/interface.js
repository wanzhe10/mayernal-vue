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
//  人员信息维护查询
export const patientCenterFindSelfDoctorList = data => {
  return axios({
    url: 'v1/web/pc/patientCenter/findSelfDoctorList',
    method: 'post',
    data
  })
}
//  人员信息维护新增
export const patientCenterInsert = data => {
  return axios({
    url: 'v1/web/pc/patientCenter/insert',
    method: 'post',
    data
  })
}
//  人员信息维护编辑
export const patientCenterUpdate = data => {
  return axios({
    url: 'v1/web/pc/patientCenter/update',
    method: 'post',
    data
  })
}
//  角色信息维护查询
export const occupationFindList = data => {
  return axios({
    url: 'v1/web/pc/occupation/findList',
    method: 'post',
    data
  })
}
//  角色信息维护新增
export const occupationInsert = data => {
  return axios({
    url: 'v1/web/pc/occupation/insert',
    method: 'post',
    data
  })
}
//  角色信息维护修改
export const occupationUpdate = data => {
  return axios({
    url: 'v1/web/pc/occupation/update',
    method: 'post',
    data
  })
}

// 产检信息维护查询
export const checkForWeekFindList = data => {
  return axios({
    url: 'v1/web/pc/checkForWeek/findList',
    method: 'post',
    data
  })
}

// 产检信息维护新建
export const checkForWeekInsert = data => {
  return axios({
    url: 'v1/web/pc/checkForWeek/insert',
    method: 'post',
    data
  })
}
// 产检信息维护修改
export const checkForWeekUpdate = data => {
  return axios({
    url: 'v1/web/pc/checkForWeek/update',
    method: 'post',
    data
  })
}
// 报告单解读查询
export const checkForWeekAndCellFindList = data => {
  return axios({
    url: 'v1/web/pc/checkForWeekAndCell/findList',
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
  patientCenterFindSelfDoctorList,
  occupationFindList,
  occupationInsert,
  occupationUpdate,
  checkForWeekFindList,
  checkForWeekInsert,
  checkForWeekUpdate,
  checkForWeekAndCellFindList,
  patientCenterInsert,
  patientCenterUpdate,
}
