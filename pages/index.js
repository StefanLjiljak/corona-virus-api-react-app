import React from 'react';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html {
font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  width:100vw;
  padding-bottom: 30px;
  min-height: 100vh;
  position:relative;
  overflow-x:hidden;
  background-color: rgba(0,0,0, 0.1);
}

header {
  width:80%;
  text-align: center;
  justify-items:center;
  justify-content:center;
  align-items:center;
  margin:2rem auto;
}

main {
  width:80%;
  text-align: center;
  justify-items:center;
  justify-content:center;
  align-items:center;
  margin:1rem auto;
}

footer {
  position: absolute;
  text-align: center;
  justify-items:center;
  justify-content:center;
  align-items:center;
  background: #333;
  color: #fff;
  padding: 15px;
  bottom: 0;
  width: 100%;
}


section {
  margin:2rem auto;
  height:100%
}

select:hover {
  cursor: pointer;
}

article {
  margin:2rem auto;
}

h2,h3,h4 {
  margin:1rem auto;
  padding:0.3rem auto;
}
`;

export default function IndexPage() {
  let date = new Date();
  let yearNow = date.getFullYear();
  let dateNow = date.toLocaleDateString('sr-RS');
  return (
    <div>
      <Head>
        <title>КОРОНА ВИРУС - COVID 19 статистика</title>
        <meta
          property="og:title"
          content="КОРОНА ВИРУС (COVID 19) статистика по земљама"
          key="title"
          description="статистика по земљама о корона вирусу COVID 19"
        />
      </Head>
      <GlobalStyle />
      <header>
        <h1>КОРОНА ВИРУС (COVID 19)</h1>
        <h5>
          статистика по земљама на дан <span>{dateNow}</span> године.
        </h5>
      </header>
      <main>
        <article>
          <CountrySelector />
        </article>
        <article className="global">
          <h2>
            Глобална статистика за 188 земаља на дан <span>{dateNow}</span>{' '}
            године.
          </h2>
          <Stats url="https://covid19.mathdro.id/api" />
        </article>
      </main>
      <footer>
        Copyright &copy; <span>{yearNow}</span>, Stefan Ljiljak
      </footer>
    </div>
  );
}
