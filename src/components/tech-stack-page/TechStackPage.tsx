import typescript from "../../assets/typescript.svg";
import react from "../../assets/react.svg";
import nest from "../../assets/nest.svg";
import ng from "../../assets/angular.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import mongodb from "../../assets/mongodb.svg";
import rxjs from "../../assets/rxjs.svg";
import cloud from "../../assets/cloud.svg";

import { StackCard, type StackCardProps } from "./StackCard";

export function TechStack() {

    const techStack: StackCardProps[] = [
        {
            img: typescript,
            name: 'TypeScript'
        },
        {
            img: react,
            name: 'React'
        },
        {
            img: nest,
            name: 'Nest'
        },
        {
            img: ng,
            name: 'Angular'
        },
        {
            img: tailwindcss,
            name: 'Tailwindcss'
        },
        {
            img: mongodb,
            name: 'MongoDB'
        },
        {
            img: rxjs,
            name: 'RxJs'
        },
        {
            img: cloud,
            name: 'Deployment'
        }
    ];

    return (
        <div className="h-fit flex flex-col sm:px-4 md:px-24 gap-24">
            <div className="flex flex-row">
                <span className="text-[56px]">Tech Stack</span>
            </div>
            <div className="p-10 flex items-center justify-center w-full">
                <div className="grid gap-y-20 md:grid-cols-3 lg:grid-cols-4 w-full justify-items-center">
                    {
                        techStack.map((item: StackCardProps, index) => {
                            return <StackCard key={index} img={item.img} name={item.name}/>   
                        })
                    }                    
                </div>
            </div>
        </div>
    );
}
