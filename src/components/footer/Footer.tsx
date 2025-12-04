import email from "../../assets/email.svg";
import github from "../../assets/github.svg";

export function Footer() {
    return (
        <div className="flex flex-col w-full items-center justify-center gap-20 sm:pb-10 md:p-24">
            <div className="">
                <span>Este website nao utiliza quaisquer cookies.</span>
            </div>
            <div className="w-full flex sm:flex-col  md:flex-row md:justify-around sm:justify-center sm:items-center gap-8">
                <div className="items-center justify-center flex flex-row w-[280px] gap-4">
                    <div>
                        <img src={email} alt="" />
                    </div>
                    <div>
                        <span>tiagoseabracorreia@gmail.com</span>
                    </div>
                </div>
                <div className="items-center justify-center flex flex-row w-[280px] gap-4">
                    <div>
                        <img src={github} alt="" />
                    </div>
                    <div >
                        <span>Github</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full items-center justify-center">
                <span>@ 2025 Tiago Correia</span>
            </div>
        </div>
    );
}
