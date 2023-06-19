import { researchTypes } from "modules/Types/home";
import styles from 'modules/styles/components/Research.module.css'

export default function Research({ research, startDate, endDate }: researchTypes) {
    return <div className={styles.research}>
        <p className={styles.date}>
            {startDate} ~ {endDate}
        </p>
        <p className={styles.title}>
            {research}
        </p>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 15L17.6603 0H0.339746L9 15Z" fill="var(--text-200)" />
        </svg>
    </div>
}