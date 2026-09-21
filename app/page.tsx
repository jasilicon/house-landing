import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";
import LeadCapturePopup from "@/components/LeadCapturePopup";
export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bright & Clean Home Services",
    "url": "https://www.exampe.com",
    "logo": "https://www.exampe.com/logo.png"
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ConsentBanner />
      <Hero />
      <Benefits />
      <SocialProof />
      <Offer />
      <FAQ />
      <LeadForm />
      <Footer />
      <LeadCapturePopup/>
    </main>
  );
}