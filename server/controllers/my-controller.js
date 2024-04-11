'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('analytics')
      .service('myService')
      .getWelcomeMessage();
  },
});
