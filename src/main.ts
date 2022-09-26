import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(router).mount('#app')
