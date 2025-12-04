import { Footer } from "../footer/Footer";
import { LandingPage } from "../landing-page/LandingPage";
import { ProjectsPage } from "../projects-page/ProjectsPage";
import { TechStack } from "../tech-stack-page/TechStackPage";
export function Page() {
    return (
        <div className="bg-[#FAF6F0] box-border pt-4">
            <LandingPage />
            <ProjectsPage />
            <TechStack />
            <Footer />
        </div>
    );
}
