import React, { useEffect, useState } from "react";
import "./App.css";
import Articles from "./Components/Articles/Articles";
import Recharts from "./Components/Recharts/Recharts";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  // useEffect(() => {
  //   fetch(
  //     "http://newsapi.org/v2/top-headlines?" +
  //       "country=us&" +
  //       "apiKey=5d32835aecfe42439ec650069cfb19e5"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data.articles));
  // }, []);

  // Using Axios
  useEffect(() => {
    axios(
      "http://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=5d32835aecfe42439ec650069cfb19e5"
    ).then((data) => setArticles(data.data.articles));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Here you will find the Latest News throughout the world.</h1>
        {articles.map((article) => {
          return (
            <>
              <Articles article={article} key={article.source.name}></Articles>
              <Recharts></Recharts>
            </>
          );
        })}
      </header>
    </div>
  );
}

export default App;
