import React from "react";
import { SWrapper, SChip, ClearButton } from "./styles";

const FilterInput = ({ filters, onFilterClick, clearFilters }) => (
  <SWrapper>
    {filters.map((filter) => (
      <SChip
        onClick={() => {
          onFilterClick(filter);
        }}
      >
        {filter}
      </SChip>
    ))}
    {filters.length > 0 && (
      <ClearButton onClick={clearFilters}>Clear</ClearButton>
    )}
  </SWrapper>
);

export default FilterInput;
