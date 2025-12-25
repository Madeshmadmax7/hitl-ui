import HomeSection from "../sections/HomeSection";
import FeaturesSection from "../sections/FeaturesSection";
import FAQSection from "../sections/FAQSection";
import Reviews from "../sections/Reviews";
import Services from "../sections/Services";
import Collaborators from "../sections/Collaborators";

export default function HomePage() {
    return (
        <div className="bg-black text-white min-h-screen">
            <HomeSection />
            <FeaturesSection />
            <Services/>
            <Collaborators/>
            <Reviews/>
            <FAQSection />
        </div>
    );
}
