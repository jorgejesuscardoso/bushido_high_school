import styled from "styled-components";

export const Footers = styled.footer`
  background-color: var(--footer-background-color);
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 15vw;
  color: var(--text-color);
  text-align: center;
  font-size: 0.7rem;
  padding: 10px;
  margin-top: 10vw;
  div {
    width: 20%;
    height: 80%;
    h1 {
      font-size: 1em;
      margin-bottom: 10px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      justify-content: center;
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 10px;
        a {
          color: var(--link-color-2);
          text-decoration: none;
        }
      }
    }
  }
`;
export const Parceiros = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 10px;
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
    img {
      width: 45%;
      height: 80%;
    }
  }
`;
export const Copyright = styled.p`
  font-size: 0.8em;
  color: var(--text-color);
`;

export const DivLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 70%;
        ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
          justify-content: center;
          list-style: none;
          padding: 0;
          width: 35%;
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            width: 100%;
            a {
              color: var(--link-color-2);
              text-decoration: none;
            }
            img {
              width: 25px;
            }
          }
        }
  }
    
`;