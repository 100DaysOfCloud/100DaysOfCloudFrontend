const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          AWS_REGION: "us-east-1",
          IDP_DOMAIN: "100daysofcloud.auth.us-east-1.amazoncognito.com",
          USER_POOL_ID: "us-east-1_pIZbCBEft",
          USER_POOL_CLIENT_ID: "2qko27e9na9fsopj0c4pas78p5",
          REDIRECT_SIGN_IN: "http://localhost:8080/token",
          REDIRECT_SIGN_OUT: "http://localhost:8080/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },
      };
    default:
      return {
        // environment varibales for production
        env: {
          IDP_DOMAIN: "",
          USER_POOL_ID: "",
          USER_POOL_CLIENT_ID: "",
          REDIRECT_SIGN_IN: "",
          REDIRECT_SIGN_OUT: "",
          AUTH_COOKIE_DOMAIN: "",
        },
      };
  }
};