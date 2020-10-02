import React from "react";
import {
  SWrapper,
  SLogo,
  SDetails,
  SCompanyInfo,
  SPosition,
  SInfo,
  SChip,
  SFeatureChipsWrapper,
  SFeatureChip,
} from "./styles";

const Job = ({
  company,
  logo,
  position,
  new: isNew,
  featured,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => (
  <SWrapper>
    <SLogo src={logo} />
    <SDetails>
      <SCompanyInfo>
        <span>{company}</span>
        {isNew && <SFeatureChip>NEW!</SFeatureChip>}
        {featured && <SFeatureChip dark>FEATURED</SFeatureChip>}
      </SCompanyInfo>
      <SPosition>{position}</SPosition>
      <SInfo>
        <span>{postedAt}</span>
        <span>{contract}</span>
        <span>{location}</span>
      </SInfo>
    </SDetails>
    <SFeatureChipsWrapper>
      <SChip>{role}</SChip>
      <SChip>{level}</SChip>
      {languages.map((lang) => (
        <SChip>{lang}</SChip>
      ))}
      {tools.map((tool) => (
        <SChip>{tool}</SChip>
      ))}
    </SFeatureChipsWrapper>
  </SWrapper>
);

export default Job;
