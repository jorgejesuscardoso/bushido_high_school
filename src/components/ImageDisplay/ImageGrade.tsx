import { ImageFrameProps } from "../../types/components";
import { GradeContainer } from "./style";

export const ImageGrade = ({ src, alt, title, description }: ImageFrameProps) => {
  return (
    <GradeContainer>
      <img src={ src } alt={ alt } />
      <div>
        <h4>{ title }</h4> 
        <p>{ description }</p>
      </div>
    </GradeContainer>
  );
}