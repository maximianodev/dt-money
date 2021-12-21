import styled from "styled-components";

const Container = styled.header`
  background: var(--blue);
`;

const Content = styled.div`
  padding: 2rem 1rem 12rem;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  img.logo {
    max-width: 150px;
  }

  button {
    background-color: var(--blue-light);
    color: #fff;
    border: none;
    padding: 0 1.5rem;
    border-radius: 0.30rem;
    height: 3rem;
    transition: filter .3s;
    &:hover {
      filter: brightness(.9);
    }
  }
`;

export { Container, Content };