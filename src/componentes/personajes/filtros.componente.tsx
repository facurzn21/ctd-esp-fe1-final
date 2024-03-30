import React, { useState } from "react";
import "./filtros.css";

const Filtros = () => {
  const [filtro, setFiltro] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value);
  };

  const limpiarFiltros = () => {
    setFiltro("");
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
