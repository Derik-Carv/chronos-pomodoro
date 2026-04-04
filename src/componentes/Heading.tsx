import styles from './Heading.module.css';

export const Heading = () => {
    const headingClass = `${styles.heading} ${styles.cyan}`;
    return (
        <>
            <h1 className={headingClass}>Olá Mundo (Heading)</h1>
        </>
    )
};
