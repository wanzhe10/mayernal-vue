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
//  退出登录
export const signOut = data => {
  return axios({
    url: 'v1/web/pc/signOut',
    method: 'post',
    data
  })
}
// 后台管理
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
    url: 'v1/web/pc/doctor/findSelfDoctorList',
    method: 'post',
    data
  })
}
//  人员信息维护新增
export const patientCenterInsert = data => {
  return axios({
    url: 'v1/web/pc/doctor/insert',
    method: 'post',
    data
  })
}
//  人员信息维护编辑
export const patientCenterUpdate = data => {
  return axios({
    url: 'v1/web/pc/doctor/update',
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
// 基础数据维护
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
// 报告单解读新增
export const checkForWeekAndCellInsert = data => {
  return axios({
    url: 'v1/web/pc/checkForWeekAndCell/insert',
    method: 'post',
    data
  })
}
// 报告单解读修改
export const checkCellsUpdate = data => {
  return axios({
    url: 'v1/web/pc/checkForWeekAndCell/update',
    method: 'post',
    data
  })
}
// 孕期检查标签-查询
export const pregnantPrenatalEducationAndClassFindList = data => {
  return axios({
    url: 'v1/web/pc/pregnantPrenatalEducationAndClass/findList',
    method: 'post',
    data
  })
}
// 孕期检查标签-添加
export const pregnantPrenatalEducationAndClassInsert = data => {
  return axios({
    url: 'v1/web/pc/pregnantPrenatalEducationAndClass/insert',
    method: 'post',
    data
  })
}
// 孕期检查标题-添加
export const pregnantPrenatalEducationClassAndCellInsert = data => {
  return axios({
    url: 'v1/web/pc/pregnantPrenatalEducationClassAndCell/insert',
    method: 'post',
    data
  })
}
// 标题-通过标签id查询数据列表
export const pregnantPrenatalEducationClassAndCellFindList = data => {
  return axios({
    url: 'v1/web/pc/pregnantPrenatalEducationClassAndCell/findList',
    method: 'post',
    data
  })
}

//模板管理
  // 查询列表
export const templateFindList = data => {
  return axios({
    url: 'v1/web/pc/template/findList',
    method: 'post',
    data
  })
}
// 新增
export const templateInsert = data => {
  return axios({
    url: 'v1/web/pc/template/insert',
    method: 'post',
    data
  })
}
// 修改
export const templateUpdate = data => {
  return axios({
    url: 'v1/web/pc/template/update',
    method: 'post',
    data
  })
}



// 数据统计
// 今日复检人数
// 今日预约复检人数查询
export const countEntityWithStartDateAndEndDate = data => {
  return axios({
    url: 'v1/web/pc/patientCenter/countEntityWithStartDateAndEndDate',
    method: 'post',
    data
  })
}
// 复检超时查询 已建孕妇档案查询
export const patientCenterCountEntityForOthers = data => {
  return axios({
    url: 'v1/web/pc/patientCenter/countEntityForOthers',
    method: 'post',
    data
  })
}
//  预分娩床位统计
export const countEntityForOthersWithDueDate = data => {
  return axios({
    url: 'v1/web/pc/patientCenter/countEntityForOthersWithDueDate',
    method: 'post',
    data
  })
}


//  更改自己密码
export const patientCenterUpdateSelfPass = data => {
  return axios({
    url: 'v1/web/pc/doctor/updateSelfPass',
    method: 'post',
    data
  })
}

// 档案管理
// 首页-查询
export const findListWithParamForFiling = data => {
  return axios({
    url: 'v1/web/pc/patientCenter/findListWithParamForFiling',
    method: 'post',
    data
  })
}

// 复检记录查询
export const patientSecondCheckFindListByCenterId = data => {
  return axios({
    url: 'v1/web/pc/patientSecondCheck/findListByCenterId',
    method: 'post',
    data
  })
}

// 高危评估记录-查询
export const patientHighRiskGradeFindList = data => {
  return axios({
    url: 'v1/web/pc/patientHighRiskGrade/findList',
    method: 'post',
    data
  })
}
// 产后42天查询
export const patientFourtyTwoFindByCenterId = data => {
  return axios({
    url: 'v1/web/pc/patientFourtyTwo/findByCenterId',
    method: 'post',
    data
  })
}
// 预览
//基本信息-查询
export const patientCheckControllerFindForFiling = data => {
  return axios({
    url: 'v1/web/pc/patientCheckController/findForFiling',
    method: 'post',
    data
  })
}
//配偶信息-查询
export const patientHusbandsFindForFiling = data => {
  return axios({
    url: 'v1/web/pc/patientHusbands/findForFiling',
    method: 'post',
    data
  })
}
//孕妇检查-查询
export const patientParturitionDetailFindForFiling = data => {
  return axios({
    url: 'v1/web/pc/patientParturitionDetail/findForFiling',
    method: 'post',
    data
  })
}

//体格检查-查询
export const patientHealthCheckFindById = data => {
  return axios({
    url: 'v1/web/pc/patientHealthCheck/findById',
    method: 'post',
    data
  })
}
//个人信息查询
export const doctorFindSelf = data => {
  return axios({
    url: 'v1/web/pc/doctor/findSelf',
    method: 'post',
    data
  })
}
//个人信息修改
export const doctorUpdateSelf = data => {
  return axios({
    url: 'v1/web/pc/doctor/updateSelf',
    method: 'post',
    data
  })
}
//  BMI查询列表
export const patientBMI = data => {
  return axios({
    url: 'v1/web/pc/patientBMI/findListByCenterId',
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
  countEntityWithStartDateAndEndDate,
  patientCenterCountEntityForOthers,
  countEntityForOthersWithDueDate,
  patientCenterUpdateSelfPass,
  signOut,
  findListWithParamForFiling,
  patientSecondCheckFindListByCenterId,
  patientHighRiskGradeFindList,
  patientFourtyTwoFindByCenterId,
  patientCheckControllerFindForFiling,
  patientHusbandsFindForFiling,
  patientParturitionDetailFindForFiling,
  patientHealthCheckFindById,
  doctorFindSelf,
  doctorUpdateSelf,
  checkForWeekAndCellInsert,
  checkCellsUpdate,
  templateFindList,
  templateInsert,
  templateUpdate,
  pregnantPrenatalEducationAndClassFindList,
  pregnantPrenatalEducationAndClassInsert,
  pregnantPrenatalEducationClassAndCellInsert,
  patientBMI,
  pregnantPrenatalEducationClassAndCellFindList
}
