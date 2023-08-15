import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Containers";
import { Home, About, Services } from "./Pages";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
