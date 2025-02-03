import About from "./components/about";
import Contact from "./components/contact";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

const App = () => {

  
  return ( 
    <main className="relative min-h-screen w-screen overflow-x-hidden  ">
      <Navbar/>
      <Hero/> 
      <About/>
      <Features/>
      <Contact/>
      <Footer/>
    </main>
   )
}
 
export default App;