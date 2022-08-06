import "./stylesheets/style.css";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Navv from "./components/layout/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemon from "./components/home/components/pokemon/Pokemon";
import useAxios from "./hooks/axios";

function App() {
  const http = useAxios();
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(function () {
    async function getAllPokemon() {
      try {
        const response = await http.get("v2/cards/");
        setPokemon(response.data.data);
      } catch (error) {
        setError(error.toString());
      } finally {
      }
    }

    getAllPokemon();
  }, []);

  return (
    <>
      <Navv />
      <Routes>
        <Route path="/" element={<Home pokemon={pokemon} />} />
        <Route path="grass" element={<Home pokemon={pokemon} type="Grass" />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="pokemon/:pokemonId"
          element={<Pokemon pokemon={pokemon} />}
        />
      </Routes>
    </>
  );
}

export default App;
