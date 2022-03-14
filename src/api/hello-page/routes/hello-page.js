'use strict';

/**
 * hello-page router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hello-page.hello-page');
