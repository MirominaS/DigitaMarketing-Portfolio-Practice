import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
import About from './components/About/About';
import Qualities from './components/Qualities/Qualities';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <section id="services">
         <Services/>
      </section>
      <section id="about">
          <About/>
      </section>
      <section id="quality">
          <Qualities/>
      </section> 
       
       <Features/>
       <Portfolio/>
       <Testimonials/>
       <section id="contact">
         <Contacts/>
      </section>
       <Footer/>
    </div>
  );
}

export default App;
