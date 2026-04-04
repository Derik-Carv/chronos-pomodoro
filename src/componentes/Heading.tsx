import type React from 'react';
import styles from './Heading.module.css';

type HeadingProps = {
    children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
    const headingClass = `${styles.heading}`;
    return (
        <>
            <h1 className={headingClass}>{children}</h1>
        </>
    )
};
