import styled from "styled-components";

const mainColor = `hsl(180, 29%, 50%)`;
const spacing = 8;

const lightGrey = `hsl(180, 31%, 95%)`;
const grey = `hsl(180, 8%, 52%)`;
const darkGrey = `hsl(180, 14%, 20%)`;

const SWrapper = styled.ul`
  padding: ${spacing}px;
  display: flex;
  align-items: center;
  background-color: white;
  border-left: ${spacing / 2}px solid ${mainColor};
  border-radius: 4px;
  -webkit-box-shadow: 0px 10px 39px -16px ${mainColor};
  -moz-box-shadow: 0px 10px 39px -16px ${mainColor};
  box-shadow: 0px 10px 20px -16px ${mainColor};
`;

const SLogo = styled.img`
  width: auto;
  height: 50%;
  border-radius: 50%;
  padding: ${spacing * 2}px;
`;

const SDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${spacing}px;

  & > *:not(:last-child) {
    margin-bottom: ${spacing * 1.5}px;
  }
`;

const SCompanyInfo = styled.span`
  color: ${mainColor};
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const SPosition = styled.span`
  font-weight: 700;
  display: flex;
`;

const SInfo = styled.div`
  display: flex;
  color: ${grey};

  & > *:not(:last-child) {
    &::after {
      content: "•";
      margin: 0 4px;
    }
  }
`;

const SFeatureChip = styled.div`
  background-color: ${(props) => (props.dark ? darkGrey : mainColor)};
  color: white;
  padding: ${spacing / 1.5}px ${spacing}px;
  border-radius: 15px;
  font-size: 0.8em;
  margin-left: 8px;
`;

const SFeatureChipsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  & > * {
    margin-right: 8px;
  }
`;

const SChip = styled.div`
  color: ${mainColor};
  padding: ${spacing}px;
  background-color: ${lightGrey};
  border-radius: 4px;

  cursor: pointer;
`;

export {
  SWrapper,
  SLogo,
  SDetails,
  SCompanyInfo,
  SPosition,
  SInfo,
  SFeatureChipsWrapper,
  SFeatureChip,
  SChip,
};
