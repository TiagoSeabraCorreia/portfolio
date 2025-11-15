import styles from "./css.module.css"

export interface SectionIntro{
    title: string;
    description: string;
}

export default function SectionIntro(data: SectionIntro){
    return (
        <>
            <div className={styles.aboutMe}>
                <div className={styles.fadeTextContainer}>
                    <span className={styles.fadeText}>{data.title}</span>
                </div>
                <div className={styles.longTextContainer}>
                    <span className={styles.longText}>{data.description}</span>
                </div>
            </div>
        </>
    )
}