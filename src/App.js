import Experience from "./Components/Experience/Experience";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <Services />
      <Experience />
    </div>
  );
}

export default App;
