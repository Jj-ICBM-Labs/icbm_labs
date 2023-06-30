import styles from 'modules/styles/components/Nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Nav() {
    const [open, setOpen] = useState(false);
    const item = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (item.current) {
            if (open) {
                item.current.style.transform = 'translate(0, 334px)';
            } else {
                item.current.style.transform = 'none';
            }
        }
    }, [open]);

    const resize = () => {
        const { innerWidth } = window;
        if (item.current && innerWidth > 990 && open) {
            setOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.addEventListener('resize', resize, { passive: true });
            return () => {
                window.removeEventListener('resize', resize);
            }
        });
    }, []);



    return (
        <div className={styles.nav}>
            <div className={styles.left}>
                <Link href={"/"} scroll={false} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} className={styles.logo}>
                    <Image src={"/logo.png"} width={45} height={45} alt={"Logo"} />
                    <span className={styles.title}>
                        ICBM LABS
                    </span>
                </Link>
            </div>
            <span onClick={() => setOpen(!open)} className={styles.btn}>
                <svg width="40" height="40" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8621 20.4596H2.54964C2.34244 20.4596 2.14372 20.5419 1.99721 20.6884C1.8507 20.8349 1.76839 21.0336 1.76839 21.2408L1.76839 22.8033C1.76839 23.0105 1.8507 23.2092 1.99721 23.3557C2.14372 23.5023 2.34244 23.5846 2.54964 23.5846H22.8621C23.0693 23.5846 23.2681 23.5023 23.4146 23.3557C23.5611 23.2092 23.6434 23.0105 23.6434 22.8033V21.2408C23.6434 21.0336 23.5611 20.8349 23.4146 20.6884C23.2681 20.5419 23.0693 20.4596 22.8621 20.4596ZM22.8621 14.2096H2.54964C2.34244 14.2096 2.14372 14.2919 1.99721 14.4384C1.8507 14.5849 1.76839 14.7836 1.76839 14.9908L1.76839 16.5533C1.76839 16.7605 1.8507 16.9592 1.99721 17.1057C2.14372 17.2523 2.34244 17.3346 2.54964 17.3346H22.8621C23.0693 17.3346 23.2681 17.2523 23.4146 17.1057C23.5611 16.9592 23.6434 16.7605 23.6434 16.5533V14.9908C23.6434 14.7836 23.5611 14.5849 23.4146 14.4384C23.2681 14.2919 23.0693 14.2096 22.8621 14.2096ZM22.8621 7.95956H2.54964C2.34244 7.95956 2.14372 8.04187 1.99721 8.18838C1.8507 8.3349 1.76839 8.53361 1.76839 8.74081L1.76839 10.3033C1.76839 10.5105 1.8507 10.7092 1.99721 10.8557C2.14372 11.0023 2.34244 11.0846 2.54964 11.0846H22.8621C23.0693 11.0846 23.2681 11.0023 23.4146 10.8557C23.5611 10.7092 23.6434 10.5105 23.6434 10.3033V8.74081C23.6434 8.53361 23.5611 8.3349 23.4146 8.18838C23.2681 8.04187 23.0693 7.95956 22.8621 7.95956ZM22.8621 1.70956H2.54964C2.34244 1.70956 2.14372 1.79187 1.99721 1.93838C1.8507 2.0849 1.76839 2.28361 1.76839 2.49081L1.76839 4.05331C1.76839 4.26051 1.8507 4.45922 1.99721 4.60574C2.14372 4.75225 2.34244 4.83456 2.54964 4.83456H22.8621C23.0693 4.83456 23.2681 4.75225 23.4146 4.60574C23.5611 4.45922 23.6434 4.26051 23.6434 4.05331V2.49081C23.6434 2.28361 23.5611 2.0849 23.4146 1.93838C23.2681 1.79187 23.0693 1.70956 22.8621 1.70956Z" fill="#e2e2e2" />
                </svg>
            </span>
            <div ref={item} className={styles.items}>
                <Link onClick={() => setOpen(false)} href={"/#intro"} scroll={false}>
                    소개
                </Link>
                <Link onClick={() => setOpen(false)} href={"/#research"} scroll={false}>
                    연구
                </Link>
                <Link onClick={() => setOpen(false)} href={"/#welfare"} scroll={false}>
                    복지
                </Link>
                <Link onClick={() => setOpen(false)} href={"/#icbm"} scroll={false}>
                    지원
                </Link>
                <Link onClick={() => { setOpen(false) }} href={"/Members"} scroll={false}>
                    연구원
                </Link>
            </div>
        </div>
    )
}