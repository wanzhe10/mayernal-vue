# mayernal-web

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



    /components

         /management          档案管理
             /management.vue  档案管理首页
            /newfile.vue      新建档案
            /personalCenter             个人中心
                    /personalCenter.vue  个人中心页
                    /recordNews.vue      新增复检记录
                    /spouseNews.vue      新增高危评估记录   

        /backstage          后台配置 
            /organization       机构信息维护
            /administrative     科室信息维护
            /personnel          人员信息维护
            /character          角色信息维护

        /information        基础数据维护
            /report              报告单解读维护
            /antenatalcare       产检信息维护
            /prenatalEducation   孕期宣教

        /templatedata       模板数据维护
            /set                   模板信息设置

        /statistics         数据统计
            /today                  今日复检人数
            /documented             已建孕妇档案
            /overtime               复检超时
            /berth                  预分娩床位统计

        /news               信息管理
            /personalDetails        用户个人信息
            /changePassword         修改密码

      
        /preview                    预览
            preview.vue             


            












