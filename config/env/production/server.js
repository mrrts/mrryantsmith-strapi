module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  keys: env('APP_KEYS')
});