import styles from './Heading.module.css';

export const Heading = () => {
    const headingClass = `${styles.heading}`;
    const timerClass = `${styles.timer}`;
    const taskClass = `${styles.task}`;
    return (
        <div className={headingClass}>
            <p className={timerClass}>00:00</p>
            <p>task:</p>
            <p className={taskClass}>Tarefa </p>
        </div>
    )
};
