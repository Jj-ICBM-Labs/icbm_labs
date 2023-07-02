import Head from 'next/head'
import styles from 'modules/styles/Members.module.css'

import Nav from 'modules/components/Nav'
import Footer from 'modules/components/Footer'
import Scroll from 'modules/components/Scroll'

import Link from 'next/link';
import { profiles } from 'modules/Data/profile';

export default function Home() {
    return (
        <>
            <Head>
                <title>ICBM_LABS</title>
                <meta name="description" content="ICBM Members" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <Nav />
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.backBoard}>
                        <p className={styles.title}>ICBM Members</p>
                        <div className={styles.description}>
                            <p>ICBM의 자랑스러운</p>
                            <p>연구원들 입니다.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    {profiles.map(({ name, number }, index) => {
                        return <div className={styles.card} key={index}>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
                                <path d="M24.9375 24.5C28.3896 24.5 31.1875 21.7021 31.1875 18.25C31.1875 14.7979 28.3896 12 24.9375 12C21.4854 12 18.6875 14.7979 18.6875 18.25C18.6875 21.7021 21.4854 24.5 24.9375 24.5ZM29.3125 26.0625H28.4971C27.4131 26.5605 26.207 26.8438 24.9375 26.8438C23.668 26.8438 22.4668 26.5605 21.3779 26.0625H20.5625C16.9395 26.0625 14 29.002 14 32.625V34.6562C14 35.9502 15.0498 37 16.3438 37H33.5312C34.8252 37 35.875 35.9502 35.875 34.6562V32.625C35.875 29.002 32.9355 26.0625 29.3125 26.0625Z" fill="black" />
                            </svg>
                            <div className={styles.info}>
                                <p>{name}</p>
                                <p>{number}학번</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <Scroll />
            <Footer />
        </>
    )
}
