import HomeSection from "../sections/HomeSection";
import NextSection from "../sections/NextSection";
import FAQSection from "../sections/FAQSection";
import Footer from "../sections/Footer";

export default function HomePage() {
    return (
        <div className="bg-black text-white min-h-screen">
            <HomeSection />
            <NextSection />
            <FAQSection />
            <Footer />
        </div>
    );
}
