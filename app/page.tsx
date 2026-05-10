import Navbar from '@/components/Navbar';
import HeroAnimation from '@/components/HeroAnimation';
import HeroContent from '@/components/HeroContent';
import Problem from '@/components/Problem';
import ROIRechner from '@/components/ROIRechner';
import Positionierung from '@/components/Positionierung';
import Leistungen from '@/components/Leistungen';
import Angebot from '@/components/Angebot';
import Garantie from '@/components/Garantie';
import WebsiteAnalyse from '@/components/WebsiteAnalyse';
import Referenzen from '@/components/Referenzen';
import Kontakt from '@/components/Kontakt';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroAnimation />
      <HeroContent />
      <Problem />
      <ROIRechner />
      <Positionierung />
      <Leistungen />
      <Angebot />
      <Garantie />
      <WebsiteAnalyse />
      <Referenzen />
      <Kontakt />
      <Footer />
    </>
  );
}
