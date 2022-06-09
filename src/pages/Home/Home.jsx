import { Link } from "react-router-dom";
import banner from "../../assets/banner.svg";
import { usePrefetchPokemons } from "../../hooks/usePokemons";

import "./Home.scss";

const Home = () => {
  // Prefetch the first page of the pokemons list
  usePrefetchPokemons();
  return (
    <div className="container hero__wrapper">
      <div className="hero">
        <div className="hero__text">
          <div className="hero__text-heading">
            <h1>
              Qual pokemon você{" "}
              <span>
                escolheria?<span></span>
              </span>
            </h1>
            <p>
              Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
              habilidades.
            </p>
          </div>
          <Link to="/pokemons" className="hero__text-cta">
            <p>Veja os pokemons</p>
          </Link>
        </div>
        <div className="hero__banner">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
