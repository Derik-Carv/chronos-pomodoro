import { AlarmClock } from "lucide-react"
import { HeaderButtons } from "./HeaderButtons"
import styles from './Header.module.css';

export const HeaderPrincipal = () => {
    const headerCss = `${styles.header}`;
    return (
        <header className={headerCss}>
            <AlarmClock />
            <h1>Chronos</h1>
            <HeaderButtons />
        </header>
    )
}