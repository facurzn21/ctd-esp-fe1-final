import { useDispatch, useSelector } from "react-redux";
import { cargarPersonajes } from "../../actions/personajes.actions";
import "./paginacion.css";
import { RootState } from "../../reducers/rootReducer";

import { AppDispatch } from "../../store/store";
/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion = (): JSX.Element => {
  const { apiInfo } = useSelector((state: RootState) => state.personajes);
  const dispatch = useDispatch<AppDispatch>(); // Usa AppDispatch

  const prev = apiInfo ? apiInfo?.prev : "";
  const prevContent = prev !== null ? prev.split("?")[1] : "";
  const prevPage = () => dispatch(cargarPersonajes(prevContent));

  const next = apiInfo ? apiInfo.next : "";
  const nextContent = next !== null ? next.split("?")[1] : "";
  const nextPage = () => dispatch(cargarPersonajes(nextContent));

  return (
    <div className="paginacion">
      <button
        disabled={prev === null ? true : false}
        onClick={prevPage}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        disabled={next === null ? true : false}
        onClick={nextPage}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;

/**
 * Componente de Paginación que permite a los usuarios navegar entre las páginas de personajes de la API de Rick and Morty.
 * Dispone botones para moverse a la página anterior y siguiente de la lista de personajes.
 * El botón de 'Anterior' se desactiva cuando no hay más páginas anteriores y el botón 'Siguiente' se desactiva cuando no hay más páginas siguientes.
 * @returns {JSX.Element} - Elemento JSX que representa los botones de paginación.
 */
