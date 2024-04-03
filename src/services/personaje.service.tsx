import Personaje from "../types/personaje.types";

export const getPersonajes = async (
  nombre?: string,
  pagina: number = 1
): Promise<Personaje[]> => {
  let params = `?page=${pagina}`;

  if (nombre) {
    params += `&name=${nombre}`; // agrega el nombre a los parámetros de consulta si está presente
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

/**
 * Función asíncrona para buscar en la API de Rick and Morty la lista de personajes.
 * Opcionalmente, puede filtrar por nombre y manejar la paginación.
 * @param {string} nombre - El nombre del personaje a filtrar en la API.
 * @param {number} pagina - El número de la página a solicitar a la API.
 * @return {Promise<Personaje[]>} - Devuelve una promesa que resuelve con una lista de objetos de tipo Personaje.
 */