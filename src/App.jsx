import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

const App = () => {

  
  return ( 
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zink-500  ">
      <Navbar/>
      <Hero/> 
      <About/>
    </main>
   )
}
 
export default App;