import React, { useState, useEffect } from 'react';
import styles from '../styles/Components/Countdown.module.scss';


function Countdown() {

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
    }, [active, time]
    )

    const minutos = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteLeft, minuteRight] = String(minutos).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    const startCountdown = () => {
        setActive(!active);
    }

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>

            </div>
            {!active ? <button type="button" className={styles.countdownButton} onClick=
                {startCountdown}>Iniciar</button> : <button type="button" className={styles.countdownButton} onClick=
                {startCountdown}>Pausar</button>}

        </div>
    )
}
export default Countdown;