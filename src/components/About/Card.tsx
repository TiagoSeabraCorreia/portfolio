import styles from "./css.module.css"

export interface CardData{
    icon: React.ReactNode,
    heading: string,
    content: string
}
export default function Card(data: CardData){
    return (
        <>
            <div className={styles.card}>
                <div className={styles.iconContainer}>
                    {data.icon}
                </div>
                <div className={styles.headingContainer}>
                    <span className={styles.headingSpan}>{data.heading}</span>
                </div>
                <div className={styles.cardBodyContainer}>
                    <span className={styles.bodySpan}>{data.content}</span>
                </div>
            </div>                      

        </>
    )
}