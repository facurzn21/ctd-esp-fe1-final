import "./boton-favorito.css";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 *
 *
 */

interface BotonFavoritoProps {
  esFavorito: boolean;
  onClick: () => void;
}

const BotonFavorito = ({ esFavorito, onClick }: BotonFavoritoProps) => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito" onClick={onClick}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;

/**
 * Componente de BotonFavorito que muestra si un elemento es marcado como favorito o no y permite al usuario cambiar este estado.
 * El componente recibe dos props: 
 *  'esFavorito' que determina si el elemento es favorito o no, y 
 *  'onClick' que es la función a ejecutar cuando se hace clic en el botón.
 * @param {BotonFavoritoProps} { esFavorito, onClick } - Propiedades del botón favorito.
 * @returns {JSX.Element} - Elemento JSX que simboliza un botón de favorito.
 */