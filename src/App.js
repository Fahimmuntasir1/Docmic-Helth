import Experience from "./Components/Experience/Experience";
import FaQ from "./Components/FaQ/FaQ";
import Feature from "./Components/Feature/Feature";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <Services />
      <Experience />
      <Feature />
      <FaQ />
      <Testimonial />
    </div>
  );
}

export default App;
