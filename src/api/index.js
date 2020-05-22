import * as home from './home'

const apiObj = {
  ...home
}
const install = function (Vue) {
  if (install.installed) return
  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return apiObj
      }
    }
  })
}

export default {
  install
}