import { Dispatch } from "redux";
import { getPersonajes } from "../services/personaje.service";
import Personaje from "../types/personaje.types";

// Define los tipos de acción:
export const CARGAR_PERSONAJES_INICIO = "CARGAR_PERSONAJES_INICIO";
export const CARGAR_PERSONAJES_EXITO = "CARGAR_PERSONAJES_EXITO";
export const CARGAR_PERSONAJES_ERROR = "CARGAR_PERSONAJES_ERROR";

// Define las interfaces para cada acción:
interface CargarPersonajesInicioAction {
  type: typeof CARGAR_PERSONAJES_INICIO;
}

interface CargarPersonajesExitoAction {
  type: typeof CARGAR_PERSONAJES_EXITO;
  payload: Personaje[];
}

interface CargarPersonajesErrorAction {
  type: typeof CARGAR_PERSONAJES_ERROR;
  error: string;
}

// Combina las acciones en un tipo de acción:
export type PersonajeActionTypes =
  | CargarPersonajesInicioAction
  | CargarPersonajesExitoAction
  | CargarPersonajesErrorAction;

export type DispatchType = (args: PersonajeActionTypes) => void;

// Define las acciones:
export const cargarPersonajesInicio = (): PersonajeActionTypes => ({
  type: CARGAR_PERSONAJES_INICIO,
});

export const cargarPersonajesExito = (
  personajes: Personaje[]
): PersonajeActionTypes => ({
  type: CARGAR_PERSONAJES_EXITO,
  payload: personajes,
});

export const cargarPersonajesError = (error: string): PersonajeActionTypes => ({
  type: CARGAR_PERSONAJES_ERROR,
  error,
});

// Define la acción thunk para cargar los personajes:
export const cargarPersonajes = (nombre?: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(cargarPersonajesInicio());

    try {
      const personajes = await getPersonajes(nombre); // pasa el nombre a la función getPersonajes

      const personajesConFavorito = personajes.map((personaje) => ({
        ...personaje,
        esFavorito: false,
      })); // agregas esFavorito a cada personaje

      dispatch(cargarPersonajesExito(personajesConFavorito));
    } catch (error: any) {
      dispatch(cargarPersonajesError((error as Error).toString()));
    }
  };
};
