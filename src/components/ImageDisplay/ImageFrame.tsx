import { useEffect, useState } from "react";
import { ImageFrameProps } from "../../types/components";
import { ImgFrame, ImgFrameContainer, Pages } from "./style";

export const ImageFrame = ({ src, alt, description, title, slideLength }: ImageFrameProps) => {
  const [pages, setPages] = useState<number[]>([]);
  useEffect(() => {
    const pages = [];
    if (slideLength) {
    for (let i = 1; i < slideLength + 1; i++) {
      pages.push(i);
    }
    setPages(pages);
  }
  }, [src, alt, description, title, slideLength]);
  console.log(pages);
  return (
      <ImgFrameContainer>
        <ImgFrame src={ src } alt={ alt } />
        <div>
          <h3>{ title }</h3>
          <p>{ description }</p>
        </div>
        <Pages>
          {pages.map((page, index) => {
            return (
              <span key={ index }>{ page }</span>
            );
            })
          }
        </Pages>
      </ImgFrameContainer>
  );
}