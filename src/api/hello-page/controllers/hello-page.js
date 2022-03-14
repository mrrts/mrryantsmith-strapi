'use strict';

/**
 *  hello-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hello-page.hello-page');
