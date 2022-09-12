import Experience from "./Components/Experience/Experience";
import Feature from "./Components/Feature/Feature";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <Services />
      <Experience />
      <Feature />
    </div>
  );
}

export default App;
