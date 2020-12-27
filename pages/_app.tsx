import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';
import 'fontsource-roboto';

import type { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Home | Website</title>
        <meta name="description" content="My Next.js website" />
      </Head>

      {/* CSS Reset from Material UI */}
      <CssBaseline />

      <Component {...pageProps} />
    </>
  );
};

export default App;
