module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6017255cb3e4673afe874f69bb34ab52'),
  },
});
