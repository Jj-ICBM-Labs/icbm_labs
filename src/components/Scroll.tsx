import styles from 'modules/styles/components/Scroll.module.css'
import { useCallback, useEffect, useRef } from 'react';

export default function scroll() {
    const circle = useRef<SVGCircleElement>(null);

    const getScroll = useCallback(() => {
        /* stroke-dashoffset: 259%; */
        const { scrollY, innerHeight } = window;
        const { clientHeight } = document.body;

        const per = Math.floor((scrollY / (clientHeight - innerHeight)) * 439) + 0.0001;
        
        if (circle.current) {
            circle.current.style.strokeDashoffset = String(-per);
            // console.log(per)
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.addEventListener('scroll', getScroll, { passive: true });
            return () => {
                window.removeEventListener('scroll', getScroll);
            }
        });
    }, []);

    return <div className={styles.scroll}>
        <div className={styles.container}>
            <div className={styles.container__progressbars}>
                <div className={styles.progressbar}>
                    <svg className={styles.progressbar__svg}>
                        <circle ref={circle} cx="80" cy="80" r="70" className={`${styles.progressbar__svg_circle} ${styles.circle_html} ${styles.shadow_html}`}> </circle>
                    </svg>
                    <span className={`${styles.progressbar__text} ${styles.shadow_html}`}>ICBM</span>
                </div>
            </div>
        </div>
    </div>
}