import React from "react";
import "./App.css";
import Header from "./Components/header";
import JobList from "./Components/JobList";
import Main from "./Components/main";

function App() {
  return (
    <div className='App'>
      <Header />
      <Main>
        <JobList />
      </Main>
    </div>
  );
}

export default App;
