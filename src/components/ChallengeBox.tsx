import styles from "../styles/Components/ChallengeBox.module.scss";

function ChallengeBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeNotActive}>
        <strong>
          Inicie um ciclo para receber desafios a serem completados
        </strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up" />
          Avance de level completando desafios
        </p>
      </div>
    </div>
  );
}

export default ChallengeBox;
