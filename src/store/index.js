import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);

const state = {
    name: 'weish',
    age: 22
};

const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
};

// const store = new Vuex.Store({//存储状态值    至少要有state和mutation
//     state: {
//         name: 'weish',
//         age: 22
//     },
//     mutations: {//状态值得改变方法，操作状态值      提交mutations是更改vuex状态的唯一方法
//     },
//     getters: {//store的计算属性    getter接受state作为第一个函数
//     },
//     actions: {//要改变状态值只能通过提交mutation来完成
//     }
// });
export default new Vue({
    actions,
    getters,
    mutations,
    state
    //store   //将store实例注入到根组件下的所有子组件中   //子组件通过this.$store来定位store
});
