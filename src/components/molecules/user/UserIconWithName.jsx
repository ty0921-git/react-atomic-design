import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImg width={160} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 5px;
`;

const SName = styled.p`
  color: #00695c;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 100%;
  margin: 0.5rem;
`;
