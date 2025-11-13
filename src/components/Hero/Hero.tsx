import styles from "./css.module.css";
import HeroContent from './HeroContent';

export default function Hero(){
    return (
        <>
            <div className={styles.main}>
                <HeroContent />
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M8 12L16 20L24 12" stroke="#7C86FF" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className={styles.squareContainers}>
                    <div className={styles.square1}></div>
                    <div className={styles.square2}></div>
                    <div className={styles.square3}></div>
                </div>
            </div>
        </>
    );
}