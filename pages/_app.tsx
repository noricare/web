import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 
import Layout from '../components/layout/Layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Layout>
    <Component {...pageProps} />
  </Layout>
    
  );
}

export default MyApp;
