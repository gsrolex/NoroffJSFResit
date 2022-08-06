import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useState } from "react";
import PokemonStats from "./PokemonStats";

function findPokemon(id, pokemon) {
  return pokemon.filter((onePokemon) => {
    if (onePokemon.id === id) {
      return true;
    }
  })[0];
}

function Pokemon({ pokemon }) {
  const params = useParams();
  const id = params.pokemonId;
  const thisPokemon = findPokemon(id, pokemon);
  const [showMore, setShowMore] = useState(false);

  return thisPokemon ? (
    <div className=" mt-5 pt-5 center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={thisPokemon.images.small} />
        <Card.Body>
          <Card.Title className="text-light"> {thisPokemon.name} </Card.Title>
          {showMore ? <PokemonStats pokemon={thisPokemon} /> : null}
          <Card.Text
            className="text-light"
            variant="light"
            onClick={() => setShowMore(!showMore)}
          >
            <h3 className="text-success border bg-light rounded mt-4">
              {showMore ? "Show less" : "Show more"}
            </h3>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  ) : (
    <Card.Text>Can't find your pokemon</Card.Text>
  );
}

export default Pokemon;
