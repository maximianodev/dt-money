import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  padding: 0 1rem;
  overflow-y: hidden;
  overflow-x: auto;
  
  @media(max-width: 767px) {
    gap: 1rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  div {
    background: var(--shape);
    min-width: 250px;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: #fff;
    }
  }
`;

export { Container };