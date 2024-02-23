import { useEffect, useState } from "react";
import { ImageFrameProps } from "../../types/components";
import { ImgFrame, ImgFrameContainer, Pages } from "./style";

export const ImageFrame = ({ id, src, alt, description, title, slideLength }: ImageFrameProps) => {
  const [pages, setPages] = useState<number[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

  useEffect(() => {
    const pages = [];
    if (slideLength) {
    for (let i = 1; i < slideLength + 1; i++) {
      pages.push(i);
    }
    setPages(pages);
  }
  }, [slideLength]);
  useEffect(() => {
    if (id) {
      setActivePage(id);
    } 
}, [id, pages]);
  return (
      <ImgFrameContainer>
        <ImgFrame src={ src } alt={ alt } />
        <div>
          <h3>{ title }</h3>
          <p>{ description }</p>
        </div>
        <Pages>
          {pages.map((page) => {
            return (
              <span 
                key={ page } 
                className={ activePage === page ? 'active' : '' }
              >
                { page }
              </span>
            );
            })
          }
        </Pages>
      </ImgFrameContainer>
  );
}