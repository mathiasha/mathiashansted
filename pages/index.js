import Head from "next/head";

import Section from "../components/Section";
import Heading from "../components/Heading";

import NordeaInvest from "../components/Nordea-invest";
import Telia from "../components/Telia";
import WSA from "../components/WSAudiology";
import Rejsekort from "../components/Rejsekort";
import DanskeBank from "../components/DanskeBank";

export const config = {
  unstable_runtimeJS: false,
};

const Home = () => (
  <>
    <Head lang="en">
      <title>Mathias Hansted, Front-end developer</title>

      <meta
        name="description"
        content="Mathias is a freelance front-end developer."
      />
    </Head>

    <main className="main">
      <Section id="about">
        <Heading level="1">Hi there...</Heading>

        <Heading level="2">My name is Mathias Hansted</Heading>

        <p className="section__text">
          I am a Copenhagen based front-end developer, experienced in building
          scalable and flexible UIs that meet standards of accessibility. I have
          experience working within digital agency and as an external front-end
          developer for large Danish and international companies. I have worked
          as a full time front-end developer since 2015.
        </p>

        <p>Send me an email if you want to work together.</p>

        <a href="mailto:mathias@mathiashansted.com">
          mathias@mathiashansted.com
        </a>
      </Section>

      <Section id="companies">
        <Heading level="2">
          Here are some of the companies I've worked with:
        </Heading>

        <ul className="companies">
          <li className="companies__item">
            <a className="companies__link" href="https://danskebank.dk/">
              <DanskeBank className="companies__logo" aria-hidden="true" />

              <span className="companies__link-text">Danske Bank</span>
            </a>
          </li>

          <li className="companies__item">
            <a className="companies__link" href="https://www.rejsekort.dk/">
              <Rejsekort className="companies__logo" aria-hidden="true" />

              <span className="companies__link-text">Rejsekort</span>
            </a>
          </li>

          <li className="companies__item">
            <a className="companies__link" href="https://www.telia.dk/">
              <Telia className="companies__logo" aria-hidden="true" />

              <span className="companies__link-text">Telia</span>
            </a>
          </li>

          <li className="companies__item">
            <a className="companies__link" href="https://www.wsa.com/">
              <WSA className="companies__logo" aria-hidden="true" />

              <span className="companies__link-text">WS Audiology</span>
            </a>
          </li>

          <li className="companies__item">
            <a className="companies__link" href="https://nordeainvest.dk/">
              <NordeaInvest className="companies__logo" aria-hidden="true" />

              <span className="companies__link-text">Nordea Invest</span>
            </a>
          </li>
        </ul>
      </Section>

      <Section id="testimonials">
        <Heading level="2">This is what people have said about me:</Heading>

        <ul className="testimonials">
          <li className="testimonials__item">
            <blockquote className="testimonials__quote">
              <p className="testimonials__quote-body">
                Mathias has really embraced Shift's three focus areas -
                accessibility, performance and scalability - and it has been a
                great pleasure to see his development in all three
              </p>

              <footer className="testimonials__author">
                Kim Johannesen,{" "}
                <span className="testimonials__author-title">CEO, Shift</span>
              </footer>
            </blockquote>
          </li>

          <li className="testimonials__item">
            <blockquote className="testimonials__quote">
              <p className="testimonials__quote-body">
                Mathias has specifically contributed with development and
                integration to map services and React apps. It has included
                communication with stakeholders, customers and supplier. In
                addition, he has been a valued sparring partner for the entire
                team, across competencies, where he has also contributed with
                his reliability and good humor.
              </p>

              <footer className="testimonials__author">
                Peter Ravn Thers, <span>Senior Project manager, Pentia</span>
              </footer>
            </blockquote>
          </li>

          <li className="testimonials__item">
            <blockquote className="testimonials__quote">
              <p className="testimonials__quote-body">
                Hansted's professionalism is incredibly high and he works really
                efficiently with his deliveries. He is also good at giving
                feedback/saying so if ideas go against an optimal front-end and
                advises on alternative ways to hit the right solution, be it web
                accessibility and other things.
              </p>

              <footer className="testimonials__author">
                Pelle Vedel Krogh,{" "}
                <span className="testimonials__author-title">
                  Director, Web Technologies and Applications, WS Audiology
                </span>
              </footer>
            </blockquote>
          </li>
        </ul>
      </Section>
    </main>
  </>
);

export default Home;
