import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Pokemons from "./pages/Pokemons/Pokemons";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemons" element={<Pokemons />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </React.StrictMode>
  );
}

export default App;
