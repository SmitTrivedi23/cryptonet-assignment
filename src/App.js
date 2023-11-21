import React, { useEffect, useState } from "react";
import "./App.css";
import BusinessCard from "./BusinessCard";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const jsonData = await response.json();
        setData(jsonData.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      
      <BusinessCard data={data} />
    </div>
  );
}

export default App;
