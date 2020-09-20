const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          AWS_REGION: "us-east-1",
          IDP_DOMAIN: "100daysofcloud-stage.auth.us-east-1.amazoncognito.com",
          USER_POOL_ID: "",
          USER_POOL_CLIENT_ID: "",
          REDIRECT_SIGN_IN: "http://localhost:8080/token",
          REDIRECT_SIGN_OUT: "http://localhost:8080/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },
      };
    default:
      return {
        // environment varibales for production
        env: {
          AWS_REGION: "us-east-1",
          IDP_DOMAIN: "100daysofcloud-live.auth.us-east-1.amazoncognito.com",
          USER_POOL_ID: "",
          USER_POOL_CLIENT_ID: "",
          REDIRECT_SIGN_IN: "https://100daysofcloud.com/token",
          REDIRECT_SIGN_OUT: "https://100daysofcloud.com",
          AUTH_COOKIE_DOMAIN: "100daysofcloud.com",
        },
      };
  }
};