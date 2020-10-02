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
  onFilterClick,
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
      <SChip onClick={() => onFilterClick(role)}>{role}</SChip>
      <SChip onClick={() => onFilterClick(level)}>{level}</SChip>
      {languages.map((lang) => (
        <SChip onClick={() => onFilterClick(lang)}>{lang}</SChip>
      ))}
      {tools.map((tool) => (
        <SChip onClick={() => onFilterClick(tool)}>{tool}</SChip>
      ))}
    </SFeatureChipsWrapper>
  </SWrapper>
);

export default Job;
