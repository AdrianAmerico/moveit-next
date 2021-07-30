import React from "react";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import styles from "../styles/Components/Home.module.scss";
import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";

function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.It</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}

export default App;
