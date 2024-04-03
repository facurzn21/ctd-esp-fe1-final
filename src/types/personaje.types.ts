export default interface Personaje {
  id: number;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: { name: string; url: string };
  location?: { name: string; url: string };
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
  esFavorito: boolean;
}
/**
 * Personaje es una interfaz que define la estructura de un personaje para el programa. 
 * Incluye su id, nombre, estado, especie, tipo, género, origen, ubicación, imagen, episodios, URL, la fecha de creación y si ha sido marcado como favorito.
 */