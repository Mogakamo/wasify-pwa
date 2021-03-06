import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} r} />
    </Provider>
  );
}

export default MyApp;
