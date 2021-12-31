import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'  
import App from './App.vue'


// Components
import HelloWorld from '@/components/HelloWorld.vue'
import DetailComponent from '@/components/DetailComponent.vue'
import ListComponent from '@/components/ListComponent.vue'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/detail', component: DetailComponent },
    { path: '/list', component: ListComponent },
  ]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)


app.use(router)

app.mount('#app')
