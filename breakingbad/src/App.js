import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/header";
import Axios from "axios";
import CharacterGrid from "./components/characters/characterGrid";
import Search from "./components/ui/Search";

const App = () => {
  // set state as empty array
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  // api call
  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  // when query is set as a dependency each time the query variable is changed the useEffect function is fired off..
  return (
    <div className="container">
      <Header />
      <Search
        getQuery={(q) => {
          setQuery(q);
        }}
      />
      {/* pass state to  components as props*/}
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
