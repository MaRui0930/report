import router from './index';

router.beforeEach((to, from, next) => {
    if (to.path) {
        if (window._hmt) {
            window._hmt.push(['_trackPageview', '/#' + to.fullPath])
        }
    }
    next()
})