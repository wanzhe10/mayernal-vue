var RegExpObj = {
    Reg_IDCardNo: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/, // 身份证
    Reg_TelNo: /^1[3|4|5|7|8]\d{9}$/, // 手机号
    Reg_PassWord: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, // 登录密码
    Reg_Number: /^\d{6}$/, // 验证数字
    Reg_figure: /^\d+(\.\d+)?$/, //验证带小数点的数字
    Reg_Name: /^[\u4e00-\u9fa5]{2,6}$/, //验证名字
    Reg_Text: /[0-9a-zA-Z\u4e00-\u9fa5`~!@#$^&*\\()=|{}':;',\\\\.<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]/,
    Reg_email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/, //邮箱
};
  // 测试年龄
  function analyzeIDCard(IDCard, requestData) {
    // var sexAndAge = {};
    let self = this;
    var babySex = "";
    var birth = "";
    //获取用户身份证号码
    var userCard = IDCard;

    //如果身份证号码为undefind则返回空
    if (!userCard) {
      return requestData(false, null, null, birth);
    }
    //获取性别
    if (parseInt(userCard.substr(16, 1)) % 2 == 1) {
      babySex = "男";
    } else {
      babySex = "女";
    }
    //获取出生年月日
    birth=userCard.substring(6, 10) + "-" + userCard.substring(10, 12) + "-" + userCard.substring(12, 14);
    var yearBirth = userCard.substring(6, 10);
    var monthBirth = userCard.substring(10, 12);
    var dayBirth = userCard.substring(12, 14);
    //获取当前年月日并计算年龄
    var myDate = new Date();
    var monthNow = myDate.getMonth() + 1;
    var dayNow = myDate.getDay();
    var age = myDate.getFullYear() - yearBirth;
    if (
      monthNow < monthBirth ||
      (monthNow == monthBirth && dayNow < dayBirth)
    ) {
      age--;
    }
    //得到年龄
    return requestData(true, babySex, age, birth);
  };
export{
    RegExpObj,
    analyzeIDCard,
};
  
