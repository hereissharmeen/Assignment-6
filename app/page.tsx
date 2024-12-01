import TopBar from './components/Topbar';
import Hero from './components/Hero';
import TrustedSection from './components/TrustedSection';
import Categories from './components/Categories';
import Achievements from './components/Achievements';
import Courses from './components/Courses';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <TrustedSection/>
      <Categories />
      <Achievements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
}
