import {
  CARGAR_PERSONAJES_INICIO,
  CARGAR_PERSONAJES_EXITO,
  CARGAR_PERSONAJES_ERROR,
  PersonajeActionTypes,
} from "../actions/personajes.actions";
import Personaje from "../types/personaje.types";

// Define el estado inicial
interface PersonajeState {
  lista: Personaje[];
  cargando: boolean;
  error: string | null;
  apiInfo: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
}

const initialState: PersonajeState = {
  lista: [],
  cargando: false,
  error: null,
  apiInfo: {
    count: 0,
    next: "",
    pages: 0,
    prev: "",
  },
};

// Define el reducer
const personajesReducer = (
  state = initialState,
  action: PersonajeActionTypes
): PersonajeState => {
  switch (action.type) {
    case CARGAR_PERSONAJES_INICIO:
      return {
        ...state,
        cargando: true,
        error: null,
      };
    case CARGAR_PERSONAJES_EXITO:
      return {
        ...state,
        lista: action.payload,
        cargando: false,
        error: null,
        
      };
    case CARGAR_PERSONAJES_ERROR:
      return {
        ...state,
        cargando: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default personajesReducer;
