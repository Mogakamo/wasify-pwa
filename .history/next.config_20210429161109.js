const { parsed } = require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { env: parsed }) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;

    return {
        env: {
            REDIRECT_URI: isDev ? "http://localhost:3000/api/callback" : "https://wasify.co.ke/api/callback",
            POST_LOGOUT_REDIRECT_URI: isDev ? "http://localhost:3000/secret" : "https://wasify.co.ke/secret",
            AUTH0_SCOPE: "openid profile",
            SERVER_URL: isDev ? "http://localhost:3000" : "https://wasify.co.ke"
        }
    }
}