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
    </div>
}