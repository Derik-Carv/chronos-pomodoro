import { Home, ClockPlus, Cog, Sun } from 'lucide-react'
import styles from './HeaderButtons.module.css';

export const HeaderButtons = () => {
    const buttonsHeader = styles.btnsHeader;
    return (
        <div className={buttonsHeader}>
            <button><Home /></button>
            <button><ClockPlus /></button>
            <button><Cog /></button>
            <button><Sun /></button>
        </div>
    )
}