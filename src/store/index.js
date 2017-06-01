import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import article from './modules/article.js'

export default new Vuex.Store({
    modules: {
        article
    }
});
