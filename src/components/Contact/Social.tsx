import styles from "./css.module.css";


export interface SocialProps{
    icon: React.ReactNode;
    title: string;
}

export default function Social(socialProps: SocialProps){
    return (
        <>
            <div className={styles.social}>
                <div className={styles.icon}>
                    {socialProps.icon}
                </div>
                <div className={styles.title}>
                    <span>{socialProps.title}</span>
                </div>
            </div>
        </>
    );
    
}