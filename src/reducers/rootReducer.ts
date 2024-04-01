import { combineReducers } from "redux";
import personajesReducer from "./personajes.reducer";
import favoritoReducer from "./favoritos.reducer";

const rootReducer = combineReducers({
  personajes: personajesReducer, 
  favoritos: favoritoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;