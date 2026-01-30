import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Demo } from './components/sections/Demo';
import { SocialProof } from './components/sections/SocialProof';
import { WhyDefensible } from './components/sections/WhyDefensible';
import { Capabilities } from './components/sections/Capabilities';
import { EngagementModels } from './components/sections/EngagementModels';
import { About } from './components/sections/About';
import { ProfessionalNote } from './components/sections/ProfessionalNote';
import { RecruiterSection } from './components/sections/RecruiterSection';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Modal } from './components/ui/Modal';
import { StickyCTA } from './components/ui/StickyCTA';
import { useModal } from './hooks/useModal';

function App() {
  const { modalType, openModal, closeModal } = useModal();

  return (
    <>
      <Navbar onOpenModal={openModal} />

      <main>
        <Hero onOpenModal={openModal} />
        <Demo />
        <SocialProof />
        <WhyDefensible />
        <Capabilities />
        <EngagementModels onOpenModal={openModal} />
        <About onOpenModal={openModal} />
        <ProfessionalNote />
        <RecruiterSection />
        <FAQ />
        <FinalCTA onOpenModal={openModal} />
      </main>

      <Footer onOpenModal={openModal} />

      <StickyCTA onOpenModal={openModal} />

      {modalType && <Modal type={modalType} onClose={closeModal} />}
    </>
  );
}

export default App;
