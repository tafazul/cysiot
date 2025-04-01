import ContactUsSection from './ui/contactus/conatactus';
import Footer from './ui/footer/footer';
import LandingSection from './ui/landing-section';
import ServicesAndSolutions from './ui/services/servicesAndSolutions';

export default function Page() {
  return (
    <div>
      
      <LandingSection />

      <ServicesAndSolutions />
      <ContactUsSection />
      {Footer()}
      {/* <main className="flex min-h-screen flex-col">
      </main> */}
    </div>
    
  );
}
