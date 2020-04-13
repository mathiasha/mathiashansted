import Head from "next/head";

const Home = () => (
  <>
    <Head>
      <title>Mathias Hansted Frontend developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="main">
      <h1 className="title">Welcome to Mathias Hansted</h1>
      <h2 className="subtitle">I am a freelance frontend developer</h2>
      <p>Send me an email if you want to work together.</p>
      <a href="mailto:mathias@mathiashansted.com">mathias@mathiashansted.com</a>
    </main>
  </>
);

export default Home;
