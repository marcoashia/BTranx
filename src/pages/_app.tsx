import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import NProgress from 'nprogress';
import splitbee from '@splitbee/web';

import { theme } from '../theme';
import { SEO } from '@/components/SEO';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const inIframe = () => window.location !== window.parent.location;

function App({ Component, pageProps, router }: AppProps) {
  const isTemplate = router.asPath.startsWith('/templates/');

  useEffect(() => {
    // Do not initialize splitbee for iframe previews
    if (!inIframe()) {
      splitbee.init();
    }
    // Necessary because otherwise 100% body height will break the template preview
    document.body.classList.add(isTemplate ? 'template' : 'body');
  }, []);

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <ChakraProvider theme={theme}>
      <ThemeEditorProvider>
        {isTemplate && <SEO />}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <Component {...pageProps} />
      </ThemeEditorProvider>
    </ChakraProvider>
  );
}

export default App;
