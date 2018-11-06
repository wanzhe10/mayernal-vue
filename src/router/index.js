import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import organization from '@/components/backstage/organization' /**vuex */
import administrative from '@/components/backstage/administrative' /**vuex */
import personnel from '@/components/backstage/personnel' /**vuex */
import character from '@/components/backstage/character' /**vuex */
import report from '@/components/information/report'
import antenatalcare from '@/components/information/antenatalcare'
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
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/organization',
          name: 'organization',
          component: organization
        },
        {
          path: '/administrative',
          name: 'administrative',
          component: administrative
        },
        {
          path: '/personnel',
          name: 'personnel',
          component: personnel
        },
        {
          path: '/character',
          name: 'character',
          component: character
        },
        {
          path: '/report',
          name: 'report',
          component: report
        },
        {
          path: '/antenatalcare',
          name: 'antenatalcare',
          component: antenatalcare
        },
         {
           path: '/set',
           name: 'set',
           component: set
         },
          {
            path: '/today',
            name: 'today',
            component: today
          },
           {
             path: '/documented',
             name: 'documented',
             component: documented
           },
            {
              path: '/overtime',
              name: 'overtime',
              component: overtime
            },
             {
               path: '/berth',
               name: 'berth',
               component: berth
             },
             {
               path: '/management',
               name: 'management',
               component: management
             }, 
             {
               path: '/personalDetails',
               name: 'personalDetails',
               component: personalDetails
             }, 
             {
               path: '/changePassword',
               name: 'changePassword',
               component: changePassword
             }, 
             {
               path: '/newfile',
               name: 'newfile',
               component: newfile
             }, {
               path: '/personalCenter',
               name: 'personalCenter',
               component: personalCenter
             }
      ]
    }
  ]
})
