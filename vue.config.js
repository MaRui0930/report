module.exports={
    publicPath: process.env.NODE_ENV === 'production'?'':'/report',
    chainWebpack:(config)=>{
        config.devServer
            .port(8081)
            .proxy({
                '/report': {
                    target: 'http://localhost:8080',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/report': '/report'
                    }
                }
            })
    }
}