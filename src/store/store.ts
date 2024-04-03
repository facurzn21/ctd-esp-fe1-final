import rootReducer from "../reducers/rootReducer";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer the `AppDispatch` type from the store
export type AppDispatch = typeof store.dispatch;
// Use `AppThunk` for actions that dispatch other actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/**
 * Configuración central de la tienda Redux para la aplicación. Utiliza `rootReducer` para combinar todos los reductores en uno.
 *
 * También se definen algunos tipos útiles por la tienda Redux:
 * 
 * `RootState`: Se infiere el tipo de estado raíz de la tienda de Redux. Esto es útil durante la selección de estado en los componentes de React.
 * 
 * `AppDispatch`: Se infiere el tipo de dispatch desde el store de Redux. Se utiliza para despachar acciones en los componentes de React.
 * 
 * `AppThunk`: Es utilizado para acciones que despachan otras acciones (acciones Thunk). Este tipo es una ThunkAction que se infiere desde el estado raíz y admite cualquier número de tipos de acción.
 */ 
