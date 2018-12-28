<template>
  <div class="prenatalEducationBox">
    <h2 class="prenatalEducationBoxTittle">孕期宣教维护</h2>
    <div class="prenatalEducationBoxContant clearfix">
      <div class="Contant_right clearfix">
        <div class="Contant_tittle">
          <span>孕期检查标签</span>
          <el-radio-group
            v-model="types"
            @change="typesBtn"
          >
            <el-radio :label="0">未激活</el-radio>
            <el-radio :label="1">已激活</el-radio>
          </el-radio-group>
          <input
            type="button"
            value="添加标签"
            @click="dialogVisible = true"
          >
        </div>
        <ul
          class="category clearfix"
          style="overflow:hidden"
        >
          <i
            class="noreportIcon"
            v-show="noreportIconShow"
          ></i>
          <li
            v-for="(item,index) in categoryItems"
            v-html="item.className"
            :id="item.id"
            @click="toggleClass(index)"
            @dblclick="dblclickBtn(index)"
            :class="[item.classIsProhibit ==1?'actives':'nonactivated',{active:index==clickActive}]"
            :key="index"
            v-show="typeReport"
          ></li>
        </ul>
      </div>
      <div class="prenatalEducationBottom clearfix">
        <div class="headlineBox">
          <div class="headlineBox_overflow">
            <h2>孕期检查标题</h2>
            <div class="tittledataAll">
              <div
                class="tittledata"
                v-for="(item,index) in tittledata"
                :class="{active:index ==headlineActive}"
                @click="headlineClick(index)"
                @dblclick="BothheadlineClick(index)"
              >
                <p
                  class="mainHeading"
                  :class="{activeColor:index ==headlineActive}"
                >{{item.cellTitle}}</p>
                <p
                  class="subheading"
                  :class="{activeColor:index ==headlineActive}"
                >{{item.cellSubhead}}</p>
              </div>
              <div
                class="addBox"
                @click="add"
              >
                <i class="addIcon"></i>
                <p class="newConstructionBtn">添加标题</p>
              </div>
            </div>
          </div>

        </div>
        <div class="matterBox">
          <div
            class="matterBoxShow"
            v-show="matterBoxShow"
          >
            <div id="editorElem">
              <div class="editorElemHeader">
                <p
                  class="examineTittle"
                  v-model="examineTittle"
                >{{examineTittle}}</p>
                <p
                  class="examineTittle-deputy"
                  v-model="examineTittleDeputy"
                >{{examineTittleDeputy}}</p>
              </div>
              <div id="editor"></div>
              <textarea
                id="text1"
                style="width:100%; height:200px;"
                v-model="cellDetails"
              ></textarea>

            </div>
            <input
              type="button"
              value="保 存"
              @click="modificationBtn"
              :disabled='saveBtn'
            >
          </div>

        </div>
      </div>
    </div>
    <!-- 新增标签弹框 -->
    <el-dialog
      title="添加标签"
      :visible.sync="dialogVisible"
      width="450px"
      :before-close="handleClose"
      class="newlyLayer"
           @opened = 'banSliding'
        @closed = 'allowSliding'
    >
      <p>标签名称</p>
      <el-input
        v-model="newlyLayerInput"
        placeholder="请输入报告单名称"
      ></el-input>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="pregnantPrenatalEducationAndClassInsert"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑标签弹框 -->
    <el-dialog
      title="编辑标签"
      :visible.sync="modification"
      width="450px"
      :before-close="handleClose"
      class="newlyLayer"
           @opened = 'banSliding'
        @closed = 'allowSliding'
    >
      <p>标签名称</p>
      <el-input
        v-model="modificationlyLayerInput"
        placeholder=""
      ></el-input>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="modification = false">取 消</el-button>
        <el-button
          type="primary"
          @click="modificationOk"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 新建标题弹框 -->
    <el-dialog
      title="添加标题"
      :visible.sync="headlineLayer"
      width="450px"
      :before-close="handleClose"
      class="newlyLayer"
      :lock-scroll='true'
      :close-on-click-modal='false'
           @opened = 'banSliding'
        @closed = 'allowSliding'
    >
      <p>标题名称</p>
      <el-input
        v-model="headlineNameLayer"
        placeholder="请输入报告单名称"
      ></el-input>
      <p>副标题名称</p>
      <el-input
        v-model="vicHeadlineNameLayer"
        placeholder="请输入报告单名称"
      ></el-input>
      <div class="changeImageIcon">
        <img
          v-if="imageUrl"
          :src="imageUrl"
          class="avatar"
        >
        <div class="coverBtn">
          <div class="plusIcon">
            <i
              class="el-icon-plus"
              style="font-size:30px;"
            ></i>
            <span>上传封面</span>
          </div>
          <input
            type="file"
            name="avatar"
            accept="image/gif,image/jpeg,image/jpg,image/png"
            @change="changeImage($event)"
            ref="avatarInput"
          >
        </div>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="headlineLayer = false">取 消</el-button>
        <el-button
          type="primary"
          @click="newHeadlineAffirm"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改标题弹框 -->
    <el-dialog
      title="编辑标题"
      :visible.sync="headlineLayerEdit"
      width="450px"
      :before-close="handleClose"
      class="newlyLayer"
      :lock-scroll='true'
      :close-on-click-modal='false'
           @opened = 'banSliding'
        @closed = 'allowSliding'
    >
      <p>标题名称</p>
      <el-input
        v-model="headlineNameLayerEdit"
        placeholder="请输入报告单名称"
      ></el-input>
      <p>副标题名称</p>
      <el-input
        v-model="vicHeadlineNameLayerEdit"
        placeholder="请输入报告单名称"
      ></el-input>
      <div class="changeImageIcon">
        <img
          v-if="imageUrlEdit"
          :src="imageUrlEdit"
          class="avatar"
        >
        <div class="coverBtn">
          <div class="plusIcon">
            <i
              class="el-icon-plus"
              style="font-size:30px;"
            ></i>
            <span>上传封面</span>
          </div>
          <input
            type="file"
            name="avatar"
            accept="image/gif,image/jpeg,image/jpg,image/png"
            @change="amendChangeImage($event)"
            ref="avatarInput"
          >
        </div>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="headlineLayerEdit = false">取 消</el-button>
        <el-button
          type="primary"
          @click="amendAffirmBtn"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
  </div>
</template>
<script>
import E from "wangeditor";
import $ from "jquery";
var time = null; //  在这里定义time 为null
export default {
  data() {
    return {
      categoryItems: {}, // 孕期检查标签数据
      dialogVisible: false,
      modification: false,
      newlyLayerInput: "", // 新建标签弹框-标签名称
      modificationlyLayerInput: "", // 修改标签弹框-标签名称
      tittledata: [], //标题的数据
      editorContent: "",
      clickActive: -1,
      types: 0, //激活状态
      classNumber: "", //标签序号
      typeReport: true, //报告单类型
      noreportIconShow: false, // 报告单类型暂无数据
      headlineActive: -1, //标题active
      headlineLayer: false, //新增标题弹框
      headlineNameLayer: "", //新增标题弹框-标题名称
      vicHeadlineNameLayer: "", //新增标题弹框-副标题名称
      imageUrl: "", //新增标题弹框-封面图片
      imageUrlBase64: "", //新增封面图片数据
      examineTittle: "", //右面一级标题
      examineTittleDeputy: "", //右面二级标题
      cellDetails: "", //详情
      matterBoxShow: false,
      classId: "", //标签id
      cellId: "", //标题id
      headlineLayerEdit: false, //修改标题弹框
      headlineNameLayerEdit: "", //修改标题弹框-标题名称
      vicHeadlineNameLayerEdit: "", //修改标题弹框-副标题名称
      headlineLayerEditNumber: "", //修改标题弹框-序号
      imageUrlEdit: "", //修改标题弹框-封面图片
      imageUrlBase64Edit: "", //修改标题弹框-图片数据
      saveBtn: false //保存按钮
    };
  },
  mounted() {
    this.pregnantPrenatalEducationAndClassFindList();
  },
  methods: {
    //  标签切换
    toggleClass(index) {
      this.headlineActive = -1;
      clearTimeout(time); //首先清除计时器
      time = setTimeout(() => {
        this.clickActive = index;
        this.isShow1 = index;
        // console.log(this.categoryItems[index]);
        this.classId = this.categoryItems[index].id;
        this.classNumber = this.categoryItems[index].classNumber;
        this.modificationlyLayerInput = this.categoryItems[index].className;
        // console.log(this.categoryItems[index].classNumber);
        this.types = parseInt(this.categoryItems[index].classIsProhibit);
        let token1 = window.localStorage.getItem("mayernal-web-token");
        this.examineTittle = "";
        this.examineTittleDeputy = "";
        this.cellDetails = "";
        this.matterBoxShow = false;
        this.pregnantPrenatalEducationClassAndCellFindList(
          token1,
          this.categoryItems[index].id
        );
      }, 200); //大概时间300ms
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 一级标签查询
    pregnantPrenatalEducationAndClassFindList() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .pregnantPrenatalEducationAndClassFindList({
          token: token1
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.categoryItems =
              res.pcPregnantPrenatalEducationAndClassBeanList;
            $(".category").css("height", "0px");
            this.typeReport = true;
            this.noreportIconShow = false;
            //     this.typeReport = false;
            // this.noreportIconShow = true;
          } else if (res.status === "20209") {
            $(".category").css("height", "189px");
            this.typeReport = false;
            this.noreportIconShow = true;
          }
        })
        .catch(error => {
          this.$message.error("查询错误，请稍后重试");
        });
    },
    // 一级标签-添加
    pregnantPrenatalEducationAndClassInsert() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      let classNumber = this.categoryItems.length;
      if (classNumber > 0) {
        classNumber = this.categoryItems.length + 1;
      } else {
        classNumber = 1;
      }
      this.$api
        .pregnantPrenatalEducationAndClassInsert({
          token: token1,
          className: this.newlyLayerInput,
          classNumber: this.classNumber,
          classIsProhibit: 0
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
               this.$message.success("新建成功");
            this.dialogVisible = false;
            this.pregnantPrenatalEducationAndClassFindList();
            this.newlyLayerInput = "";
          } else {
            this.$message.error("新建错误，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新建错误，请稍后重试");
        });
    },
    // 一级标签-修改
    pregnantPrenatalEducationClassUpdate() {
      console.log(this.modificationlyLayerInput);
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .pregnantPrenatalEducationClassUpdate({
          token: token1,
          id: this.classId,
          name: this.modificationlyLayerInput,
          number: this.classNumber,
          isProhibit: this.types
        })

        .then(res => {
          console.log(res);
          if (res.status === "20200") {
               this.$message.success("编辑成功");
            this.modification = false;
            this.pregnantPrenatalEducationAndClassFindList();
            // this.modificationlyLayerInput = "";
          } else {
            this.$message.error("编辑错误，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("编辑错误，请稍后重试");
        });
    },
    // 标签双击编辑
    dblclickBtn(index) {
      clearTimeout(time); //清除
      this.classNumber = this.categoryItems[index].classNumber;
      this.classId = this.categoryItems[index].id;
      this.modification = true;
      var el = event.currentTarget; //复杂的click哈哈
      this.modificationlyLayerInput = el.innerText;
    },
    // 标签编辑确定按钮
    modificationOk() {
      this.pregnantPrenatalEducationClassUpdate();
    },
    // 激活未激活
    typesBtn() {
      if (
        !$(".category")
          .children("li")
          .hasClass("active")
      ) {
        this.$message({
          message: "请选择标签",
          type: "warning"
        });
      } else {
        this.toggleClass(this.clickActive);
        this.pregnantPrenatalEducationClassUpdate();
      }
    },
    // 通过标签id查询数据列表
    pregnantPrenatalEducationClassAndCellFindList(token, classId) {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .pregnantPrenatalEducationClassAndCellFindList({
          token: token,
          classId: classId
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.tittledata =
              res.pcPregnantPrenatalEducationClassAndCellBeanList;
            console.log(this.tittledata);
          } else if (res.status === "20209") {
            this.tittledata = [];
          }
        })
        .catch(error => {
          this.$message.error("查询错误，请稍后重试");
        });
    },
    // 上传封面
    changeImage(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        that.imageUrl = this.result;
        that.imageUrlBase64 = file;
        console.log(that.imageUrlBase64);
      };
    },
    // 标题切换
    headlineClick(index) {
      this.headlineActive = index;
      if (this.headlineActive !== -1) {
        this.matterBoxShow = true;
        this.examineTittle = this.tittledata[index].cellTitle;
        this.examineTittleDeputy = this.tittledata[index].cellSubhead;
        this.cellDetails = this.tittledata[index].cellDetails;
        this.headlineNameLayerEdit = this.tittledata[index].cellTitle;
        this.vicHeadlineNameLayerEdit = this.tittledata[index].cellSubhead;
        this.cellId = this.tittledata[index].cellId;
        this.headlineLayerEditNumber = this.tittledata[index].cellNumber;
        this.headlineLayerEditNumber = this.tittledata[index].cellNumber;
        //    if (
        //   this.tittledata[index].cellImages == null ||
        //   this.tittledata[index].cellImages == ""
        // ) {
        //   this.imageUrlEdit = "";
        // } else {
        //   var imgSrc = eval("(" + this.tittledata[index].cellImages + ")");
        //   console.log(imgSrc.minImageURL)
        //   this.imageUrlEdit = imgSrc.minImageURL;
        // }

        var editor = new E("#editor");
        editor.customConfig.uploadImgShowBase64 = true;
        editor.customConfig.showLinkImg = false;

        var $text1 = $("#text1");
        let selt = this;
        editor.customConfig.onchange = function(html) {
          // 监控变化，同步更新到 textarea
          $text1.val(html);
          selt.cellDetails = html;
        };
        editor.create();
        if (this.types == 0) {
          editor.$textElem.attr("contenteditable", false);
          this.saveBtn = true;
        } else {
          editor.$textElem.attr("contenteditable", true);
          this.saveBtn = false;
        }
        // 初始化 textarea 的值
        $text1.val(editor.txt.html(this.cellDetails));
      } else {
        this.examineTittle = "";
        this.examineTittleDeputy = "";
        this.cellDetails = "";
      }
    },
    // 添加标题按钮
    add() {
      if (
        !$(".category")
          .children("li")
          .hasClass("active")
      ) {
        this.$message({
          message: "请选择标签",
          type: "warning"
        });
      } else {
        if (this.types == 0) {
          this.$message({
            message: "未激活状态不可以新增",
            type: "warning"
          });
        } else {
          this.headlineLayer = true;
        }
      }
    },
    // 添加标题弹框确定按钮
    newHeadlineAffirm() {
      var baseInfo = new FormData();
      let token1 = window.localStorage.getItem("mayernal-web-token");
      baseInfo.append("token", token1);
      baseInfo.append("cellTitile", this.headlineNameLayer);
      baseInfo.append("cellSubhead", this.vicHeadlineNameLayer);
      baseInfo.append("cellNumber", this.tittledata.length + 1);
      baseInfo.append("cellImages", this.imageUrlBase64);
      baseInfo.append("cellDetails", "");
      baseInfo.append("classIsProhibit", 1);
      baseInfo.append("classId", this.classId);
      console.log(baseInfo);
      this.pregnantPrenatalEducationClassAndCellInsert(baseInfo);
      // this.tittledata.push(baseInfo);
      this.headlineLayer = false;
    },
    // 二级标题-添加
    pregnantPrenatalEducationClassAndCellInsert(baseInfo) {
      this.$api
        .pregnantPrenatalEducationClassAndCellInsert(baseInfo)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
               this.$message.success("添加成功");
            this.toggleClass(this.clickActive);
          } else if (res.status === "20209") {
          }
        })
        .catch(error => {
          this.$message.error("添加错误，请稍后重试");
        });
    },
    // 双击标题修改
    BothheadlineClick(index) {
      if (this.types == 0) {
        this.$message({
          message: "未激活状态不可编辑",
          type: "warning"
        });
      } else {
        // console.log(this.tittledata[index]);
        this.headlineLayerEdit = true;
        this.headlineNameLayerEdit = this.tittledata[index].cellTitle;
        this.vicHeadlineNameLayerEdit = this.tittledata[index].cellSubhead;
        this.cellId = this.tittledata[index].cellId;
        this.headlineLayerEditNumber = this.tittledata[index].cellNumber;
        if (
          this.tittledata[index].cellImages == null ||
          this.tittledata[index].cellImages == ""
        ) {
          this.imageUrlEdit = "";
        } else {
          var imgSrc = eval("(" + this.tittledata[index].cellImages + ")");
          // console.log(imgSrc.minImageURL)
          this.imageUrlEdit = "http://192.168.0.6:8080/pregnant" + imgSrc.minImageURL;
        }
      }
    },
    // 修改上传封面
    amendChangeImage(e) {
      var that = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        if (file) {
          that.imageUrlEdit = this.result;
          that.imageUrlBase64Edit = file;
          console.log(that.imageUrlBase64Edit);
        }
      };
    },
    // 修改标题确认按钮
    amendAffirmBtn() {
      let token1 = window.localStorage.getItem("mayernal-web-token");
      var modifyData = new FormData();
      modifyData.append("token", token1);
      modifyData.append("id", this.cellId);
      modifyData.append("title", this.headlineNameLayerEdit);
      modifyData.append("subhead", this.vicHeadlineNameLayerEdit);
      modifyData.append("number", this.headlineLayerEditNumber);
      modifyData.append("details", this.cellDetails);
      modifyData.append("images", this.imageUrlBase64Edit);
      this.pregnantPrenatalEducationCellUpdate(modifyData);
    },
    // 保存按钮
    modificationBtn() {
      let token1 = window.localStorage.getItem("mayernal-web-token");
      var modifyData = new FormData();
      modifyData.append("token", token1);
      modifyData.append("id", this.cellId);
      modifyData.append("title", this.headlineNameLayerEdit);
      modifyData.append("subhead", this.vicHeadlineNameLayerEdit);
      modifyData.append("number", this.headlineLayerEditNumber);
      modifyData.append("details", this.cellDetails);
      modifyData.append("images", this.imageUrlBase64Edit);
      console.log(this.cellDetails);
      this.pregnantPrenatalEducationCellUpdate(modifyData);
    },
    // 二级标题-单项-修改
    pregnantPrenatalEducationCellUpdate(modifyData) {
      let self = this;
      this.$api
        .pregnantPrenatalEducationCellUpdate(modifyData)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
               this.$message.success("编辑成功");
            this.toggleClass(this.clickActive);
            this.headlineLayerEdit = false;
          } else if (res.status === "20209") {
          }
        })
        .catch(error => {
          this.$message.error("编辑失败，请稍后重试");
        });
    },
            // 禁止滑动
    banSliding(){
    document.documentElement.style.overflow='hidden';
    },
    // 允许滑动
    allowSliding(){
       document.documentElement.style.overflow='scroll';
    },
  }
};
</script>
<style lang="less" scoped>
.mgr18 {
  margin-right: 18px;
}
.prenatalEducationBox {
  position: relative;
  width: 100%;
  min-height: 600px;
  background-color: #f6f6f6;
  .prenatalEducationBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .Contant_right {
    padding: 0px 20px;
    background-color: #fff;
    .Contant_tittle {
      padding: 20px 0;
      height: 60px;
      border-bottom: 1px solid #ccc;
      span {
        color: #333333;
        font-size: 16px;
        float: left;
        margin-right: 30px;
      }
      input {
        width: 86px;
        height: 32px;
        background-color: #68b6e7;
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        float: right;
      }
    }
    .category {
      margin-top: 20px;
      min-height: 120px;
      position: relative;
      .noreportIcon {
        background: url("../../assets/noreportIcon.png") no-repeat 0 0;
        width: 722px;
        height: 120px;
        background-size: 722px 186px;
        position: absolute;
        margin-left: 80px;
        top: -40px;
      }
      li {
        float: left;
        height: 40px;
        line-height: 40px;
        text-align: center;
        padding: 0px 18px;
        border: 1px solid #999999;
        color: #666666;
        border-radius: 4px;
        margin-bottom: 20px;
        margin-right: 18px;
        cursor: pointer;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
      }
      li:nth-child(1) {
        margin-left: 0px;
      }
      .nonactivated {
        border: none;
        background-color: #f6f6f6;
        color: #999;
      }
      .actives {
        // background-color: #68b6e7;
        // color: #fff;
        color: #68b6e7;
        border: 1px solid #68b6e7;
      }
      .active {
        background-color: #68b6e7;
        color: #fff;
      }
    }
  }
  .prenatalEducationBottom {
    margin-top: 8px;
    height: 500px;
    .headlineBox {
      position: relative;
      float: left;
      width: 250px;
      height: 500px;
      background-color: #fff;
      border-right: 1px solid #ccc;
      overflow: hidden;
      .headlineBox_overflow {
        .tittledataAll {
          position: absolute;
          left: 0;
          top: 60px;
          right: -17px;
          bottom: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          height: 440px;
          overflow: hidden;
          overflow-y: auto;
          .tittledata {
            margin-bottom: 14px;
            padding: 12px;
            border-bottom: 1px solid #ccc;
            cursor: pointer;
          }
          .active {
            border-bottom-style: 1px solid #68b6e7;
          }
          .mainHeading {
            font-size: 14px;
            color: #333333;
          }
          .subheading {
            font-size: 12px;
            color: #999999;
            margin-top: 4px;
          }
          .activeColor {
            color: #68b6e7;
          }
          .addBox {
            position: relative;
            height: 58px;
            line-height: 58px;
            text-align: center;
            border-top: 1px dashed #d0d0d0;
            border-bottom: 1px dashed #d0d0d0;
            margin: auto;
            cursor: pointer;
            .newConstructionBtn {
              color: #68b7e7;
              font-size: 16px;
              margin-left: 8px;
            }
            .addIcon {
              background: url("../../assets/addIcon.png") no-repeat 0 0;
              width: 16px;
              height: 16px;
              position: absolute;
              left: 80px;
              top: 38%;
            }
          }
        }
      }

      h2 {
        width: 100%;
        font-size: 16px;
        color: #333333;
        display: inline-block;
        padding: 16px;
        border-bottom: 1px solid #ccc;
      }
    }
    .matterBox {
      float: left;
      background-color: #fff;
      height: 500px;
      width: 730px;
      .matterBoxShow {
        height: 500px;
        width: 730px;
        background-color: #fff;
        padding: 0 14px;
        // display: none;
        #editorElem {
          .editorElemHeader {
            border-bottom: 1px solid #ccc;
            padding-top: 20px;
            padding: 14px;
            .examineTittle {
              font-size: 16px;
              color: #333333;
            }
            .examineTittle-deputy {
              font-size: 12px;
              margin-top: 12px;
              color: #333333;
            }
          }
          #editor {
            margin-top: 14px;
            height: 340px;
          }
          #text1 {
            display: none;
          }
        }
        input {
          width: 174px;
          height: 42px;
          background-color: #68b7e7;
          color: #fff;
          border-radius: 4px;
          margin: 10px auto;
          display: block;
          cursor: pointer;
        }
      }
    }
  }
}
.newlyLayer {
  z-index: 999999;

  .changeImageIcon {
    border: 1px dashed #ccc;
    width: 410px;
    height: 178px;
    margin-top: 20px;
    text-align: center;
    position: relative;
    .avatar {
      width: 410px;
      height: 178px;
      position: absolute;
      top: 0px;
      left: 0px;
    }
    .coverBtn {
      width: 410px;
      height: 178px;
      cursor: pointer;
      .plusIcon {
        margin-top: 60px;
        display: inline-block;
        text-align: center;
        .el-icon-plus {
          font-size: 30px;
        }
        span {
          display: block;
        }
      }
      input {
        display: inline-block;
        width: 410px;
        height: 178px;
        cursor: pointer;
        position: absolute;
        top: 0px;
        left: 0px;
        opacity: 0;
      }
    }
  }
  p {
    margin-bottom: 12px;
    margin-top: 20px;
  }
  p:nth-child(1) {
    margin-top: 20px;
  }
}
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 410px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 410px;
  height: 178px;
  display: block;
}

// .avatar-uploader .el-upload {
//   border: 1px dashed #d9d9d9;
//   border-radius: 4px;
//   cursor: pointer;
//   position: relative;
//   overflow: hidden;
// }
// .avatar-uploader .el-upload:hover {
//   border-color: #409EFF;
// }
// .avatar-uploader-icon {
//   font-size: 28px;
//   color: #8c939d;
//   width: 178px;
//   height: 178px;
//   line-height: 178px;
//   text-align: center;
// }
// .avatar {
//   width: 410px;
//   height: 178px;
//   display: block;
// }
</style>
<style lang='less'>
.prenatalEducationBox {
  .el-textarea__inner {
    border: none;
    // min-height: 40px;
    background-color: #f6f6f6;
    color: #333333;
    padding-left: 0px;
  }
  .el-button--primary {
    background-color: #68b6e7;
  }
  .el-dialog__header {
    background-color: #ededed;
  }
  .el-select {
    width: 100%;
  }
  .dialog-footer {
    overflow: hidden;
    .el-button--default {
      float: left;
      width: 122px;
      height: 40px;
      background-color: #cccccc;
      color: #999999;
    }
    .el-button--primary {
      width: 122px;
      height: 40px;
      background-color: #68b6e7;
      color: #fff;
    }
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #68b6e7;
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #68b6e7;
    background: #68b6e7;
  }
}
.headlineBox {
  /* // 配偶一般信息组件样式修改 */
  .el-input__inner {
    width: 100%;
    border-color: #ccc;
    background-color: #f6f6f6;
    border: none;
  }
  .el-table .cell {
    padding: 0 4px;
  }
}
.prenatalEducationBox {
  .el-message-box__wrapper {
    z-index: 900000 !important;
  }
  .w-e-toolbar {
    .w-e-menu {
      z-index: 11 !important;
    }
  }
  .w-e-text-container {
    z-index: 10 !important;
  }
}
</style>


