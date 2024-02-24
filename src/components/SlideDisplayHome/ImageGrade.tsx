import { ImageFrameProps } from "../../types/components";
import { GradeContainer } from "./style";

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
    <GradeContainer
      className={ id === activeId ? 'active' : '' }
      onClick={ () => {
        const selectId = id as unknown as number;
        setCount && setCount(selectId - 1)
      }}      
    >
      <img src={ src } alt={ alt } id={ id as unknown as string} />
      <div>
        <h4>{ title }</h4> 
        <p>{ description }</p>
      </div>
    </GradeContainer>
  );
}