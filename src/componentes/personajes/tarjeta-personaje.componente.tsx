import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import Personaje from "../../types/personaje.types";
import {
  agregarFavorito,
  removerFavorito,
} from "../../actions/favorito.actions";
import { useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
interface TarjetaPersonajeProps {
  personaje: Personaje;
}

const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ personaje }) => {
  const dispatch = useDispatch();

  const favoritos = useSelector((state: RootState) => state.favoritos.lista);

  const esFavorito = favoritos.some((favorito) => favorito.id === personaje.id);

  const handleFavoriteClick = () => {
    // Si el personaje es favorito, lo removemos
    // Si no es favorito, lo agregamos
    if (esFavorito) {
      dispatch(removerFavorito(personaje.id));
    } else {
      dispatch(agregarFavorito(personaje));
    }
  };

  return (
    <div className="tarjeta-personaje">
      <img src={personaje.image} alt={personaje.name} />
      <div className="tarjeta-personaje-body">
        <span>{personaje.name}</span>
        <BotonFavorito esFavorito={esFavorito} onClick={handleFavoriteClick} />
      </div>
    </div>
  );
};
export default TarjetaPersonaje;
