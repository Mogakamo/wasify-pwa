import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

const getLoginState = (req, loginOptions) => {
  return { basket_id: getBasketId(req) };
};

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, { getLoginState });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  }
});