import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import index from '@/components/index'
import organization from '@/components/backstage/organization' /**vuex */
import administrative from '@/components/backstage/administrative' /**vuex */
import personnel from '@/components/backstage/personnel' /**vuex */
import character from '@/components/backstage/character' /**vuex */
import report from '@/components/information/report'
import antenatalcare from '@/components/information/antenatalcare'
import prenatalEducation from '@/components/information/prenatalEducation'
import set from '@/components/templatedata/set'
import today from '@/components/statistics/today'
import documented from '@/components/statistics/documented'
import overtime from '@/components/statistics/overtime'
import berth from '@/components/statistics/berth'
import management from '@/components/management/management'
import personalDetails from '@/components/news/personalDetails'
import changePassword from '@/components/news/changePassword'
import newfile from '@/components/management/newfile'
import personalCenter from '@/components/management/personalCenter/personalCenter'
import recordNews from '@/components/management/personalCenter/recordNews'
import spouseNews from '@/components/management/personalCenter/spouseNews'
import fortyTwoDay from '@/components/management/personalCenter/fortyTwoDay'
import preview from '@/components/preview/preview'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login,
    },
    { /* 首页(默认路由地址) */
      path: '/index',
      name: 'index',
      component: index,
      // redirect: '/management',
      meta: {
        title: '登录页面'
      },
      children: [{
          path: '/management',
          name: 'management',
          component: management,
          meta: {
            title: '档案管理'
          }
        }, {
          path: '/newfile',
          name: 'newfile',
          component: newfile,
          meta: {
            title: '新建孕妇档案'
          }
        }, {

          path: '/organization',
          name: 'organization',
          component: organization,
          meta: {
            title: '机构信息维护'
          }
        },
        {
          path: '/administrative',
          name: 'administrative',
          component: administrative,
          meta: {
            title: '科室信息维护'
          }
        },
        {
          path: '/personnel',
          name: 'personnel',
          component: personnel,
          meta: {
            title: '人员信息维护'
          }
        },
        {
          path: '/character',
          name: 'character',
          component: character,
          meta: {
            title: '角色信息维护'
          }
        },
        {
          path: '/report',
          name: 'report',
          component: report,
          meta: {
            title: '报告单解读维护'
          }
        },
        {
          path: '/antenatalcare',
          name: 'antenatalcare',
          component: antenatalcare,
          meta: {
            title: '产检信息维护'
          }
        },
        {
          path: '/prenatalEducation',
          name: 'prenatalEducation',
          component: prenatalEducation,
          meta: {
            title: '孕期宣教维护'
          }
        },
        {
          path: '/set',
          name: 'set',
          component: set,
          meta: {
            title: '模板信息维护'
          }
        },
        {
          path: '/today',
          name: 'today',
          component: today,
          meta: {
            title: '今日复检人数'
          }
        },
        {
          path: '/documented',
          name: 'documented',
          component: documented,
          meta: {
            title: '已建孕妇档案'
          }
        },
        {
          path: '/overtime',
          name: 'overtime',
          component: overtime,
          meta: {
            title: '复检超时'
          }
        },
        {
          path: '/berth',
          name: 'berth',
          component: berth,
          meta: {
            title: '预分娩床位统计'
          }
        },

        {
          path: '/personalDetails',
          name: 'personalDetails',
          component: personalDetails,
          meta: {
            title: '用户个人信息'
          }
        },
        {
          path: '/changePassword',
          name: 'changePassword',
          component: changePassword,
          meta: {
            title: '修改密码'
          }
        },
        {
          path: '/personalCenter',
          name: 'personalCenter',
          component: personalCenter,
          meta: {
            title: '个人中心'
          }
        },
        {
          path: '/preview',
          name: 'preview',
          component: preview,
          meta: {
            title: '预览'
          }
        },
        {
          path: '/recordNews',
          name: 'recordNews',
          component: recordNews,
          meta: {
            title: '新增复检记录'
          }
        },
        {
          path: '/spouseNews',
          name: 'spouseNews',
          component: spouseNews,
          meta: {
            title: '新增高危评估'
          }
        },
        {
          path: '/fortyTwoDay',
          name: 'fortyTwoDay',
          component: fortyTwoDay,
          meta: {
            title: '新增产后42天'
          }
        },
      ]
    }
  ]
})
