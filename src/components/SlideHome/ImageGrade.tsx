import { ImageFrameProps } from "../../types/components";
import { GridContainer } from "./style";

export const ImageGrade = ({ 
  id, 
  src, 
  alt, 
  title, 
  description, 
  activeId,
  setCount
}: ImageFrameProps) => {
    
  return (
    <GridContainer
      className={ id === activeId ? 'active' : '' }
      onClick={ () => {
        const selectId = id as number;
        setCount && setCount(selectId - 1)
      }}      
    >
      <img src={ src } alt={ alt } id={ id as unknown as string} />
      <div>
        <h3>{ title }</h3> 
        <p>{ description }</p>
      </div>
    </GridContainer>
  );
}