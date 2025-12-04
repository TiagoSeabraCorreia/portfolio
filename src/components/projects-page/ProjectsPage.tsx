import img1 from "../../assets/img.jpg";
import { ProjectCard, type ProjectCardProps } from "./ProjectCard";


export function ProjectsPage() {
    const projects: ProjectCardProps[] = [
        {
            description: "Sistema completo de gestao e automacao",
            img: img1,
            name: "Sistema de projecto"
        },
        {
            description: "Sistema completo de gestao e automacao",
            img: img1,
            name: "Sistema de projecto"
        },
        {
            description: "Sistema completo de gestao e automacao",
            img: img1,
            name: "Sistema de projecto"
        }
    ];

    return (
        <div className="w-full flex flex-col fit-content sm:px-4 md:px-24 gap-24 py-32">
            <div className="flex-row">
                <span className="text-[56px]">Projects</span>
            </div>
            <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {
                    projects.map((item: ProjectCardProps, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                description={item.description}
                                img={item.img}
                                name={item.name}
                            />
                        )
                    })
                }
            </div>
        </div>
    );    
}
