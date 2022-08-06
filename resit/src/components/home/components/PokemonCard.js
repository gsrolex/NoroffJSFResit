import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  return (
    <>
      {pokemon.map((pkmn) => {
        return (
          <Card
            className="m-2 linkBackground pt-2 border-0 mt-3"
            style={{ width: "18rem" }}
            key={pkmn.id}
          >
            <Card.Img
              className=" linkBackground"
              variant="top"
              src={pkmn.images.small}
            />
            <Card.Body className=" linkBackground">
              <Card.Title>
                <></>
              </Card.Title>

              <Link to={`/pokemon/${String(pkmn.id)}`}>
                <Button className="bg-light text-dark border-0 pkmnButton">
                  {pkmn.name}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default PokemonCard;
