import { useRef } from "react";
import { ImageFrameProps } from "../../types/components";
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
  const ref = useRef(null) as unknown as React.MutableRefObject<HTMLImageElement | null>;
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
        ref={ ref }
      />
      <div>
        <h3>{ title }</h3> 
        <p>{ description }</p> 
      </div>
    </Grids>
  );
}