import Vue from 'vue';
import VueRouter from "vue-router";
import Edit from "@/pages/Edit";
import ReportShow from "@/pages/ShowReport";
import 'mavon-editor/dist/css/index.css'
import HistoryReport from "@/pages/HistoryReport";
import GitHubLogin from "@/pages/GitHubLogin";
import OAuth from "@/pages/OAuth";

Vue.use(VueRouter);

const router=new VueRouter({
    mode:'history',
    routes: [
        {
            component: HistoryReport,
            name: 'history',
            path: '/history'
        },
        {
            component: Edit,
            name: 'edit',
            path: '/edit'
        },
        {
            component: ReportShow,
            name: 'show',
            path: '/show'
        },
        {
            component: GitHubLogin,
            path: '/github'
        },
        {
          component: OAuth,
            path: '/oauth'  
        },
        {
            redirect: '/show',
            path: '/'
        }
    ]
})

export default router;