import styles from "./css.module.css";
import SectionIntro from "../SectionIntro/SectionIntro";
import type { TechStackData } from "./Stack";
import Stack from "./Stack";



export default function TechStack(){
    const data: TechStackData[] = [
        {
            title: 'Frontend',
            stack: ['React', 'TypeScript', 'Angular 18+', 'Tailwind CSS', 'CSS']
        },
        {
            title: 'Backend',
            stack: ['React', 'TypeScript', 'Angular 18+', 'Tailwind CSS', 'CSS']
        },
        {
            title: 'DevOps & Tools',
            stack: ['React', 'TypeScript', 'Angular 18+', 'Tailwind CSS', 'CSS']
        }
    ];

    return (
        <>
            <section className={styles.main}>
                <SectionIntro title="About me" description="I'm a developer who sees code as a creative medium, where structure meets fluidity to create experiences that adapt and flow."/>
                <div className={styles.skills}>
                    {
                        data.map((data, index) => (
                            <Stack key={index} title={data.title} stack={data.stack} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}