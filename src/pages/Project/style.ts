import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  color: red;
`;

export const ListView = styled.div`
  display: flex;
  flex-direction: column;
  .project-item {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
  }
`;
