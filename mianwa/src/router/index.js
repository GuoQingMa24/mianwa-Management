import {createRouter,createWebHistory} from "vue-router";
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";
import Home from "../components/Home.vue";
import Charts from "../components/Charts.vue";

const routes=[
    {
        path:'/',
        name:'Home',
        component:()=>import('../components/Home.vue'),
        beforeEach:(to,from,next)=> {
            if (isLogin) {
                next();
            }else{
                next('/Login');
            }
        }
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('../components/Login.vue')

    },
    {
        path:'/Charts',
        name:'Charts',
        component:()=>import('../components/Charts.vue')
    },
    {
        path:'*',
        name:'404NotFound',
        component:()=>import('../components/NotFound.vue')
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    const isLogin=true;
    if(!isLogin){
        next({name:'Login'});

    }else{
        next();
    }
})
export default router