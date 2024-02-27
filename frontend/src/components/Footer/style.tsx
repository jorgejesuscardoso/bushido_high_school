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
  div {
    width: 20%;
    height: 80%;
    h1 {
      font-size: 1em;
      margin-bottom: 10px;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 10px;
        a {
          color: var(--text-color);
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