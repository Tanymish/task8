import Header from '../components/header';
import Footer from '../components/footer';
import Home from '@/components/sec1'; 
import FAQSection from '../components/sec2'
import FeaturedCardsSection from '../components/sec3'
import ContactSection from '../components/sec4'
import SubscribeSection from '../components/sec5'

export default function homee() {
  return (
    <div>
      <Header/>
      <Home/>
      <FAQSection/>
      <FeaturedCardsSection/>
      <ContactSection/>
      <SubscribeSection/>
      <Footer/>
    </div>
  );
}