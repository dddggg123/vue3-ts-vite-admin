import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'./styles/index.scss'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIcons from '@element-plus/icons-vue';
import Particles from 'particles.vue3';

const app = createApp(App)
for (const name in ElIcons){
	app.component(name,(ElIcons as any)[name])
}

app.use(store)
   .use(router)
   .use(ElementPlus)
   .use(Particles)
   .mount('#app')
