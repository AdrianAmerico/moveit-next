import React from 'react';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import styles from '../styles/Components/Home.module.scss';
import Head from 'next/head';

function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.It</title>
      </Head>
      <ExperienceBar />
      <section >
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
      </section>

      <section>

      </section>
    </div>
  );
}

export default App;
