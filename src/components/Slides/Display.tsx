import { useEffect, useState } from "react";
import { ImageFrameProps } from "../../types/components";
import { ImgDisplay, DisplayContainer, SelectBoxImg } from "./style";

export const Display = ({ 
  id, 
  src, 
  alt, 
  description, 
  title, 
  slideLength,
  show,
  setCount
  }: ImageFrameProps) => {
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
}, [id, activePage]);
  return (
    <DisplayContainer>
      <ImgDisplay 
        src={ src } 
        alt={ alt } 
        className={ show }
        />
      <div>
        <h3>{ title }</h3>
        <p>{ description }</p>
      </div>
      <SelectBoxImg>
        {pages.map((page) => {
          return (
            <span 
              key={ page } 
              className={ activePage === page ? 'activeBoxPage' : '' }
              onClick={ () => {
                setCount && setCount(page - 1);
              } }
            >
              { page }
            </span>
          );
          })
        }
      </SelectBoxImg>
    </DisplayContainer>
  );
}