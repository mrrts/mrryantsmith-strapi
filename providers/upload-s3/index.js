const { PutObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const S3Client = require("@aws-sdk/client-s3").S3Client;

const fileToKey = file => {
  const path = file.path ? `${file.path}/` : '';
  return `${path}${file.hash}${file.ext}`;
}

module.exports = {
  init(providerOptions) {
    // Create an Amazon S3 service client object.
    const s3Client = new S3Client({ ...providerOptions });
    const Bucket = providerOptions.parameters.Bucket;

    const upload = (file) => {
      // upload file on S3 bucket
      const Key = fileToKey(file);
      const url = `https://${Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${Key}`;
      const commandParams = {
        Key,
        Bucket,
        Body: file.stream || Buffer.from(file.buffer, 'binary'),
        ContentType: file.mime
      };
      return new Promise(resolve => {
        s3Client.send(new PutObjectCommand(commandParams))
          .then((result) => {
            file.url = url;
            resolve();
          })
      })
    }

    return {
      upload(file) {
        return upload(file);
        // upload the file in the provider
        // file content is accessible by `file.buffer`
      },
      uploadStream(file) {
        return upload(file);
        // upload the file in the provider
        // file content is accessible by `file.stream`
      },
      delete(file) {
        // delete the file in the provider
        // delete file on S3 bucket
        s3Client.send(new DeleteObjectCommand({
          Key: fileToKey(file),
          Bucket
        }));
      },
    };
  },
};