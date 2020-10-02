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

  const filterJobs = (job) => {
    if (filters.length) {
      const filtersInJob = [
        ...filters.filter(
          (f) => job.languages.includes(f) || job.tools.includes(f)
        ),
        ...(filters.includes(job.role) ? [job.role] : []),
        ...(filters.includes(job.level) ? [job.level] : []),
      ];

      return filtersInJob.length === filters.length;
    }
    return true;
  };

  return (
    <>
      <FilterInput
        filters={filters}
        onFilterClick={(value) => handleFilterClick(value)}
        clearFilters={() => setFilters([])}
      />
      <SList>
        {jobsData.filter(filterJobs).map((job) => (
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
