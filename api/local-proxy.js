const { createProxyMiddleware } = require('http-proxy-middleware');

const LOCALHOST_REGX = /^(?:http:\/\/)?localhost/;

module.exports = function(app) {

  const {NODE_ENV, CANON_CMS_CUBES} = process.env;
  if (NODE_ENV === 'development' &&
      LOCALHOST_REGX.test(CANON_CMS_CUBES)) {

    app.use('/tesseract', createProxyMiddleware({
      target: process.env.CANON_CMS_CUBES,
      changeOrigin: true,
      pathRewrite: {
          [`^/tesseract`]: '',
      },
   }));
  }

}
