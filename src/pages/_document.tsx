import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta key="googlebot" name="googlebot" content="index,follow" />
        <meta name="google" content="notranslate" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="keywords" content="encacap, group, nextjs" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="encacap-template-nextjs" />
        <meta property="og:title" content={appName} />
        <meta property="og:description" content={appDescription} />
        <meta property="og:url" content={appUrl} />
        <meta property="og:image" content={`${appUrl}/images/share-link.png`} />
        <meta property="twitter:card" content="encacap-nextjs-template" />
        <meta property="twitter:url" content={appUrl} />
        <meta property="twitter:title" content={appName} />
        <meta property="twitter:description" content={appDescription} />
        <meta property="twitter:image" content={`${appUrl}/images/share-link.png`} />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
