import type { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import FaqItem from "../components/FaqItem"
import ItsEasy from "../components/ItsEasy"
import UpcomingItem from "../components/UpcomingItem"

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="main">
      <div className="container">
        <section className="hero-intro">
          <div className="hero-intro-content">
            <h1>
              A launchpad build to last On
              <span>Cronos</span>
            </h1>
            <p>
              Is Fighting to be a blue chip is like battling in an Arena? <br />
              Not anymore, we&#39;ll help launch your project from start to finish!
            </p>
            <div className="hero-action">
              <button
                className="button button-primary button-gradient"
                onClick={() => router.push("/register")}
              >
                Get Started
              </button>
              <button className="button button-primary">
                Upcoming mints
              </button>
            </div>
          </div>
          <div className="hero-media">
            {/* eslint-disable-next-line */}
            <img
              src="/hero-rocket.png"
              alt=""
            />
          </div>
        </section>
        <section className="mint-right-now">
          <h3>Minting Right Now</h3>
          <h1>project name here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <Link href="/">
            <a className="button button-primary button-dark">
              View mint page
            </a>
          </Link>
          <div className="banner-image">
            {/* eslint-disable-next-line */}
            <img
              src="/home-1.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
      <div className="home-background-pattern">
        <div className="container">
          <section className="upcoming-mints">
            <h1>Upcoming mints</h1>
            <div className="row">
              <UpcomingItem />
              <UpcomingItem />
              <UpcomingItem />
              <UpcomingItem />
            </div>
          </section>
          <section className="supply-royalties">
            <div className="supply-royalties-media">
              {/* eslint-disable-next-line */}
              <img
                src="/supply-chart.svg"
                alt=""
              />
            </div>
            <div className="supply-royalties-content">
              <h2><span>Fair pricing</span>, no matter your size</h2>
              <p>We only charge 500 Cro + 1% royalties to launch your project! Sit back, relax, and let us handle every thing!</p>
            </div>
          </section>
          <ItsEasy />
        </div>
        {/* eslint-disable-next-line */}
        <img
          className="home-pattern"
          src="/home-pattern.png"
          alt=""
        />
      </div>
      <div className="container">
        <section className="faq-home">
          <h2>Frequently asked questions</h2>
          <div className="faq-home-content">
            <FaqItem defaultState={true} />
            <FaqItem />
            <FaqItem />
            <FaqItem />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
