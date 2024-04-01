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
