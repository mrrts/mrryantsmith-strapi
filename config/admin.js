module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2e6685a853fce09de7faa54e991df20d'),
  },
});
