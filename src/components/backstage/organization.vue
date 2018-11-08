<template>
<div>
<!-- <area-select v-model="selected" :data="pca"  :level="2"></area-select> -->
<!-- <area-cascader :level="1" type="text" placeholder="请选择地区" v-model='selected' :data="pca"></area-cascader> -->
<!-- <area-select type='all' :level='2' v-model="selected" :data="pcaa"></area-select> -->
<area-cascader type='text' v-model="selected2" :level='1' :data="pcaa" @change="registeredPermanentResidence()"></area-cascader>
</div>


</template>
<script>
import { AreaCascader } from "vue-area-linkage";
import { pca, pcaa } from "area-data";
export default {
  data() {
    return {
      selected2: [], //数组对应的就是选中的那个省市区。根据type来确定是省市区汉字的数组还是编码组成的数组。
      //selected[0]省。selected[1]市。selected[2]区。
      pca: pca,
      pcaa: pcaa
    };
  },
   methods: {
	//    户口所在地
   Residence() {
      console.log(this.selected2);
    }
  }
  
};
</script>
<style>
.cascader-menu-list .cascader-menu-option.selected {
   background-color: #f5f7fa;
color: #68b6e7;
    font-weight: 700;
}

</style>


