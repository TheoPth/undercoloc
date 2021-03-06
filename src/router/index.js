import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Preset from '../views/Preset.vue'
import Play from '../views/Play.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/preset',
        name: 'preset',
        component: Preset
    },
    {
        path: '/play',
        name: 'play',
        component: Play
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router