import styled from 'styled-components';

export const SlideSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
  background-color: var(--slide-frame-background-color);
  
`;
export const Frame = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 100%;
`;
export const ImgDisplay = styled.img`
  width: 75%;
  height: 100%;
  padding: 5px;
  border-radius: 10px;
`;
export const ImgDisplayContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--slide-frame-background-color);

    img {
      transform: translateX(100%);
    }
    img.imgEnterPosition {
      transition:  0.5s ease;
      transform: translateX(0%);
    }
    img.imgOutPosition {
      transition:  0.5s ease-in-out;
      transform: translateX(-100%);
    }
    img.startPosition {
      transition: 0s ease-in-out;
      transform: translateX(150%);
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 28.4vw;
      width: 70.5%;
      height: 15%;
      overflow-y: scroll;
      background-color: var(--slide-frame-p-background-color);

      h3 {
        text-align: start;
        color: #ffffff9b;
      }
      p {
        color: #ffffff9b;
        padding: 10px;
        text-align: justify;      
      }

      &:hover {
        h3 {
          color: white;
        }
        p {
          color: white;
        }
      }
      &::-webkit-scrollbar {
        background-color: var( --scroll-bar-color);
        width: 0px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var( --scroll-thumb-color);
        border-radius: 10px;
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        width: 10px;
      }
    }
`;
export const BtnPrevious = styled.button`
  position: absolute;
  opacity: 0.4;
  top: 48%;
  left: 5%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
  &:hover {
    opacity: 1;
  }
`;
export const BtnNext = styled.button`
  position: absolute;
  opacity: 0.4;
  top: 48%;
  right: 35%;
  transform: translateY(-50%);
  background-color: transparent;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
  &:hover {
    opacity: 1;
  }
`;
export const BtnReset = styled.button`
  position: absolute;
  top: 70%;
  left: 3%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
`;
export const Pages = styled.div`
  background-color: transparent !important;
  position: absolute;
  display: flex;
  align-items: center !important;
  justify-content: space-around !important;
  flex-direction: row !important;
  right: 30%;
  top: 33.3vw !important;
  gap: 5px;
  width: 20% !important;
  height: 5% !important;
  span {
    text-align: center;
    display: block;
    color: white;
    width: 20px;
    background-color: var(--slide-frame-span-background-color);
    cursor: pointer;
  }
`;
export const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  max-height: 100px;
  padding: 5px;
  font-size: 0.85em;
  cursor: pointer;

  &:last-child {
    margin-bottom: 200px;
  }
  
  &:hover {
    background-color: var(--slide-grid-hover-color);
  }
  img {
    width: 40%;
    height: 90px;
  }
  h3 {
    text-align: center;
    color: white;
  }
  p {
    color: white; 
  }
  div {
    display: flex;
    flex-direction: column;
    width: 55%;
    gap: 5px;
    overflow: hidden;
  }
`;
export const SlideGradeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 33%;
  height: 97%;
  margin-right: 5px;
  background-color: var(--slide-grid-color);
  gap: 5px;

    h3 {
      color: white;
    }
    
`;
export const DivSlideSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  gap: 10px;

  &::-webkit-scrollbar {
    background-color: var( --scroll-bar-color);
    border-radius: 10px;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var( --scroll-thumb-color);
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    width: 10px;
  }
`;