import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homepage from '../views/Homepage.vue'
import Preset from '../views/Preset.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Homepage
    },{
        path: '/play',
        name: 'home',
        component: Home
    },
    {
        path: '/preset',
        name: 'preset',
        component: Preset
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router