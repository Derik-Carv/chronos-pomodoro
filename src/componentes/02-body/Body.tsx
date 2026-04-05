import { Play } from 'lucide-react'

import styles from './Body.module.css';

export const Body = () => {
    const bodyTaskClass = `${styles['body-task']}`;
    const cyclesClass = `${styles.cycles}`;
    const playClass = `${styles.play}`;
    const inTask = `${styles.inTask}`;
    const inPause = `${styles.inPause}`;
    const inLongPause = `${styles.inLongPause}`;
    return (
        <div className={bodyTaskClass}>
            <p>Nesse ciclo <strong>foque</strong> por <strong><span>25</span> minutos</strong></p>
            <p>Ciclos:</p>
            <div>
                <button className={`${cyclesClass} ${inTask}`}></button>
                <button className={`${cyclesClass} ${inPause}`}></button>
                <button className={`${cyclesClass} ${inTask}`}></button>
                <button className={`${cyclesClass} ${inPause}`}></button>
                <button className={`${cyclesClass} ${inTask}`}></button>
                <button className={`${cyclesClass} ${inPause}`}></button>
                <button className={`${cyclesClass} ${inTask}`}></button>
                <button className={`${cyclesClass} ${inLongPause}`}></button>
            </div>
            <button className={playClass}><Play /></button>
        </div>
    )
};
