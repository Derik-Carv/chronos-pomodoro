import styles from './Heading.module.css';

export const Heading = (props) => {
    const headingClass = `${styles.heading}`;
    return (
        <>
            <h1 className={headingClass}>{props.children}</h1>
        </>
    )
};
