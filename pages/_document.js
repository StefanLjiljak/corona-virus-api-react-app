import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="sr">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-164601575-3"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            
            gtag('config', 'UA-164601575-3');
              `,
            }}
          ></script>
          <title>КОРОНА ВИРУС - COVID 19 статистика</title>
          <meta
            property="og:title"
            content="КОРОНА ВИРУС (COVID 19) статистика по земљама"
            key="title"
          />
          <meta
            name="description"
            content="статистика по земљама о корона вирусу COVID 19"
          />
          <meta
            name="keywords"
            content="Corona, COVID 19, Корона, вирус, самоубиство"
          />
          <meta name="author" content="Stefan Ljiljak" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
