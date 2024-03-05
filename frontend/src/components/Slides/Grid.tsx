import { ImageFrameProps } from "../../types/types";
import { Grids } from "./style";

export const Grid = ({ 
  id, 
  src, 
  alt, 
  title, 
  description, 
  activeId,
  setCount,
}: ImageFrameProps) => {
  
  return (
    <Grids
      className={ activeId === id ? 'active' : '' }
      onClick={ () => {
        const selectId = id as number;
        setCount && setCount(selectId - 1)
      }} 
    >
      <img 
        src={ src } 
        alt={ alt } 
        id={ id as unknown as string} 
      />
      <div>
        <h3>{ title }</h3> 
        <p>{ description }</p> 
      </div>
    </Grids>
  );
}