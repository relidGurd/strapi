'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi}) => ({
    async testFirst(ctx) {
        try {
          ctx.body = 'ok'
        } catch (err) {
          ctx.body(err)
        }
    }
}));
