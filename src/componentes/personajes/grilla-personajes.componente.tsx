import { cargarPersonajes } from "../../actions/personajes.actions";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
const GrillaPersonajes = () => {
  const dispatch = useDispatch();
  // Obten los personajes desde el estado
  const personajes = useSelector((state) => state.personajes.lista);

  useEffect(() => {
    dispatch(cargarPersonajes());
  }, [dispatch]);

  return (
    <div className="grilla-personajes">
      <TarjetaPersonaje />
      <TarjetaPersonaje />
      <TarjetaPersonaje />
    </div>
  );
};

export default GrillaPersonajes;
