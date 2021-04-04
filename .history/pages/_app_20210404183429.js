import '../styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module 
import 'nprogress/nprogress.css'  //styles for the nprogress package




function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp