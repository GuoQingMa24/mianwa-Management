import {createRouter,createWebHistory} from "vue-router";
import Login from "@/components/Login.vue";

const routes=[
    {
        path:'/',
        name:'Home',
        component:()=>import('@/components/Home.vue')
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('@/components/Login.vue')
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