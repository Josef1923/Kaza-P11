import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import APropos from "./pages/APropos/APropos";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Error from "./pages/404/404";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
