<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="clearfix">
      <div class="headerBox clearfix">
        <img
          src="../assets/login.png"
          alt="围产期建档评估管理系统"
        >
        <span class="characterFont">{{tittleName}}</span>
        <div class="headerrightBox">
          <p class="welcome">欢迎<i
              class="doctorName"
              v-html="userName"
            ></i>
          </p>
          <div
            class="exitBtn"
            @click="logOut"
          >
            <i class="exitIcon"></i>
            <span>退出登录</span>
          </div>
        </div>
      </div>
    </el-header>
    <!-- 左面导航栏 -->
    <el-container>
      <el-aside>
        <el-col :span="12">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            active-text-color="#68b6e7"
            :unique-opened='true'
          >
            <el-menu-item index="1">
              <router-link
                :to="{path: 'management'}"
                v-if="$route.meta.keepAlive"
              >
                <div
                  class=" headline headline1"
                  @click="seticon()"
                >
                  <img
                    src="../assets/icon1.png"
                    alt=" 档案管理"
                    class="seticon"
                  >
                  <span @click="tittleFont($event)">档案管理</span>
                </div>
              </router-link>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <img
                  src="../assets/icon2.png"
                  alt=" 后台配置"
                  class="seticon"
                >
                <span @click="tittleFont($event)">后台配置</span>
              </template>
              <el-menu-item-group>
                <!-- <router-link :to="{path: 'organization'}"> -->
                  <li @click="backgroundConfiguration(0)">
                    <el-menu-item index="2-1">机构信息维护</el-menu-item>
                  </li>
                <!-- </router-link> -->
                <!-- <router-link :to="{path: 'administrative'}"> -->
                  <li @click="backgroundConfiguration(1)">
                    <el-menu-item index="2-2">科室信息维护</el-menu-item>
                  </li>
                <!-- </router-link> -->
                <!-- <router-link :to="{path: 'personnel'}"> -->
                  <li @click="backgroundConfiguration(2)">
                    <el-menu-item index="2-3">人员信息维护</el-menu-item>
                  </li>
                <!-- </router-link> -->
                <!-- <router-link :to="{path: 'character'}"> -->
                  <li @click="backgroundConfiguration(3)">
                    <el-menu-item index="2-4">角色信息维护</el-menu-item>
                  </li>
                <!-- </router-link> -->
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <img
                  src="../assets/icon3.png"
                  alt="基础数据维护"
                  class="managementicon  seticon"
                >
                <span @click="tittleFont($event)">基础数据维护</span>
              </template>
              <el-menu-item-group>
                <router-link :to="{path: 'report'}">
                  <li @click="basicData">
                    <el-menu-item index="3-1"> 报告单解读维护</el-menu-item>
                  </li>
                </router-link>
                <router-link :to="{path: 'antenatalcare'}">

                  <li @click="basicData">
                    <el-menu-item index="3-2">产检信息维护</el-menu-item>
                  </li>

                </router-link>
                <router-link :to="{path: 'prenatalEducation'}">
                  <li @click="basicData">
                    <el-menu-item index="3-3">孕期宣教维护</el-menu-item>
                  </li>

                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <img
                  src="../assets/icon4.png"
                  alt="模板数据维护"
                  class="managementicon seticon"
                >
                <span @click="tittleFont($event)">模板数据维护</span>
              </template>
              <el-menu-item-group>
                <router-link :to="{path: 'set'}">
                  <li @click="templateStatistics">
                    <el-menu-item index="4-1">模板信息维护</el-menu-item>
                  </li>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <img
                  src="../assets/icon5.png"
                  alt="数据统计"
                  class="managementicon seticon"
                >
                <span @click="tittleFont($event)">数据统计</span>
              </template>
              <el-menu-item-group>
                <router-link :to="{path: 'today'}">
                  <li @click="dataStatistics">
                    <el-menu-item index="5-1">今日复检人数</el-menu-item>
                  </li>
                </router-link>
                <router-link :to="{path: 'documented'}">
                  <li @click="dataStatistics">
                    <el-menu-item index="5-2">已建孕妇档案</el-menu-item>
                  </li>
                </router-link>
                <router-link :to="{path: 'overtime'}">
                  <li @click="dataStatistics">
                    <el-menu-item index="5-3">复检超时</el-menu-item>
                  </li>
                </router-link>
                <router-link :to="{path: 'berth'}">
                  <li @click="dataStatistics">
                    <el-menu-item index="5-4"> 预分娩床位统计</el-menu-item>
                  </li>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <img
                  src="../assets/icon6.png"
                  alt="信息管理"
                  class="managementicon seticon"
                >
                <span @click="tittleFont($event)">信息管理</span>
              </template>
              <el-menu-item-group>
                <router-link :to="{path: 'personalDetails'}">
                  <li @click="informationBtn">
                    <el-menu-item index="6-1">用户个人信息</el-menu-item>
                  </li>
                </router-link>
                <router-link :to="{path: 'changePassword'}">
                  <li @click="informationBtn">
                    <el-menu-item index="6-2">修改密码</el-menu-item>
                  </li>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <!-- 右部分（组件部分） -->
      <el-container>
        <el-main>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>

        </el-main>
        <!-- 底部 -->
        <el-footer>
          <p class="footerNews">Copyright © 2018 医来医往(北京)科技有限公司</p>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import $ from "jquery";
export default {
  name: "home",
  data() {
    return {
      userName: "",
      tittleName: "档案管理"
    };
  },
  mounted() {
    let username = localStorage.getItem("mayernal-web-userName");
    this.userName = username;
  },
  methods: {
    backgroundConfiguration(index) {
      this.tittleName = "后台配置";
      if (index === 0) {
        this.$router.push('organization')
      } else if (index === 1) {
        this.$router.push('administrative')
      } else if (index === 2) {
        this.$router.push('personnel')
      } else {
        this.$router.push('character')
      }
      
    },
    basicData() {
      this.tittleName = "基础数据维护";
    },
    templateStatistics() {
      this.tittleName = "模板数据统计";
      // $(".characterFont").html('模板数据统计');
    },
    dataStatistics() {
      this.tittleName = "数据统计";
      //  $(".characterFont").html('数据统计');
    },
    informationBtn() {
      this.tittleName = "信息管理";
      // $(".characterFont").html('信息管理');
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
      // console.log(keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    tittleFont(event) {
      var event = event || window.event;
      this.tittleName = event.target.innerHTML;
      // $(".characterFont").html(event.target.innerHTML);
    },
    seticon() {
      $(".seticon").attr("src");
      // console.log($(".seticon").attr("src"));
    },
    logOut() {
      let self = this;
      let token = localStorage.getItem("mayernal-web-token");
      this.$api
        .signOut({
          token: token
        })
        .then(res => {
          // console.log(res);
          if (res.status === "20200") {
            localStorage.clear();
            self.$router.push({ name: "login" });
          } else {
            // this.$Message.info(res.desc);
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style lang="less" scoped>
.clearfix:after {
  content: ".";
  width: 0;
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
  overflow: hidden;
  zoom: 1;
}
.el-header {
  padding: 0px !important;
  height: 84px !important;
  .headerBox {
    width: 100%;
    min-width: 1200px;
    height: 84px;
    line-height: 84px;
    position: relative;
    background-color: #fff;
  }
  .characterFont {
    color: #333333;
    font-size: 18px;
    margin-left: 220px;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .clearfix:after {
    content: ".";
    width: 0;
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
    overflow: hidden;
    zoom: 1;
  }
  .headerrightBox {
    float: right;
    margin-right: 20px;
  }
  .welcome {
    display: inline-block;
    border-right: 2px solid #888888;
    height: 16px;
    color: 333333;
    font-size: 16px;
    line-height: 16px;
    margin-right: 30px;
    padding-right: 10px;
  }
  .doctorName {
    font-style: normal;
    color: 333333;
    font-size: 16px;
  }
  .el-submenu__title * {
    font-size: 16px;
    vertical-align: middle;
  }
  .exitBtn {
    position: relative;
    display: inline-block;
  }
  .exitBtn:hover {
    cursor: pointer;
  }
  .exitIcon {
    position: absolute;
    background: url("../assets/exit.png") no-repeat 0 0;
    top: 35px;
    left: -22px;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;
  }
}
.el-aside {
  margin-bottom: 74px;
  width: 192px !important;
  background-color: #fff;
  .headline {
    height: 52px;
    line-height: 52px;
    font-size: 16px;
    color: #333333;
    position: relative;
    vertical-align: middle;
  }
}
.el-submenu__title {
  background-color: #f0f8fd;
  margin: 1px 0px;
  padding-right: 0px;
  font-size: 16px;
}
//   }

.el-main {
  //   background-color: #e9eef3;
  margin: 14px;
  padding: 0px;
  color: #333;
  //   text-align: center;
  //   line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-col-12 {
  width: 100%;
}
.el-submenu .el-menu-item {
  min-width: 160px;
}
.seticon {
  width: 20px;
  height: 17px;
  margin-right: 10px;
  top: 0;
  left: 0;
}
.el-submenu__icon-arrow {
  right: 14px !important;
}
.footerNews {
  text-align: center;
  margin-top: 20px;
}
// .el-date-editor.el-input,
// .el-date-editor.el-input__inner {
//   width: 260px;
// }
// .el-tabs__nav-scroll {
//   height: 64px;
//   line-height: 64px;
//   background-color: #fff;
//   color: #333333;
// }
// .el-tabs__item.is-active {
//   color: #68b6e7;
// }
// .el-tabs__item:hover {
//   color: #68b6e7;
//   cursor: pointer;
// }
// .el-tabs__active-bar {
//   background-color: #68b6e7;
// }
// .el-tabs__nav {
//   margin-left: 26px;
// }
.el-submenu__title {
  font-size: 16px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.el-submenu__title * {
  font-size: 16px;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
.router-link-active {
  color: red;
  background-color: #ccc;
}
</style>
