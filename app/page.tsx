import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import  PointsTable  from './components/Pointstable/Pointstable';
import { Schedule } from './components/Shedule/Shedule';
import { Teams } from './components/Teams/Teams';
import { Sponsors } from './components/Sponsors/Sponsors';
import { About } from './components/About/About';
import { Gallery } from './components/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';
import { Results } from './components/Results/Results';
import NewsPopup from './components/News/NewsPopup';
import Champion from './components/Champion/champion';

const Home = () => {
  const images = [
    "/news/3.jpg",
    "/news/4.jpg",
    "/news/5.jpg",
    "/news/6.jpg",
    "/news/7.jpg",
    

  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* <NewsPopup images={images}   /> */}
      <Navbar />
      <NewsPopup images={images} />
        
      <section id="hero">
        {/* Hero should contain the ONLY H1 */}
        <Champion/>
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="teams">
        <Teams />
      </section>

      <section id="schedule">
        <Schedule />
      </section>

      <section id="results">
        <Results />
      </section>

      <section id="points">
        <PointsTable />
      </section>

      <section id="sponsors">
        <Sponsors />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
