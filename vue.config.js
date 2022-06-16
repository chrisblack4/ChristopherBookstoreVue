module.exports = {
  publicPath: "/ChristopherBookstoreVue/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "BFB_Bookstore";
      return args;
    });
  },
};
