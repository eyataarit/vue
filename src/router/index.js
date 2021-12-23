import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'
import File from '../components/File.vue'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path:"/",
            component: Home
        },
        {
            path: "/login",
            component: SignIn
        },
        {
            path: "/signup",
            component: SignUp
        },
        {
            path:'/file',
            component: File
        }
    ]
});
export default router;