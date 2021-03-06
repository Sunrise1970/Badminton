import Vue from 'vue'
import Vuex from 'vuex'

import activity from './modules/activity'
import competiton from './modules/competiton'
import userInfo from './modules/userInfo'
import common from './modules/common'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    activity,
    competiton,
    userInfo,
    common
  },
  strict: debug,
  middlewares: debug ? [] : []
})
