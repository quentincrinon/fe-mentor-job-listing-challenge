import React, { useState } from "react";
import JobItem from "../JobItem";
import jobsData from "../../data.json";

import SList from "./styles";
import FilterInput from "../FilterInput";

const JobList = () => {
  const [filters, setFilters] = useState([]);

  return (
    <>
      {/* <FilterInput filters={filters} /> */}
      <SList>
        {jobsData.map((job) => (
          <JobItem {...job} />
        ))}
      </SList>
    </>
  );
};

export default JobList;
