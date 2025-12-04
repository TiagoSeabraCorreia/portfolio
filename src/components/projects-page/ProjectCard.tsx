export interface ProjectCardProps {
    name: string;
    description: string;
    img: string;
}

export function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-4xl overflow-clip  lg:w-[380px]">
                <img className="object-cover lg:w-[380px] lg:h-[286px]" src={props.img} alt="A" />
            </div>
            <div className="flex flex-col">
                <span className="text-[28px] font-semibold leading-9 -tracking-wide">
                    Flowed Platform
                </span>
                <span className="text-[16px] tracking-[0.16px]">
                    Sistema completo de gestao e automacao
                </span>
            </div>
        </div>
    );
}
