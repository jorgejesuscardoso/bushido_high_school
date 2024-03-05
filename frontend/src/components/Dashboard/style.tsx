import styled from 'styled-components';

export const MenuDiv = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 100;
  transition: all 0.5s;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    li {
      margin: 20px 0;
      a {
        text-decoration: none;
        color: #000;
        font-size: 2rem;
      }
    }
  }
  &.open {
    left: 0;
  }
`;