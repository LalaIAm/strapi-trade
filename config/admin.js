module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "LADN269qLdT6ZsaExrZ9Uw=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
});
