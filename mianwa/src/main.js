import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import{createPinia} from "pinia";
const pinia = createPinia();
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
const app = createApp(App).mount('#app')
app.use(pinia);
