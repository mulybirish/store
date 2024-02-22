import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/store" element={<Store />}>
          Store
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
