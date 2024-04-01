import { combineReducers } from "redux";
import personajesReducer from "./personajes.reducer";

const rootReducer = combineReducers({
  personajes: personajesReducer, // Puedes agregar más reducers aquí cuando los necesites
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;