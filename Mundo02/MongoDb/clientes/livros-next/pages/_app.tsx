import Head from 'next/head';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </html>
  );
}


export default MyApp;