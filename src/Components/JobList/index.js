import React, { useState } from "react";
import JobItem from "../JobItem";
import jobsData from "../../data.json";

import SList from "./styles";
import FilterInput from "../FilterInput";

const JobList = () => {
  const [filters, setFilters] = useState([]);

  const handleFilterClick = (item) => {
    const newFilters = filters.includes(item)
      ? filters.filter((i) => i !== item)
      : [...filters, item];
    setFilters(newFilters);
  };

  return (
    <>
      <FilterInput
        filters={filters}
        onFilterClick={(value) => handleFilterClick(value)}
        clearFilters={() => setFilters([])}
      />
      <SList>
        {jobsData
          .filter((job) => {
            if (filters.length) {
              return (
                filters.filter(
                  (f) => job.languages.includes(f) || job.tools.includes(f)
                ).length > 0 ||
                filters.includes(job.role) ||
                filters.includes(job.level)
              );
            }
            return true;
          })
          .map((job) => (
            <JobItem
              {...job}
              onFilterClick={(value) => handleFilterClick(value)}
            />
          ))}
      </SList>
    </>
  );
};

export default JobList;
