import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
`;
