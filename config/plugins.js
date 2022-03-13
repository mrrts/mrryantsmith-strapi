module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 's3',
      providerOptions: {
        region: env('AWS_REGION'),
        parameters: {
          Bucket: env('AWS_BUCKET_NAME')
        },
        logger: console
      },
    },
  },
  // ...
});