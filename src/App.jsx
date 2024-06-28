import React from "react";
import Navbar from "./components/CustomNavbar";
import "./App.css";
// import Gallery from "./components/Gallery";
import Footer from "./components/CustomFooter";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App bg-dark text-white">
      <Navbar />
      <Container>
        <main>
          <h1>qui la libreria</h1>
          {/* <Gallery /> */}
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
