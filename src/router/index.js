import Vue from 'vue';
import VueRouter from "vue-router";
import Edit from "@/pages/Edit";
import ReportShow from "@/pages/ReportShow";
import 'mavon-editor/dist/css/index.css'

Vue.use(VueRouter);

const router=new VueRouter({
    routes: [
        {
            component: Edit,
            path: '/edit'
        },
        {
            component: ReportShow,
            path: '/show'
        },
        {
            redirect: '/show',
            path: '/'
        }
    ]
})

export default router;