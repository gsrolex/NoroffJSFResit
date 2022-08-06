import { Link } from "react-router-dom";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PokemonCard from "./components/PokemonCard";
import Heading from "../layout/Heading";
import SearchInput from "./SearchInput";
import Spinner from "react-bootstrap/Spinner";

export default function Home({ pokemon, type }) {
  const [searchInput, setSearchInput] = useState("");
  const onSearchCallback = (value) => {
    setSearchInput(value);
    console.log("here", pokemon);
  };

  if (pokemon.length === 0) {
    return (
      <>
        <div className="p-5 center">
          <Spinner className="  center" animation="border" variant="warning" />
        </div>
      </>
    );
  }

  if (type) {
    pokemon = pokemon.filter((pkmn) => {
      return pkmn.types.findIndex((element) => {
        return element.toLowerCase() !== type.toLowerCase();
      });
    });
  }

  let dropdownPokemons = [];
  if (searchInput) {
    dropdownPokemons = pokemon
      .filter((pkmn) => {
        return pkmn.name.toLowerCase().includes(searchInput.toLowerCase());
      })
      .slice(0, 5);
  }

  return (
    <>
      <div className="text-center ">
        <Heading
          className="text-light"
          content={type ? `${type} type Pokemon` : "Pokemon"}
        />
        <SearchInput onSearchCallback={onSearchCallback} />
        <div className="dropdownContainer">
          {dropdownPokemons
            ? dropdownPokemons.map((pkmn) => {
                return (
                  <Link to={`/pokemon/${String(pkmn.id)}`}>
                    <div className="dropdownContainer dropdownName">
                      {pkmn.name}
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
      </div>
      <Container className="d-flex justify-content-center ">
        <Row
          className=" d-flex justify-content-center text-center"
          xs={6}
          md={3}
        >
          <PokemonCard pokemon={pokemon} type={type} />
        </Row>
      </Container>
    </>
  );
}
