var routes = [{
  path: '/login',
  name: 'login', //login
  component: () => import('@/views/login/index.vue'),
  meta: {
    keepAlive: false,
  },
}]


export default new VueRouter({
  mode: 'history',
  routes
})