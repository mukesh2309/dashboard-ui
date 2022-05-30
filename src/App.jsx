import React from "react";
import Sidebar from "./Components/Sidebar";
import styles from "./App.module.css";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.main}>
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
