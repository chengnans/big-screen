// import { createApp } from 'vue'
// import { setupStore } from '@/stores'
// import { setupDirectives } from '@/directives'
// import App from './App.vue'
// import '@/assets/styles/global.scss'
// import '@arco-design/web-vue/dist/arco.less'
// // import 'animate.css'
// import 'animate.css/animate.min.css'
//
// async function bootstrap() {
//   const app = createApp(App)
//   setupStore(app)
//   setupDirectives(app)
//   app.mount('#app')
// }
//
// bootstrap()

// 引用router
import { createApp } from 'vue'
import { setupStore } from '@/stores'
import { setupDirectives } from '@/directives'
import App from './App.vue'
import '@/assets/styles/global.scss'
import '@arco-design/web-vue/dist/arco.less'
import 'animate.css/animate.min.css'
import router from './router/router' // 引入路由配置

async function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  setupDirectives(app)
  app.use(router) // 使用路由
  app.mount('#app')
}

bootstrap()
