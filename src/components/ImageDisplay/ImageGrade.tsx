import { ImageFrameProps } from "../../types/components";
import { GradeContainer } from "./style";

export const ImageGrade = ({ id, src, alt, title, description, activeId }: ImageFrameProps) => {
  return (
    <GradeContainer
      className={ id === activeId ? 'active' : '' }
    >
      <img src={ src } alt={ alt } id={ id as unknown as string} />
      <div>
        <h4>{ title }</h4> 
        <p>{ description }</p>
      </div>
    </GradeContainer>
  );
}