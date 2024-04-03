import React, { useState } from "react";
import "./filtros.css";
import { cargarPersonajes } from "../../actions/personajes.actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

const Filtros = () => {
  const [filtro, setFiltro] = useState("");
  const dispatch = useDispatch<AppDispatch>(); // Usa AppDispatch

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value);
    dispatch(cargarPersonajes(event.target.value)); // pasa el valor del filtro a cargarPersonajes
  };

  const limpiarFiltros = () => {
    setFiltro("");
    dispatch(cargarPersonajes()); // carga los personajes sin filtros
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        id="nombre"
        value={filtro}
        onChange={changeHandler}
      />
      <button onClick={limpiarFiltros}>Limpiar filtros</button>
    </div>
  );
};

export default Filtros;

/**
 * Componente de Filtros que permite al usuario filtrar la lista de personajes por nombre y limpiar los filtros aplicados.
 * Además, actualiza la lista de personajes en función del filtro ingresado.
 * @returns {JSX.Element} - Elemento JSX que contiene los campos de filtro y botones de limpieza de filtros.
 */