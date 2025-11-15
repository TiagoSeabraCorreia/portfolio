import styles from "./css.module.css"

export interface TechStackData{
    title: string;
    stack: string[]
}
export default function Stack(data: TechStackData){

    return (
        <>
                <div className={styles.stack}>
                    <div className={styles.titleContainer}>
                        <span>{data.title}</span>
                    </div>
                
                    <div className={styles.skillsContainer}>
                        {
                            data.stack.map((skill: string, index: number) => 
                            (
                                <>
                                    <div key={index} className={styles.skillContainer}>
                                        <div className={styles.littleBall}>
                                        </div>
                                        <div className={styles.textContainer}>
                                            <span>{skill}</span>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
        </>
    )
}