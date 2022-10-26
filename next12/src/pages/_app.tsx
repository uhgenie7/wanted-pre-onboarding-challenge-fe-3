import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }: AppProps) {
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
