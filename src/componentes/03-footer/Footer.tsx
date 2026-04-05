import styles from './Footer.module.css';

export const Footer = () => {
    const linkPomodoro = "https://napratica.org.br/noticias/pomodoro";
    const linkGitHub = "https://github.com/Derik-Carv";
    return (
        <footer className={styles.footer}>
            <p><a href={linkPomodoro} target="_blank" rel="noopener noreferrer">Entenda a Técnica do Pomodoro &#127813;</a></p>
            <p>Chronos Pomodoro &copy; 2026 - Feito por <a href={linkGitHub} target="_blank" rel="noopener noreferrer">Derik Carvalho</a></p>
        </footer>
    )
};