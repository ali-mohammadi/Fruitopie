const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.fruityvice.com',
            changeOrigin: true,
            pathRewrite: (path, req) => {
                return '/api/fruit' + path;
            },
        })
    );
};