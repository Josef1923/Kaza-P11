import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement"
import Error from "./pages/404";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
