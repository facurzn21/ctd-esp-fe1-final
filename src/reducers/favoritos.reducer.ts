import Personaje from "../types/personaje.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritoState {
  lista: Personaje[];
}

const initialState: FavoritoState = {
  lista: [],
};

export const favoritoSlice = createSlice({
  name: "favorito",
  initialState,
  reducers: {
    agregarFavorito: (state, action: PayloadAction<Personaje>) => {
      state.lista.push(action.payload);
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
      state.lista = state.lista.filter(
        (personaje) => personaje.id !== action.payload
      );
    },
  },
});

export default favoritoSlice.reducer;

/**
 *  Reductor de favoritos que se encarga de agregar y eliminar personajes a la lista de favoritos.
 * Componente redux slice que gestiona una lista de personajes favoritos en el estado global.
 * Proporciona reductores para agregar un personaje a los favoritos y remover un personaje de los favoritos.
 * El estado de los 'favoritos' es una lista de objetos de personajes.
 * El estado inicial de los 'favoritos' es una lista vacía.
 * @returns {FavoritoState} - El estado inicial de los 'favoritos' y los reductores para agregar y remover personajes de los favoritos.
 */