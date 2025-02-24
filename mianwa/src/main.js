import { createApp } from 'vue'
import 'virtual:windi.css'
import App from './App.vue'
import{createPinia} from "pinia";
import router from "@/router/index.js";
const pinia = createPinia();
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
const app = createApp(App).mount('#app')
app.use(pinia);
app.use(router)
