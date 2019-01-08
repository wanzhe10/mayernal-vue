<template>
  <div class="newfileBox">
    <el-tabs
      v-model="activeName"
      class="aaaa">
      <el-tab-pane
        label="孕妇基本信息"
        name="first" >
        <!-- 孕妇基本信息 -->
        <div
          class="pregnantNewsBox"
          :id="essentialid"
          :checkId='checkId'
        >
          <div class="mgr70">
            <h3>孕妇姓名（必填）</h3>
            <el-input
              type="text"
              class="pregnantName"
              placeholder="请输入姓名"
              v-model="essentialInformation.name"
            >
               <i slot="suffix" class="el-input__icon el-icon-circle-close" v-show="pregnantNameIcon"></i>
            </el-input>
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70 bindingBox">
            <h3>就诊卡号（必填）</h3>
            <input
              type="text"
              class="pregnantFN"
              placeholder="请输入就诊卡号"
              v-model="essentialInformation.number"
            >
            <p class="redFont">此项为必填项！</p>
            <div class="bindingBtn">卡号绑定</div>
          </div>
          <div class="mgr0">
            <h3>手机号</h3>
            <input
              type="text"
              class="pregnantPhone"
              placeholder="请输入手机号"
              v-model="essentialInformation.telephone"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>证件类型（必填）</h3>
            <el-select
              v-model="essentialInformation.idCardType"
              placeholder="请选择"
            >
              <el-option
                v-for="item in idCardSelect"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>

            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>身份证号（必填）</h3>
            <input
              type="tel"
              class="pregnantIdCard"
              placeholder="请输入身份证号码"
              v-model="essentialInformation.idCard"
              @blur='pregnantIdCarda'
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0 birthBox">
            <h3>出生年月（自动获取）</h3>
            <input
              type="text"
              class="layui-input pregnantDateBirth"
              placeholder=""
              id="test1"
              readonly="readonly"
              v-model="essentialInformation.birthdayDate"
            >
            <!-- <h5 class="birth">
              <span class="birth_sex" v-model="essentialInformation.sex">女</span>
            </h5> -->
            <h5 class="birth">
              <span
                class="birth_sex"
                v-model="essentialInformation.sex"
              >{{essentialInformation.sex}}</span>
              <span
                class="birth_age"
                v-model="essentialInformation.age"
              >{{essentialInformation.age}}岁</span>
            </h5>
          </div>
          <div class="mgr70">
            <h3>结婚年龄（岁）</h3>
            <input
              type="text"
              class="pregnantMarriageAge"
              placeholder="请输入结婚年龄"
              v-model="essentialInformation.marryAge"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>孕前体重（kg）</h3>
            <input
              type="text"
              class="pregnantWeight"
              placeholder="请输入年龄"
              v-model="essentialInformation.lastWeight"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="wire"></div>
          <div class="mgr70">
            <h3>婚姻状况</h3>
            <el-select
              v-model="essentialInformation.marryType"
              placeholder="请选择"
            >
              <el-option
                v-for="item in marryType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="mgr70">
            <h3>婚检</h3>
            <el-select
              v-model="essentialInformation.marryCheck"
              placeholder="请选择"
            >
              <el-option
                v-for="item in marryCheck"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="mgr0">
            <h3>近半年避孕方法</h3>
            <el-select
              v-model="essentialInformation.contraception"
              placeholder="请选择"
            >
              <el-option
                v-for="item in contraception"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="mgr70">
            <h3>文化程度</h3>
            <el-select
              v-model="essentialInformation.education"
              placeholder="请选择"
            >
              <el-option
                v-for="item in education"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="mgr70">
            <h3>民族</h3>
            <el-select
              v-model="essentialInformation.nation"
              placeholder="请选择"
            >
              <el-option value="汉族">汉族</el-option>
              <el-option value="蒙古族">蒙古族</el-option>
              <el-option value="回族">回族</el-option>
              <el-option value="藏族">藏族</el-option>
              <el-option value="维吾尔族">维吾尔族</el-option>
              <el-option value="苗族">苗族</el-option>
              <el-option value="彝族">彝族</el-option>
              <el-option value="壮族">壮族</el-option>
              <el-option value="布依族">布依族</el-option>
              <el-option value="朝鲜族">朝鲜族</el-option>
              <el-option value="满族">满族</el-option>
              <el-option value="侗族">侗族</el-option>
              <el-option value="瑶族">瑶族</el-option>
              <el-option value="白族">白族</el-option>
              <el-option value="土家族">土家族</el-option>
              <el-option value="哈尼族">哈尼族</el-option>
              <el-option value="哈萨克族">哈萨克族</el-option>
              <el-option value="傣族">傣族</el-option>
              <el-option value="黎族">黎族</el-option>
              <el-option value="傈僳族">傈僳族</el-option>
              <el-option value="佤族">佤族</el-option>
              <el-option value="畲族">畲族</el-option>
              <el-option value="高山族">高山族</el-option>
              <el-option value="拉祜族">拉祜族</el-option>
              <el-option value="水族">水族</el-option>
              <el-option value="东乡族">东乡族</el-option>
              <el-option value="纳西族">纳西族</el-option>
              <el-option value="景颇族">景颇族</el-option>
              <el-option value="柯尔克孜族">柯尔克孜族</el-option>
              <el-option value="土族">土族</el-option>
              <el-option value="达斡尔族">达斡尔族</el-option>
              <el-option value="仫佬族">仫佬族</el-option>
              <el-option value="羌族">羌族</el-option>
              <el-option value="布朗族">布朗族</el-option>
              <el-option value="撒拉族">撒拉族</el-option>
              <el-option value="毛南族">毛南族</el-option>
              <el-option value="仡佬族">仡佬族</el-option>
              <el-option value="锡伯族">锡伯族</el-option>
              <el-option value="阿昌族">阿昌族</el-option>
              <el-option value="普米族">普米族</el-option>
              <el-option value="塔吉克族">塔吉克族</el-option>
              <el-option value="怒族">怒族</el-option>
              <el-option value="乌孜别克族">乌孜别克族</el-option>
              <el-option value="俄罗斯族">俄罗斯族</el-option>
              <el-option value="鄂温克族">鄂温克族</el-option>
              <el-option value="德昂族">德昂族</el-option>
              <el-option value="保安族">保安族</el-option>
              <el-option value="裕固族">裕固族</el-option>
              <el-option value="京族">京族</el-option>
              <el-option value="塔塔尔族">塔塔尔族</el-option>
              <el-option value="独龙族">独龙族</el-option>
              <el-option value="鄂伦春族">鄂伦春族</el-option>
              <el-option value="赫哲族">赫哲族</el-option>
              <el-option value="门巴族">门巴族</el-option>
              <el-option value="珞巴族">珞巴族</el-option>
              <el-option value="基诺族">基诺族</el-option>
            </el-select>
          </div>
          <br />
          <div class="mgr70">
            <h3>职业</h3>
            <el-select
              v-model="essentialInformation.job"
              placeholder="请选择"
            >
              <el-option
                v-for="item in job"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="mgr70">
            <h3>工作单位</h3>
            <input
              type="text"
              class="work"
              placeholder="请输入工作单位"
              v-model="essentialInformation.jobCompanyName"
            >
          </div>
          <div class="wire"></div>
          <div class="mgr70">
            <h3>户口所在地</h3>
            <el-cascader
              :options="options"
              v-model="selectedOptions1"
              @change="handleChange1"
            ></el-cascader>
          </div><br>
          <div class="mgr70">
            <h3>现住地址</h3>
            <el-cascader
              :options="options"
              v-model="selectedOptions2"
              @change="handleChange2"
            ></el-cascader>
            <input
              type="text"
              placeholder="请输入详细地址"
              class="presentAddress mgl16"
              v-model="essentialInformation.newAddressRemarks"
            >
          </div>
          <div class="flaxBox">
            <div class="flaxBoxPart">
              <input
                type="button"
                @click="basicBtn"
                value="保 存"
                class="basicBtn"
              >
            </div>
          </div>
        </div>
      </el-tab-pane>

         <el-tab-pane
        label="孕妇基本信息2"
        name="first2" >
        <!-- 孕妇基本信息 -->
        <div
          class="pregnantNewsBox"
          :id="essentialid"
          :checkId='checkId'>

<el-form :model="essentialInformation" :rules="rules" ref="essentialInformation" label-position='top' label-width="100px" class="demo-essentialInformation">
     <div class="mgr70">
         <el-form-item label="孕妇姓名" prop="name">
   <el-input
              type="text"
              class="pregnantName"
              placeholder="请输入姓名"
              v-model="essentialInformation.name"
            >   </el-input>
  </el-form-item>
          </div>

           <div class="mgr70 bindingBox">
              <el-form-item label="就诊卡号（必填）" prop="name">
            <el-input
              type="text"
              class="pregnantFN"
              placeholder="请输入就诊卡号"
              v-model="essentialInformation.number"
            ></el-input>
              </el-form-item>
            <!-- <div class="bindingBtn">卡号绑定</div> -->
          </div>
          <div class="mgr0">
             <el-form-item label="手机号" prop="name">
  <el-input
              type="text"
              class="pregnantPhone"
              placeholder="请输入手机号"
              v-model="essentialInformation.telephone"
            >
               </el-input>
              </el-form-item>
          </div>

          <div class="mgr70">
             <el-form-item label="证件类型（必填）" prop="name">
            <el-select
              v-model="essentialInformation.idCardType"
              placeholder="请选择"
            >
              <el-option
                v-for="item in idCardSelect"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
 </el-form-item>
          </div>
          <div class="mgr70">
    <el-form-item label="身份证号（必填）" prop="name">
  <el-input
                 type="tel"
              class="pregnantIdCard"
              placeholder="请输入身份证号码"
              v-model="essentialInformation.idCard"
            >
               </el-input>
              </el-form-item>
          </div>
          <div class="mgr0 birthBox">
              <el-form-item label="出生年月（自动获取）" prop="name">
  <el-input
               type="text"
              class="layui-input pregnantDateBirth"
              placeholder=""
              id="test1"
              readonly="readonly"
              v-model="essentialInformation.birthdayDate"
            >
               </el-input>
              </el-form-item>
            <h5 class="birth">
              <span
                class="birth_sex"
                v-model="essentialInformation.sex"
              >{{essentialInformation.sex}}</span>
              <span
                class="birth_age"
                v-model="essentialInformation.age"
              >{{essentialInformation.age}}岁</span>
            </h5>
          </div>
          <div class="mgr70">
             <el-form-item label="结婚年龄（岁）" prop="name">
  <el-input
             type="text"
              class="pregnantMarriageAge"
              placeholder="请输入结婚年龄"
              v-model="essentialInformation.marryAge"
            >
               </el-input>
              </el-form-item>
          </div>
          <div class="mgr70">
               <el-form-item label="孕前体重（kg）" prop="name">
  <el-input
              type="text"
              class="pregnantWeight"
              placeholder="请输入年龄"
              v-model="essentialInformation.lastWeight"
            >
               </el-input>
              </el-form-item>
          </div>
            <div class="wire"></div>
<!-- 
    <el-select v-model="essentialInformation.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item> -->

     <div class="mgr70">
         <el-form-item label="婚姻状况" prop="region">
            <el-select
              v-model="essentialInformation.marryType"
              placeholder="请选择"
            >
              <el-option
                v-for="item in marryType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
              </el-form-item>
          </div>
          <div class="mgr70">
              <el-form-item label="婚检" prop="region">
            <el-select
              v-model="essentialInformation.marryCheck"
              placeholder="请选择"
            >
              <el-option
                v-for="item in marryCheck"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
              </el-form-item>
          </div>
          <div class="mgr0">
               <el-form-item label="近半年避孕方法" prop="region">
            <el-select
              v-model="essentialInformation.contraception"
              placeholder="请选择"
            >
              <el-option
                v-for="item in contraception"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
              </el-form-item>
          </div>
          <div class="mgr70">
             <el-form-item label="文化程度" prop="region">
            <el-select
              v-model="essentialInformation.education"
              placeholder="请选择"
            >
              <el-option
                v-for="item in education"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
              </el-form-item>
          </div>
            <div class="mgr70">
                <el-form-item label="民族" prop="region">
            <h3></h3>
            <el-select
              v-model="essentialInformation.nation"
              placeholder="请选择"
            >
               <el-option
                v-for="item in nation"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
              </el-form-item>
          </div>
           <br />
   <div class="mgr70">
         <el-form-item label="职业" prop="region">
            <el-select
              v-model="essentialInformation.job"
              placeholder="请选择"
            >
              <el-option
                v-for="item in job"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
             </el-form-item>
          </div>
          <div class="mgr70">
                         <el-form-item label="工作单位" prop="name">
  <el-input
             type="text"
              class="work"
              placeholder="请输入工作单位"
              v-model="essentialInformation.jobCompanyName"
            >
               </el-input>
              </el-form-item>
          </div>
           <div class="wire"></div>
   
          <div class="mgr70">
              <el-form-item label="户口所在地" prop="region">
            <el-cascader
              :options="options"
              v-model="selectedOptions1"
              @change="handleChange1"
            ></el-cascader>
             </el-form-item>

          </div><br>
            
          <div class="mgr70">
              <el-form-item label="现住地址" prop="region">
            <el-cascader
              :options="options"
              v-model="selectedOptions2"
            ></el-cascader>
               </el-form-item>
 <el-form-item label="现住地址" prop="name">
            <el-input
              type="text"
              placeholder="请输入详细地址"
              class="presentAddress mgl16"
              v-model="essentialInformation.newAddressRemarks"
            > </el-input>
 </el-form-item>
          </div>
  <el-form-item>
    <el-button type="primary" @click="submitForm('essentialInformation')">立即创建</el-button>
    <!-- <el-button @click="resetForm('essentialInformation')">重置</el-button> -->
  </el-form-item>
</el-form>


       
         
        
       
        
         
       
    
          <div class="flaxBox">
            <div class="flaxBoxPart">
              <input
                type="button"
                @click="basicBtn"
                value="保 存"
                class="basicBtn"
              >
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import $ from "jquery";
import { regionData, CodeToText, TextToCode } from "element-china-area-data";
import { RegExpObj, analyzeIDCard } from "../../../static/root";
export default {
  data() {
    return {
      activeName: "first2",
      // 孕妇基本信息证件类型
      idCardSelect: [
        {
          value: "0",
          label: "居民身份证"
        },
        {
          value: "1",
          label: "护照"
        }
      ],
      // 近半年避孕方法
      contraception: [
        {
          value: "0",
          label: "未避孕"
        },
        {
          value: "1",
          label: "口服避孕药"
        },
        {
          value: "2",
          label: "避孕套"
        },
        {
          value: "3",
          label: "避孕膜"
        },
        {
          value: "4",
          label: "其他"
        }
      ],
      // 孕妇婚检
      marryCheck: [
        {
          value: "0",
          label: "没有"
        },
        {
          value: "1",
          label: "有"
        }
      ],
      // 孕妇文化程度
      education: [
        {
          value: "0",
          label: "硕士以上"
        },
        {
          value: "1",
          label: "本科"
        },
        {
          value: "2",
          label: "大专"
        },
        {
          value: "3",
          label: "中专及高中"
        },
        {
          value: "4",
          label: "初中"
        },
        {
          value: "5",
          label: "文盲"
        }
      ],
      // 孕妇职业
      job: [
        {
          value: "0",
          label: "无"
        },
        {
          value: "1",
          label: "农、牧、渔"
        },
        {
          value: "2",
          label: "干部、职员"
        },
        {
          value: "3",
          label: "医院、科技"
        },
        {
          value: "4",
          label: "工人"
        },
        {
          value: "5",
          label: "个体"
        },
        {
          value: "6",
          label: "家务"
        }
      ],
      // 孕妇婚姻状况
      marryType: [
        {
          value: "0",
          label: "初婚"
        },
        {
          value: "1",
          label: "再婚"
        },
        {
          value: "2",
          label: "其他"
        }
      ],
      // 民族
      nation:[
              {value:"汉族",label:"汉族"},
              {value:"蒙古族",label:"蒙古族"},
              {value:"回族",label:"回族"},
              {value:"藏族",label:"藏族"},
              {value:"维吾尔族",label:"维吾尔族"},
              {value:"苗族",label:"苗族"},
              {value:"彝族",label:"彝族"},
              {value:"壮族",label:"壮族"},
              {value:"布依族",label:"布依族"},
              {value:"朝鲜族",label:"朝鲜族"},
              {value:"满族",label:"满族"},
              {value:"侗族",label:"侗族"},
              {value:"瑶族",label:"瑶族"},
              {value:"白族",label:"白族"},
              {value:"土家族",label:"土家族"},
              {value:"哈尼族",label:"哈尼族"},
              {value:"哈萨克族",label:"哈萨克族"},
              {value:"傣族",label:"傣族"},
              {value:"黎族",label:"黎族"},
              {value:"傈僳族",label:"傈僳族"},
              {value:"佤族",label:"佤族"},
              {value:"畲族",label:"畲族"},
              {value:"高山族",label:"高山族"},
              {value:"拉祜族",label:"拉祜族"},
              {value:"水族",label:"水族"},
              {value:"东乡族",label:"东乡族"},
              {value:"纳西族",label:"纳西族"},
              {value:"景颇族",label:"景颇族"},
              {value:"柯尔克孜族",label:"柯尔克孜族"},
              {value:"土族",label:"土族"},
              {value:"达斡尔族",label:"达斡尔族"},
              {value:"仫佬族",label:"仫佬族"},
              {value:"羌族",label:"羌族"},
              {value:"布朗族",label:"布朗族"},
              {value:"撒拉族",label:"撒拉族"},
              {value:"毛南族",label:"毛南族"},
              {value:"仡佬族",label:"仡佬族"},
              {value:"锡伯族",label:"锡伯族"},
              {value:"阿昌族",label:"阿昌族"},
              {value:"普米族",label:"普米族"},
              {value:"塔吉克族",label:"塔吉克族"},
              {value:"怒族",label:"怒族"},
              {value:"乌孜别克族",label:"乌孜别克族"},
              {value:"俄罗斯族",label:"俄罗斯族"},
              {value:"鄂温克族",label:"鄂温克族"},
              {value:"德昂族",label:"德昂族"},
              {value:"保安族",label:"保安族"},
              {value:"裕固族",label:"裕固族"},
              {value:"京族",label:"京族"},
              {value:"塔塔尔族",label:"塔塔尔族"},
              {value:"独龙族",label:"独龙族"},
              {value:"鄂伦春族",label:"鄂伦春族"},
              {value:"赫哲族",label:"赫哲族"},
              {value:"门巴族",label:"门巴族"},
              {value:"珞巴族",label:"珞巴族"},
              {value:"基诺族",label:"基诺族"},
      ],
      // 户口所在地
      registered: [
        {
          value: "0",
          label: "北京"
        }
      ],
      isShow: false,
      options: regionData, //省市区联动
      selectedOptions1: [], //基本信息-户口所在地
      selectedOptions2: [], //基本信息-现住地址
      selectedOptions3: [], //配偶信息-现住地址
      xq1: [],
      xq2: [],
      xq3: [],
      //孕妇基本信息数据
      essentialInformation: {
        name: "", //		姓名
        number: "", //		就诊号
        idCardType: "", //		身份类型
        idCard: "", //		证件号码
        telephone: "", //		电话
        birthdayDate: "", //		出生日期
        age: "", //		年龄
        sex: "", //		性别
        education: "", //		教育程度
        marryAge: "", //		结婚年龄
        nation: "", //		民族
        lastWeight: "", //		孕前体重
        contraception: "", //		孕检
        job: "", //		工作
        marryType: "", //		婚姻状况
        marryCheck: "", //		婚检
        jobCompanyName: "", //		工作单位
        idCardAddressProvince: "", //		身份证所在地-省
        idCardAddressCity: "", //		身份证所在地-市
        idCardAddressCounty: "", //		身份证所在地-县
        idCardAddressRemarks: "", //		身份证所在地-其他
        newAddressProvince: "", //		现住址-省
        newAddressCity: "", //		现住址-市
        newAddressCounty: "", //		现住址-县
        newAddressRemarks: "" //		现住址-其他
      },
      essentialid: "", //patientCenterId
      checkId: "", //基本信息id
//  校验
      pregnantNameIcon:true, //孕妇姓名

    
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      
    };
    
  },
 
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

 
    // ------------------------孕妇基本信息star------------------------------------
    // 孕妇基本信息-身份证号计算年龄、性别、出生年月
    pregnantIdCarda() {
     if (!RegExpObj.Reg_IDCardNo.test(this.essentialInformation.idCard)) {
        this.$message.error("证件格式错误");
        this.essentialInformation.age = "";
        this.essentialInformation.sex = "";
        this.essentialInformation.birthdayDate = "";
        return;
      } else {
        let self = this;
        analyzeIDCard(this.essentialInformation.idCard, function requestData(
          isNull,
          sex,
          age,
          birth
        ) {
          self.essentialInformation.birthdayDate = birth;
          self.essentialInformation.age = age;
          self.essentialInformation.sex = sex;
          if (isNull == false) {
            return;
          } else {
            self.essentialInformation.age = age;
            self.essentialInformation.sex = sex;
          }
        });
      }
    },

    // 孕妇一般信息保存按钮
    basicBtn() {
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.essentialInformation.idCardAddressProvince = this.selectedOptions1[0];
      this.essentialInformation.idCardAddressCity = this.selectedOptions1[1];
      this.essentialInformation.idCardAddressCounty = this.selectedOptions1[2];
      this.essentialInformation.newAddressProvince = this.selectedOptions2[0];
      this.essentialInformation.newAddressCity = this.selectedOptions2[1];
      this.essentialInformation.newAddressCounty = this.selectedOptions2[2];
      this.essentialInformation.token = token1;
      console.log(this.essentialInformation);
      this.patientCheckInsertForFiling(this.essentialInformation);
    },
    // 孕妇基本信息 --》户口所在地
    handleChange1(value) {
      console.log(value);
      this.xq1 =
        CodeToText[this.selectedOptions1[0]] +
        "" +
        CodeToText[this.selectedOptions1[1]] +
        "" +
        CodeToText[this.selectedOptions1[2]];

      console.log(this.xq1);
    },
    // 孕妇基本信息 --》现住地址
    handleChange2(value) {
      console.log(value);
      this.xq2 =
        CodeToText[this.selectedOptions2[0]] +
        "" +
        CodeToText[this.selectedOptions2[1]] +
        "" +
        CodeToText[this.selectedOptions2[2]];
    },

    // 基本信息-新增接口
    patientCheckInsertForFiling(obj) {
      this.$api
        .patientCheckInsertForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.essentialid = res.id;
            this.checkId = res.checkId;
          } else {
            $message.error("新增失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新增失败，请稍后重试");
        });
    },
     // ------------------------孕妇基本信息end------------------------------------

    // ------------------------公共js-----------------------------------
   // 弹框右上角关闭按钮
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 禁止滑动
    banSliding() {
      document.documentElement.style.overflow = "hidden";
    },
    // 允许滑动
    allowSliding() {
      document.documentElement.style.overflow = "scroll";
    }
  }
}
</script>

<style lang="less" scoped>
.mgl10 {
  margin-left: 10px;
}
.mgl24 {
  margin-left: 24px;
}
.mgl174 {
  margin-left: 174px;
}
.mgl16 {
  margin-left: 16px;
}
.mgl28 {
  margin-left: 28px;
}
.mgr0 {
  margin-right: 0px !important;
}
.mgr32 {
  margin-right: 32px !important;
}
.mgr34 {
  margin-right: 34px !important;
}
.mgr36 {
  margin-right: 38px !important;
}
.mgr38 {
  margin-right: 40px !important;
}
.mgr70 {
  margin-right: 70px !important;
}
.mgr76 {
  margin-right: 70px;
  display: inline-block;
}
.mgr77 {
  margin-right: 70px;
}
.mgr110 {
  margin-right: 110px;
}
.mgb12 {
  margin-bottom: 12px;
}
.w260 {
  width: 260px;
}
// 孕妇基本信息
.pregnantNewsBox {
  padding: 14px 24px 60px 26px;
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 1;
    bottom: 0px;
    left: 0;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
      .basicBtn {
        background-color: #f3f9fd;
        width: 160px;
        padding: 0px;
        border: none;
        margin-right: 126px;
      }
    }
  }
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  }
  // 孕妇基本信息块
  div {
    // margin-right: 70px;
    display: inline-block;
    h3 {
      font-size: 14px;
      color: #666666;
      margin: 10px 0;
    }
    input {
      width: 260px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 4px; // margin: 10px 0px;
      padding-left: 16px;
    }
    p {
      color: #fd4242;
      display: none;
    }
    .layui-unselect,
    .layui-form-select {
      width: 260px;
      height: 40px; // margin: 10px 0px;
      input {
        background-color: #f6f6f6;
      }
    }
  }
  div:nth-child(3n) {
    margin-right: 0px;
  }
  // 绑定卡号
  .bindingBox {
    position: relative;
    .bindingBtn {
      position: absolute;
      top: 38px;
      right: 0;
      width: 72px;
      height: 40px;
      background-color: #68b6e7;
      color: #fff;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      border-radius: 4px;
    }
  } // 出生年月
  .birthBox {
    position: relative;
    .birth {
      position: absolute;
      top: 50px;
      right: 10px;
      display: inline;
      color: #666666;
      .birth_age {
        position: relative;
        &:before {
          content: " ";
          position: absolute;
          top: -10px;
          right: 34px;
          width: 1px;
          height: 38px;
          background: #cccccc;
        }
      }
      .birth_sex {
        margin-right: 16px;
        &:before {
          content: " ";
          position: absolute;
          top: -10px;
          right: 66px;
          width: 1px;
          height: 38px;
          background: #cccccc;
        }
      }
    }
  }
  .presentAddress {
    // position: absolute;
    bottom: 25px;
    left: 300px;
  }
}
.el-select {
  input {
    background-color: #f6f6f6;
    color: #333333;
  }
}

// 配偶一般信息模块
.spouseNewsBox {
  padding: 14px 24px 60px 26px;
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 1;
    bottom: 0px;
    left: 0;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
      .mateBtn {
        background-color: #f3f9fd;
        width: 160px;
        padding: 0px;
        border: none;
        margin-right: 126px;
      }
    }
  }
  div {
    display: inline-block;
    .displayNo {
      display: none;
    }
    h3 {
      font-size: 14px;
      color: #666666;
      margin: 10px 0;
    }
    input {
      width: 260px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding-left: 16px;
    }
    .redFont {
      color: #fd4242;
      display: none;
    }
    .layui-unselect,
    .layui-form-select {
      input {
        background-color: #f6f6f6;
      }
    }
  }
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  } // 绑定卡号
  // .bindingBox {
  //   position: relative;
  //   .bindingBtn {
  //     position: absolute;
  //     top: 38px;
  //     right: -76px;
  //     width: 72px;
  //     height: 40px;
  //     background-color: #68b6e7;
  //     color: #fff;
  //     font-size: 14px;
  //     line-height: 40px;
  //     text-align: center;
  //     border-radius: 4px;
  //   }
  // }
  // 出生年月
  .birthBox {
    position: relative;
    .birth {
      position: absolute;
      top: 50px;
      right: 10px;
      display: inline;
      color: #666666;
      .birth_age {
        position: relative;
        margin-right: 10px;
      }
      .birth_sex {
        margin-right: 8px;
        &:before {
          content: " ";
          position: absolute;
          top: -10px;
          right: 36px;
          width: 1px;
          height: 40px;
          background: #cccccc;
        }
      }
    }
  }
  //吸烟等三个模块
  .somkingBox {
    margin-top: 24px;
    margin-right: 70px;
    float: left;
    .somkingBoxTop {
      display: block;
      width: 260px;
      height: 52px;
      line-height: 52px;
      .somkingFont {
        width: 75px;
        height: 52px;
        background-color: #f6f6f6;
        text-align: center;
        line-height: 52px;
        float: left;
      }
      .somkingSelect {
        padding-left: 26px;
        width: 185px;
        float: left;
        .smkingYes {
          width: 50%;
          float: left;
          position: relative;
          &:before {
            content: " ";
            position: absolute;
            top: 15px;
            right: 18px;
            width: 1px;
            height: 20px;
            background: #cccccc;
          }
        }
        .smokingNo {
          float: left;
          width: 50%;
        }
        .layui-form-radio {
          line-height: 52px;
          margin: 0px;
          font-size: 0;
        }
      }
    }
  } // 吸烟显示隐藏等三个模块
  .somkingCirculationBox,
  .drinkCirculationBox,
  .history1CirculationBox {
    margin-top: 24px;
    width: 260px;
    position: relative;
    box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);
    p {
      font-size: 12px;
      color: #666666;
      margin-bottom: 12px;
    }
  } // 配偶吸烟显示隐藏快
  .somkingCirculationBox {
    // text-align: center;
    padding: 14px 18px 14px 18px;
    input {
      width: 224px;
      height: 32px;
    }
    .birth {
      position: absolute;
      top: 50px;
      right: 20px;
      display: inline;
      color: #666666;
      .bar_day {
        margin-right: 8px;
        &:before {
          content: " ";
          position: absolute;
          top: -7px;
          right: 52px;
          width: 1px;
          height: 30px;
          background: #cccccc;
        }
      }
    }
  } // 配偶饮酒显示隐藏块
  .drinkCirculationBox {
    padding: 13px 20px 13px 20px;
    .drinkOccasionally,
    .drinkOften {
      width: 80px;
      height: 32px;
      font-size: 14px;
      text-align: center;
      line-height: 32px;
      border: 1px solid #ccc;
      display: inline-block;
      border-radius: 4px;
    }
    .drinkOccasionally {
      margin-right: 50px;
    }
    .active {
      background-color: #68b6e7;
      color: #fff;
      border: none;
    }
  } // 配偶显示隐藏家族史块
  .history1CirculationBox {
    //  padding-top:24px;
    // padding: 10px 14px 5px 14px;
    // position: relative;
    // input {
    //   width: 226px;
    //   height: 32px;
    // }
    // p {
    //   margin-top: 12px;
    // }
    .seekIcon {
      background: url("/maternal-web/images/seek.png") no-repeat 0 0;
      width: 14px;
      height: 14px;
      background-size: 14px 14px;
      position: absolute;
      top: 20px;
      right: 30px;
    }
    .hideBox {
      li {
        float: left;
        width: 65px;
        height: 30px;
        background-color: #68b6e7;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 4px;
        margin-right: 12px;
        margin-bottom: 8px;
      }
    }
    .history1Select {
      // display: none;
      width: 226px;
      height: 200px;
      position: relative;
      overflow: hidden;
      ul {
        position: absolute;
        left: 0;
        top: 0;
        right: -17px;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        li {
          font-size: 14px;
          margin: 0;
          padding: 10px;
          border-bottom: 1px;
          border-bottom-style: solid;
          border-bottom-color: #999;
        }
        li:hover {
          background-color: #d4e8f5;
        }
      }
    }
  } // 配偶现住地址块
  .spouseSiteBox {
    p {
      margin-top: 24px;
      font-size: 14px;
      color: #666666;
      margin-bottom: 16px;
    }
  }
  .spouseResidenceAddress {
    bottom: 25px;
    left: 300px;
  }
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #68b6e7;
  background: #68b6e7;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #68b6e7;
}

// 孕产信息模块
.pregnancyNewsBox {
  padding: 14px 24px 120px 26px;
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 1;
    bottom: 0px;
    left: 0;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
      .pregnancyBtn {
        background-color: #f3f9fd;
        width: 160px;
        padding: 0px;
        border: none;
        margin-right: 126px;
      }
    }
  }
  .dynamicTable {
    th {
      text-align: center;
    }
    td {
      text-align: center;
    }
  }
  div {
    display: inline-block;
    .displayNo {
      display: none;
    }
    h3 {
      font-size: 14px;
      color: #666666;
      margin: 10px 0;
    }
    input {
      width: 260px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding-left: 16px;
    }
    .redFont {
      color: #fd4242;
      display: none;
    }
  }
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  }
  .gestationalWeeksBox {
    margin-right: 0;
    width: 260px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    div {
      display: inline-block;
      width: 125px; //    float: left;
      text-align: center;
      line-height: 40px;
      margin-right: 0px !important;
    }
    .newAgeOfMenarche {
      border-right: 1px solid #ccc;
    }
  }
  .layui-table {
    margin: 0px;
    th {
      height: 46px;
      font-size: 14px;
      color: #333333;
      text-align: center;
      background-color: #f6f6f6;
    }
    tr {
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    tr:nth-child(2n) {
      input {
        background-color: #f6f6f6 !important;
      }
    }
    td {
      height: 46px;
      a {
        color: #68b6e7;
      }
    }
  }
  .layui-table tbody tr:nth-child(2n-1):hover {
    background: none !important;
  }
  .layui-table[lay-even] tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  .somkingBox {
    float: left;
    margin-top: 24px;
    margin-right: 70px;
    .somkingBoxTop {
      display: block;
      width: 260px;
      height: 52px;
      line-height: 52px;
      .somkingFont {
        width: 75px;
        height: 52px;
        background-color: #f6f6f6;
        text-align: center;
        line-height: 52px;
        float: left;
      }
      .somkingSelect {
        padding-left: 26px;
        width: 185px;
        float: left;
        .smkingYes {
          width: 50%;
          float: left;
          position: relative;
          &:before {
            content: " ";
            position: absolute;
            top: 15px;
            right: 18px;
            width: 1px;
            height: 20px;
            background: #cccccc;
          }
        }
        .smokingNo {
          float: left;
          width: 50%;
        }
        .layui-form-radio {
          line-height: 52px;
          margin: 0px;
          font-size: 0;
        }
      }
    }
    // 孕产信息隐藏快
    .contactPoisonBox,
    .virusInfectionBox,
    .familyHistoryBox {
      margin-top: 24px;
      width: 260px;
      position: relative;
      padding: 14px 16px;
      box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);

      p {
        font-size: 12px;
        color: #666666;
        margin-bottom: 12px;
      }
    }
    .contactPoisonBox {
      input {
        width: 224px;
        height: 32px;
      }
    }
    .virusInfectionBox {
      ul {
        li {
          float: left;
          width: 64px;
          height: 30px;
          line-height: 30px;
          background-color: #ededed;
          text-align: center;
          font-size: 12px;
          color: #999999;
          margin-right: 12px;
          margin-bottom: 10px;
          cursor: pointer;
        }
        .active {
          border: none;
          background-color: #68b6e7;
          color: #fff;
        }
      }
    }
    .familyHistoryBox {
      // padding: 10px 14px 5px 14px;
      padding: 0px;
      .familyHistorySelect {
        // display: none;
        width: 226px;
        height: 200px;
        position: relative;
        overflow: hidden;
        ul {
          position: absolute;
          left: 0;
          top: 0;
          right: -17px;
          bottom: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          li {
            font-size: 14px;
            margin: 0;
            padding: 10px;
            border-bottom: 1px;
            border-bottom-style: solid;
            border-bottom-color: #999;
          }
          li:hover {
            background-color: #d4e8f5;
          }
        }
      }
    }
  }
  // 修改怀孕次数弹框
  .addTemplateLayer_bottom {
    .el-input__inner {
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f6f6f6;
    }
    p {
      margin-bottom: 14px;
      margin-top: 22px;
    }
  }
}
// 体格检查模块
.healthCheckupBox {
  padding: 14px 24px 60px 26px;
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 1;
    bottom: 0px;
    left: 0;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
      .physiqueBtn {
        background-color: #f3f9fd;
        width: 160px;
        padding: 0px;
        border: none;
        margin-right: 126px;
      }
    }
  }
  .healthCheckTittle {
    font-size: 16px;
    color: #333333;
  }
  div {
    display: inline-block;
    // float: left;
    h3 {
      font-size: 14px;
      color: #666666;
      margin: 10px 0;
    }
    input {
      width: 260px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding-left: 16px;
    }
    .redFont {
      color: #fd4242;
      display: none;
    }
    .layui-unselect,
    .layui-form-select {
      input {
        background-color: #f6f6f6;
      }
    }
  }
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  }
  .bloodBox {
    width: 260px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    input {
      width: 48%;
      display: inline-block;
      height: 34px;
      border-radius: 4px;
      padding-left: 16px;
      border: none;
    }
    .lowTension {
      position: relative;
      border-radius: 8px 0 0px 8px;
      border-right: 1px solid #ccc;
    }
  }
  .healthCheckupBox_firstBox {
    input {
      width: 108px;
    }
    .accessory {
      input {
        width: 258px;
      }
    }
  }
  .modelBox {
    .diagnoseTittle {
      font-size: 16px;
      color: #333333;
      position: relative;
      &:after {
        content: " ";
        position: absolute;
        top: 24%;
        right: -14px;
        width: 1px;
        height: 12px;
        background-color: #ccc;
      }
    }
  }
  .primaryDiagnosisBtn,
  .disposalBtn {
    // margin-left: 48px;
    position: relative;
    .fileIcon {
      background: url("../../assets/file.png") no-repeat 0 0;
      width: 12px;
      height: 14px;
      background-size: 12px 14px;
      position: absolute;
      bottom: 3px;
      left: 24px;
    }
    .templateTittle {
      margin-left: 48px;
      font-size: 14px;
      color: #999999;
    }
  }
  .primaryDiagnosisBtn:hover,
  .disposalBtn {
    cursor: pointer;
  }
  .primaryDiagnosis,
  .disposal {
    width: 100%;
    padding-left: 16px;
    border-bottom: 1px solid #ccc;
    height: 20px;
    margin-top: 10px;
    line-height: 16px;
    color: #666666;
    font-size: 14px;
  }
}
// 高危评估模块
.riskAssessmentBox {
  padding: 14px 24px 24px 26px;
  div {
    display: inline-block;
    h3 {
      font-size: 14px;
      color: #666666;
      margin: 10px 0;
    }
    input {
      width: 154px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding-left: 16px;
    }
    .redFont {
      color: #fd4242;
      display: none;
    }
    .layui-unselect,
    .layui-form-select {
      input {
        background-color: #f6f6f6;
      }
    }
  }
  .wire {
    width: 100%;
    height: 2px;
    background-color: #e8e8e8;
    margin-top: 24px;
  }
  .useBtn {
    width: 60px;
    height: 30px;
    background-color: #68b6e7;
    text-align: center;
    line-height: 30px;
    color: #fff;
    border-radius: 4px;
  } // 基本情况块
  //  查看全部块
  .lookAtallBtnBox {
    width: 100%;
    position: relative;
    margin-top: 16px;
    h2 {
      font-size: 16px;
      display: inline-block;
      padding-right: 14px;
    }
    .positionWire {
      position: absolute;
      display: inline-block;
      top: 50%;
      right: 0px;
      width: 860px;
      height: 1px;
      background-color: black;
    }
    .positionWire2 {
      position: absolute;
      display: inline-block;
      top: 50%;
      right: 0px;
      width: 830px;
      height: 1px;
      background-color: black;
    }
    .basicLookAtallBtn,
    .pregnancyAllBtn {
      padding: 0px 5px;
      position: absolute;
      right: 28px;
      top: 0px;
      background-color: #fff;
      cursor: pointer;
      i {
        color: #68b6e7;
      }
      span {
        color: #999999;
      }
    }
  }
  .basicInformationBox {
    .partBox {
      margin-top: 26px;
      width: 284px;
      .partBox_top {
        padding-bottom: 10px;
        width: 284px;
        border-bottom: 1px solid #999999;
        i {
          font-style: normal;
          font-size: 19px;
        }
        span {
          font-size: 14px;
        }
        .fen {
          position: relative;
          &:before {
            content: " ";
            position: absolute;
            top: 2px;
            left: 30px;
            width: 1px;
            height: 16px;
            background: #cccccc;
          }
        }
      }
      .topicBox {
        margin-top: 16px;
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        > a {
          font-size: 16px;
          color: #666666;
          line-height: 30px;
          padding-left: 26px;
          background: url("../../assets/radio_false.png") no-repeat left center;
          background-size: 16px 16px;
          &.active {
            background: url("../../assets/radio_true.png") no-repeat left center;
            background-size: 16px 16px;
          }
        }
      }
    }
  } // 孕期合并发症选择块
  .pregnancySelectBox {
    margin-top: 20px;
    li {
      font-size: 14px;
      color: #666666;
      padding: 8px 15px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 14px;
      margin-bottom: 14px;
    }
    li:hover {
      cursor: pointer;
    }
    .selectAllBtn {
      width: 64px;
      height: 32px;
      line-height: 32px;
      border-radius: 50px;
      text-align: center;
      margin-right: 14px;
      padding: 0px;
    }
  } // 添加内容块
  .contentBox {
    .lookAtallBtnBox {
      width: 100%;
      position: relative;
      margin-top: 16px;
      h2 {
        font-size: 14px;
        display: inline-block;
        padding-right: 14px;
      }
      .positionWire {
        position: absolute;
        display: inline-block;
        top: 50%;
        right: 0px;
        width: 860px;
        height: 1px;
        background-color: black;
      }
      .positionWire2 {
        position: absolute;
        display: inline-block;
        top: 50%;
        right: 0px;
        width: 830px;
        height: 1px;
        background-color: #cccccc;
      }
    }
    .partBox {
      width: 284px;
      .topicBox {
        margin-top: 16px;
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        > a {
          font-size: 16px;
          color: #666666;
          line-height: 30px;
          padding-left: 26px;
          background: url("/maternal-web/images/radio_false.png") no-repeat left
            center;
          background-size: 16px 16px;
          &.active {
            background: url("/maternal-web/images/radio_true.png") no-repeat
              left center;
            background-size: 16px 16px;
          }
        }
      }
    }
  }
  .violetBtn {
    padding: 0px 5px;
    position: absolute;
    right: 28px;
    top: 0px;
    background-color: #fff;
    i {
      color: #68b6e7;
    }
    span {
      color: #999999;
    }
  }
  .positionWire3 {
    position: absolute;
    display: inline-block;
    top: 50%;
    right: 0px;
    width: 890px;
    height: 1px;
    background-color: #999;
  }
  .violetConcealBox {
    margin-top: 10px;
    > a {
      font-size: 16px;
      color: #666666;
      line-height: 30px;
      padding-left: 26px;
      background: url("/maternal-web/images/radio_false.png") no-repeat left
        center;
      background-size: 16px 16px;
      &.active {
        background: url("/maternal-web/images/radio_true.png") no-repeat left
          center;
        background-size: 16px 16px;
      }
    }
  }
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 1;
    bottom: 0px;
    left: 0;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      width: 1200px;
      background-color: #86c5ec;
      .totalPoints {
        position: relative;
        font-size: 24px;
        color: #ffffff;
        line-height: 88px;
        margin-right: 74px;
        &:before {
          content: " ";
          position: absolute;
          top: 2px;
          right: -28px;
          width: 1px;
          height: 30px;
          background: #fff;
        }
      }
      span {
        font-size: 16px;
        color: #fff;
        margin-right: 26px;
        i {
          font-style: normal;
        }
      }
      .finishBtn {
        background-color: #f3f9fd;
        width: 160px;
        text-align: center;
        padding: 0px;
        border: none;
        margin-left: 60px;
      }
    }
  }
}
// 检查确认模块
.checkAffirmBox {
  padding: 14px 24px 24px 26px;
  .checkAffirmBox_top {
    .assessmentInformation {
      p {
        font-size: 16px;
        color: #333333;
        margin-bottom: 20px;
      }
      span {
        position: relative;
        margin-right: 20px;
        padding-left: 16px;
      }
      .greenStrip {
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: green;
          border-radius: 50%;
        }
        &:before {
          content: " ";
          position: absolute;
          top: 5px;
          right: -14px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
      .yellowStrip {
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: yellow;
          border-radius: 50%;
        }
        &:before {
          content: " ";
          position: absolute;
          top: 5px;
          right: -14px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
      .orangeStrip {
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: orange;
          border-radius: 50%;
        }
        &:before {
          content: " ";
          position: absolute;
          top: 5px;
          right: -14px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
      .proponStrip {
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: purple;
          border-radius: 50%;
        }
      }
      .redStrip {
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: red;
          border-radius: 50%;
        }
        &:before {
          content: " ";
          position: absolute;
          top: 5px;
          right: -14px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
    }
  }
  .gradeInformation {
    height: 62px;
    border-left: 1px solid #ccc; // padding-left: 60px;
    width: 210px;
    text-align: center;
    h2 {
      margin-bottom: 4px;
      .grade {
        font-size: 24px;
        color: #68b6e7;
      }
      i {
        font-size: 14px;
        font-style: normal;
        color: #68b6e7;
      }
    }
    p {
      color: #666666;
      font-size: 12px;
    }
  }
  .wire4 {
    left: 0;
    width: 994px;
    height: 12px;
    background-color: #f6f6f6;
    position: absolute;
    margin-top: 20px;
  }
  .affirmBox2 {
    margin-top: 46px;
    h3 {
      display: block;
      color: #333333;
    }
    span {
      color: #666666;
      margin-top: 16px;
      margin-bottom: 40px;
      position: relative;
      padding-left: 18px;
      display: inline-block;
    }
    div {
      flex: 1;
      border-bottom: 1px solid black;
    }
    .greenStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: green;
        border-radius: 50%;
      }
    }
    .yellowStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: yellow;
        border-radius: 50%;
      }
    }
    .orangeStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: orange;
        border-radius: 50%;
      }
    }
    .proponStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: purple;
        border-radius: 50%;
      }
    }
    .redStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: red;
        border-radius: 50%;
      }
    }
  }
  .operator {
    text-align: right;
    font-size: 14px;
    color: #333333;
    margin-top: 30px;
  }
}
</style>
<style>
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
/* // 孕妇基本信息组件样式修改 */
.pregnantNewsBox .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
/* // 配偶一般信息组件样式修改 */
.spouseNewsBox .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
/* // 孕产信息组件样式修改 */
.pregnancyNewsBox .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
/* // 孕产信息组件样式修改 */
/*孕产信息修改孕产史弹框演示修改 */

.pregnancyNewsBox .addTemplateLayer_bottom .el-input__inner {
  width: 156px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #fff;
}
.pregnancyNewsBox .addTemplateLayer_bottom .el-select .el-input__inner {
  width: 156px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
.pregnancyNewsBox .el-dialog__header {
  background-color: #ededed;
}
.pregnancyNewsBox .addTemplateLayer_bottom .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 122px;
}
.pregnancyNewsBox .el-dialog__body {
  padding: 0 22px 0px 22px;
}
.contactPoisonBox .el-input__inner {
  width: 224px;
  height: 32px;
}
.contactPoisonBox .el-input__icon {
  line-height: 32px;
  cursor: pointer;
}
.pregnancyNewsBox .el-dialog__footer {
  padding: 15px 22px;
  overflow: hidden;
}

.pregnancyNewsBox .el-dialog__footer .el-button--default {
  float: left;
  width: 122px;
  height: 40px;
  background-color: #cccccc;
  color: #999999;
}
.pregnancyNewsBox .el-dialog__footer .el-button--primary {
  width: 122px;
  height: 40px;
  background-color: #68b6e7;
  color: #fff;
  border: none;
}
/* // 体格检查组件样式修改 */
.healthCheckupBox .el-input__inner {
  width: 108px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
/* // 高危评估组件样式修改 */
.riskAssessmentBox .el-input__inner {
  width: 152px;
  height: 30px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
.riskAssessmentBox .el-input__icon {
  line-height: 30px;
}

.newfileBox .el-tabs__nav-scroll {
  height: 64px;
  line-height: 64px;
  background-color: #fff;
  color: #333333;
}
.newfileBox .el-tabs__item.is-active {
  color: #68b6e7;
}
.newfileBox .el-tabs__item:hover {
  color: #68b6e7;
  cursor: pointer;
}
.newfileBox .el-tabs__active-bar {
  background-color: #68b6e7;
}
.newfileBox .el-tabs__nav {
  margin-left: 26px;
}
.newfileBox .el-tabs__content {
  background-color: #fff;
}

.pregnantNewsBox .area-select.large,
.spouseNewsBox .area-select.large {
  width: 260px;
  height: 40px;
  border-radius: 8px;
  background-color: #f6f6f6;
  color: #606266;
}
.pregnantNewsBox
  .cascader-menu-list
  .cascader-menu-option.selected
  ，
  .spouseNewsBox
  .cascader-menu-list
  .cascader-menu-option.selected {
  background-color: #f5f7fa;
  color: #68b6e7;
  font-weight: 700;
}

.spouseNewsBox .el-radio__input.is-checked + .el-radio__label,
.pregnancyNewsBox .el-radio__input.is-checked + .el-radio__label {
  color: #68b6e7;
}
.spouseNewsBox .el-radio__input.is-checked .el-radio__inner,
.pregnancyNewsBox .el-radio__input.is-checked .el-radio__inner {
  border-color: #68b6e7;
  background: #68b6e7;
}
.pregnancyNewsBox .el-button--text {
  color: #68b6e7;
}
.el-select .el-input.is-focus .el-input__inner {
  border-color: #68b6e7;
}
.el-icon-circle-close{
  color:red;
}
</style>
