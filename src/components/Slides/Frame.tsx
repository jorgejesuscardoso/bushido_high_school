import { useEffect, useState } from "react";
import { Display } from "./Display";
import { ImageMap } from "../../utils/Hooks";
import { BtnNext, BtnPrevious, GridSection, Frame, SlideGradeSection, SlideSection } from "./style";
import { ImageFrameProps } from "../../types/components";
import { Grid } from "./Grid";

export const Slide = () => {
  const [image, setImage] = useState({ id: 0 ,src: '', alt: '', title: '', description: ''});
  const [count, setCount] = useState(0);
  const [slidelength, setSlideLength] = useState(0);
  const [grade, setGrade] = useState<ImageFrameProps[]>();
  const [show, setShow] = useState('imgEnterPosition');

  useEffect(() => {
    const imageArray = ImageMap();

    setGrade(imageArray);

    setSlideLength(imageArray.length);
    
    const { id, src, alt, title, description } = imageArray[count];

    setImage({ id, src, alt, title, description });

  }, [count]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count + 1) % slidelength);
    }, 6250);
    const imgEnter = setTimeout(() => {
      setShow('imgEnterPosition');
    }, 0);
    const imgOut = setTimeout(() => {
      setShow('imgOutPosition');
    }, 5800);
    const toStart = setTimeout(() => {
      setShow('startPosition');
    }, 6200);

    return () => {
      clearInterval(interval),
      clearTimeout(imgOut);
      clearTimeout(toStart);
      clearTimeout(imgEnter);
    };
  }, [count, slidelength]);
  
  const handleNextImage = () => {
    setCount((count + 1) % slidelength);
  };
  const handlePreviousImage = () => {
    if (count === 0) {
      setCount(slidelength - 1);
      return;
    }
    setCount((count - 1) % slidelength);
  };
    
  return (
    <SlideSection>
      <Frame>
        <Display
          id={ image.id }
          src= { image.src }
          alt= { image.alt }
          title= { image.title }
          description= { image.description }
          slideLength= { slidelength }
          show= { show }
          setCount= { setCount }
        />
        <BtnPrevious onClick={ handlePreviousImage }>
          <img src="prev.png" />
        </BtnPrevious>
        <BtnNext onClick={ handleNextImage }>
          <img src="next.png" alt="" />
        </BtnNext>
      </Frame>
      <SlideGradeSection>
        <h3>Novidades</h3>
        <GridSection>
          {grade && grade.map((item) => {
            return (
              <Grid
                key= { item.id }
                id={ item.id }
                src= { item.src }
                alt= { item.alt }
                title= { item.title }
                description= { item.description }
                activeId={ image.id }
                setCount= { setCount }
              />
            );
          })}
        </GridSection>
      </SlideGradeSection>
    </SlideSection>
  );
}