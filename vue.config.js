const path = require('path');
module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? '' : '/report',
    publicPath: '/',
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    },
    chainWebpack: (config) => {
        config.devServer
            .port(8081)
            .proxy({
                '/report': {
                    target: 'http://localhost:8080',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/report': '/report'
                    }
                },
                '/githubAuthorize': {
                    target: 'https://github.com/login/oauth/authorize',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/githubAuthorize': ''
                    }
                },
                '/getGithubInfo': {
                    target: 'https://api.github.com/user',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/getGithubInfo': ''
                    }
                }
            })
            .end();
    }
}