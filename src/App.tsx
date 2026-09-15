import "./App.css";
import RoutesApp from "./routes/Routes";
import  Navbar  from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
          <Navbar />
          <RoutesApp />
          <Footer />
    </>
  );
}

export default App;
