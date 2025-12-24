import HomeSection from "../sections/HomeSection";
import FeaturesSection from "../sections/FeaturesSection";
import FAQSection from "../sections/FAQSection";
import Reviews from "../sections/Reviews";
import Services from "../sections/Services";

export default function HomePage() {
    return (
        <div className="bg-black text-white min-h-screen">
            <HomeSection />
            <FeaturesSection />
            <Services/>
            <Reviews/>
            <FAQSection />
        </div>
    );
}
