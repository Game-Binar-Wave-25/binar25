import Head from "next/head";
import '../styles/globals.css'
import '../styles/GameSuit.css';
// import "../css/customcss.css";
function MyApp({ Component, pageProps }) {
return (
<>
<Head>
  <title>Binar Game</title>
  <meta name="description" content="Generated by create next app" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
</Head>
<Component {...pageProps} />
</>
);
}
export default MyApp;