'use strict';

/**
 * hello-page service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hello-page.hello-page');
