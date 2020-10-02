import styled from "styled-components";

const mainColor = `hsl(180, 29%, 50%)`;
const spacing = 8;

const lightGrey = `hsl(180, 31%, 95%)`;
const grey = `hsl(180, 8%, 52%)`;
const darkGrey = `hsl(180, 14%, 20%)`;

const SWrapper = styled.div`
  position: absolute;
  left: 0;
  width: calc(100% - 16px);
  top: -40px;
  height: 72px;
  background-color: white;
  border-radius: 4px;
  -webkit-box-shadow: 0px 10px 39px -16px ${mainColor};
  -moz-box-shadow: 0px 10px 39px -16px ${mainColor};
  box-shadow: 0px 10px 20px -16px ${mainColor};

  display: flex;
  align-items: center;
  padding: ${spacing}px;
`;

const SChip = styled.div`
  color: ${mainColor};
  padding: ${spacing}px;
  background-color: ${lightGrey};
  border-radius: 4px;

  cursor: pointer;

  margin-right: ${spacing}px;
`;

const ClearButton = styled.div`
  margin-left: auto;
  color: ${mainColor};
  text-decoration: underline;
  margin-right: ${spacing * 2}px;
  cursor: pointer;
`;

export { SWrapper, SChip, ClearButton };
