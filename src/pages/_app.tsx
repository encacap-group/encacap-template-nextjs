import { AppProps } from 'next/app';
import { Source_Sans_3 } from 'next/font/google';
import Head from 'next/head';

const sourceSan3 = Source_Sans_3({ subsets: ['latin', 'vietnamese'] });

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    </Head>
    <main className={sourceSan3.className}>
      <Component {...pageProps} />
    </main>
  </>
);

export default App;
