import Head from "next/head";

import Section from "../components/Section";
import Heading from "../components/Heading";

import NordeaInvest from "../components/Nordea-invest";
import Telia from "../components/Telia";
import WSA from "../components/WSAudiology";

const Home = () => (
  <>
    <Head lang="en">
      <title>Mathias Hansted Frontend developer</title>

      <meta
        name="description"
        content="Mathias is a freelance frontend developer."
      />
    </Head>

    <main className="main">
      <Section className="welcome-section" center id="welcome">
        <Heading level="1">Welcome</Heading>

        <Heading level="2">I am a freelance frontend developer</Heading>

        <p>Send me an email if you want to work together.</p>

        <a href="mailto:mathias@mathiashansted.com">
          mathias@mathiashansted.com
        </a>
      </Section>

      <Section id="about">
        <Heading level="2">About me</Heading>

        <p className="section__text">
          I am a frontend developer experienced in building scalable and
          flexible UIs that meet standards of accessibility. I have experience
          working within a digital agency and as an external frontend developer
          for large Danish and international companies. I have worked as a full
          time frontend developer since 2015.
        </p>
      </Section>

      <Section id="companies">
        <Heading level="2">Some of the companies I've worked with</Heading>

        <ul className="companies__list">
          <li className="companies__list-item">
            <a className="companies__link" href="https://nordeainvest.dk/">
              <NordeaInvest className="companies__logo" aria-hidden="true" />
              <span className="companies__link-text">Nordea Invest</span>
            </a>
          </li>

          <li className="companies__list-item">
            <a className="companies__link" href="https://www.telia.dk/">
              <Telia className="companies__logo" aria-hidden="true" />
              <span className="companies__link-text">Telia</span>
            </a>
          </li>

          <li className="companies__list-item">
            <a className="companies__link" href="https://www.wsa.com/">
              <WSA className="companies__logo" aria-hidden="true" />
              <span className="companies__link-text">WS Audiology</span>
            </a>
          </li>
        </ul>
      </Section>

      <Section id="testimonials">
        <Heading level="2">What people have said about me</Heading>

        <ul>
          <li>
            <p></p>
          </li>

          <li>
            <p></p>
          </li>
        </ul>
      </Section>
    </main>
  </>
);

export default Home;
