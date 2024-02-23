import styled from 'styled-components';

export const SlideSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 60%;
  background-color: var(--slide-frame-color);
  
`;
export const Frame = styled.div`
  justify-content: center;
  width: 80%;
  height: 100%;
`;
export const ImgFrame = styled.img`
  width: 100%;
  height: 100%;
  padding: 5px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 5px 5px 5px var(--shadow-color);
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;
export const BtnPrevious = styled.button`
  position: absolute;
  top: 40%;
  left: 5%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
`;
export const BtnNext = styled.button`
  position: absolute;
  top: 40%;
  right: 35%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
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
export const ImgFrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 27.5vw;
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
export const Pages = styled.div`
  background-color: transparent !important;
  position: absolute;
  display: flex;
  align-items: center !important;
  justify-content: space-around !important;
  flex-direction: row !important;
  right: 30%;
  top: 32vw !important;

  gap: 5px;
  width: 12% !important;
  height: 5% !important;
  span {
    text-align: center;
    display: block;
    color: white;
    width: 20px;
    border: 1px solid white;
    cursor: pointer;
  }
`;
export const GradeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 95%;
  max-height: 100px;
  background-color: var(--slide-grade-content-color);
  cursor: pointer;
  
    &:hover {
      background-color: var(--slide-grade-hover-color);
    }
    img {
      width: 40%;
      height: 100px;
    }
    h4 {
      color: white;
    }
    p {
      color: white; 
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 55%;
      gap: 5px;
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
  background-color: var(--slide-grade-color);
  gap: 5px;

    h3 {
      color: white;
    }
`;
export const DivDisplaySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  gap: 10px;

  &::-webkit-scrollbar {
    background-color: var( --scroll-bar-color);
    width: 10px;
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