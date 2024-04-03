import { cargarPersonajes } from "../../actions/personajes.actions";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AppDispatch } from "../../store/store";


/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */

const GrillaPersonajes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const personajes = useSelector((state: RootState) => state.personajes.lista);

  useEffect(() => {
    dispatch(cargarPersonajes());
  }, [dispatch]);

  return (
    <div className="grilla-personajes">
      {personajes.map((personaje) => (
        <TarjetaPersonaje key={personaje.id} personaje={personaje} />
      ))}
    </div>
  );
};

export default GrillaPersonajes;

/**
 * Componente de GrillaPersonajes que muestra una grilla de personajes y se encarga de cargar la información de los personajes desde el estado global.
 * @returns {JSX.Element} - Elemento JSX que representa la grilla de personajes.
 */
