import HomeSection from "../sections/HomeSection";
import FeaturesSection from "../sections/FeaturesSection";
import FAQSection from "../sections/FAQSection";
import Footer from "../sections/Footer";
import Reviews from "../sections/Reviews";

export default function HomePage() {
    return (
        <div className="bg-black text-white min-h-screen">
            <HomeSection />
            <FeaturesSection />
            <Reviews/>
            <FAQSection />
            <Footer />
        </div>
    );
}
