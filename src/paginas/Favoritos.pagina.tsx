
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */

const PaginaFavoritos = () => {
  const favoritos = useSelector((state: RootState) => state.favoritos.lista);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
      </div>
      <div className="grilla-personajes">
        {favoritos.map((personaje) => (
          <TarjetaPersonaje key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </div>
  );
};

export default PaginaFavoritos;

/**
 * Componente de PaginaFavoritos que muestra todos los personajes que han sido marcados como favoritos.
 * Utiliza la Redux Store para acceder a la lista de elementos favoritos y los renderiza en un estilo de grilla utilizando el componente TarjetaPersonaje.
 * @returns {JSX.Element} - Elemento JSX que representa la página completa de personajes favoritos incluyendo el título y los personajes favoritos.
 */