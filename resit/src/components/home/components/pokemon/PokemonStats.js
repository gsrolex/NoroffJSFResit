import Card from "react-bootstrap/Card";

function PokemonStats({ pokemon }) {
  console.log(pokemon);
  return (
    <>
      <Card.Title className="text-light">
        <span className="text-danger">HP{pokemon.hp}</span>
      </Card.Title>
      <Card.Text className="text-light" variant="light">
        <span className="text-warning">Type:</span> {pokemon.types[0]}
      </Card.Text>
      <Card.Text className="text-light" variant="light">
        <span className="text-warning">Attack:</span> {pokemon.attacks[0].name}
        <span className="text-danger">
          &#160;{pokemon.attacks[0].damage}&#160;
        </span>
        <span className="text-danger">Damage</span>
      </Card.Text>
      {pokemon.weaknesses ? (
        <Card.Text className="text-light" variant="light">
          <span className="text-warning">Weaknesses:</span>{" "}
          {pokemon.weaknesses[0].type}
          <span className="text-danger">&#160;</span>
          <span className="text-danger">{pokemon.weaknesses[0].value}</span>
        </Card.Text>
      ) : null}
      <Card.Text className="text-light" variant="light">
        <span className="text-warning">Rarity:</span> {pokemon.rarity}
      </Card.Text>
      <Card.Text className="text-light" variant="light">
        <span className="text-warning">Artist:</span> {pokemon.artist}
      </Card.Text>
      <Card.Text className="text-light" variant="light">
        <span className="text-warning">Info:</span> {pokemon.flavorText}
      </Card.Text>
      <Card.Text className="text-light" variant="light">
        <span className="text-warning">National Pokedex Number</span> <br></br>{" "}
        <span className="text-info">{pokemon.nationalPokedexNumbers[0]}</span>
      </Card.Text>
    </>
  );
}

export default PokemonStats;
