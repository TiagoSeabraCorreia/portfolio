import styles from './css.module.css';

export default function HeroContent(){
    return (
        <>
            <section className={styles.heroContent}>
                <div className={styles.tagWordsContainer}>
                    <div className={styles.tagContainer}>
                    <div className={styles.tag}>
                        <span className={styles.text}>Fullstack Developer</span>
                    </div>
                    </div>
                    <div className={styles.heading1}>
                        <span>Bulding fluid experiences</span>
                        <span>in a flowing tech world</span>
                    </div>
                </div>
                <div className={styles.buttonsTextContainer}>
                    <div className={styles.textContainer}>
                        <span>
                            I believe technology isn't about 
                            rigid structures—it's about creating fluid, adaptive solutions that 
                            flow with the needs of users and the ever-evolving 
                            digital landscape.
                        </span>
                    </div>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.button}>
                            <span>View Projects</span>
                        </div>
                        <div className={styles.buttonBlack}>
                            <span>Get in Touch</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}