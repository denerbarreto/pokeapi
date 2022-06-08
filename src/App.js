import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Pokemons from "./pages/Pokemons/Pokemons";
import Contact from "./pages/Contact/Contact";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokemons" element={<Pokemons />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
