import styles from 'modules/styles/components/Footer.module.css';
import { useEffect, useRef } from 'react';

export default function Footer() {
    const version = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        if (version.current) {
            fetch("/api/getVersion").then((res) => {
                res.json().then((json: { version: string }) => {
                    version.current!.innerHTML = "Version : " + json.version;
                })
            })
        };
    }, []);

    return (
        <div className={styles.footer}>
            <p>Copyright &copy; 2023. ICBM_LABS. All rights reserved.</p>
            <p ref={version}>Version : </p>
        </div >
    )
}