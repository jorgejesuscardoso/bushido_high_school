import styled from 'styled-components';



export const MainNews = styled.main`
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.2rem;
    text-align: center;
  }
  h3 {
    text-align: start;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 95%;
  }

  footer {
    position: relative;
    bottom: 0;
    width: 85%;
    padding: 1rem;
  }
  a {
    color: var(--link-color);
  }
`;

export const SectionServices = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

`;

export const SectionTable = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--form-background-color);
  box-shadow: 0 0 10px 0 var(--form-box-shadow-color);

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid var(--form-input-background-color);
  }

  td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid var(--form-input-background-color);
  }
`;