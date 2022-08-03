import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">User</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  justify-content: center;
  color: #fff;
  background-color: #00897b;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const SLink = styled(Link)`
  margin: 0.5rem;
`;
