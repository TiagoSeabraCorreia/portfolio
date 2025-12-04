export interface StackCardProps{
    img: string;
    name: string;
}

export function StackCard(props: StackCardProps) {
    return (
        <div className="hover:scale-105 transition-transform duration-300 flex flex-col gap-6 w-[200px] h-[200px] bg-[#F8F3ED] border border-[#D6D1C7] rounded-4xl items-center justify-center">
            <img src={props.img} className="w-11 h-11" alt="" />
            <span>{props.name}</span>
        </div>
    );
}
