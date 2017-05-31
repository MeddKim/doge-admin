import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

const state = {
    totalTime: 5,
    list: [{
        name: '二哲',
        avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
        date: '2016-12-25',
        totalTime: '6',
        comment: '12月25日完善，陪女朋友一起过圣诞节需要6个小时'
    }, {
        avatar: 'http://www.meddkim.com/content/images/2017/02/ac5c9f99a9014c08d881e681087b02087af4f4d1.jpg',
        name: '张三',
        totalTime: 8,
        date :'2017-12-01 12:23',
        comment: '学习一些奇奇怪怪的东西'
    }]
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});
