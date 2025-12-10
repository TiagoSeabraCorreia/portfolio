
export function LandingPage() {
    return (
        <div className="
            flex
            sm:flex-col sm:items-start sm:px-6 sm:gap-20 sm:h-screen sm:justify-center
            md:h-screen md:flex-row md:justify-between md:items-center
            lg:h-screen lg:px-24 lg:flex-row lg:flex lg:justify-between lg:items-center"
            >
                <div className="flex flex-col gap-0">
                    <span className="md:text-[96px] sm:text-[96px] sm:leading-[90px] lg:text-[144px] font-inter lg:leading-[130px] font-bold">Tigas Correia</span>
                    <span  className="md:text-[96px] sm:text-[96px] sm:leading-[90px] lg:text-[144px] lg:leading-[130px] font-bold font-inter">Correia</span>
                </div>
            <div className="
                gap-10
                sm:w-full flex sm:flex-row sm:items-center sm:justify-center
                md:flex-col md:w-fit md:gap-10 
                lg:flex-col
                ">
                <span>Engineer</span>
                <span>Builder</span>
                <span>Creator</span>
            </div>
        </div>
    );
}
