import { combineReducers } from "redux";
import personajesReducer from "./personajes.reducer";
import favoritoReducer from "./favoritos.reducer";

const rootReducer = combineReducers({
  personajes: personajesReducer, 
  favoritos: favoritoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

/**
 * Combina los reductores de personajes y favoritos en un único reductor raíz para la aplicación.
 * Este rootReducer define la forma del estado raíz de la aplicación y se usa para crear la tienda Redux.
 * Se usa `RootState` para inferir el tipo del estado completo de la aplicación para usar con useSelector en la aplicación.
 * @returns {RootState} - Un objeto de estado que representa todo el estado de la aplicación.
 */
