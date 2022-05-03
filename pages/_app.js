import Script from 'next/script';

import '../styles/globals.css';

{
  /* <script async src="https://www.googletagmanager.com/gtag/js?id=G-8S9QKS950W"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8S9QKS950W');
</script> */
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG}`}
      />
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG}')`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
