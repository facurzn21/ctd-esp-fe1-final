import Personaje from "../types/personaje.types";

export const getPersonajes = async (
  nombre?: string,
  pagina: number = 1
): Promise<Personaje[]> => {
  let params = `?page=${pagina}`;

  if (nombre) {
    params += `&name=${nombre}`;
  }

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${params}`
  );

  if (!response.ok) {
    throw new Error(
      `Hubo un problema obteniendo los personajes: ${response.statusText}`
    );
  }

  const data = await response.json();

  if (!data || !Array.isArray(data.results)) {
    throw new Error("Respuesta mal formada desde la API");
  }

  return data.results;
};
