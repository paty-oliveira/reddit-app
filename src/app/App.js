import React from "react";
import './App.css';
import { Header } from "../header/Header";
import { SubredditCategory } from "../subreddit-category/SubredditCategory";

function App() {

    return (
        <div className='App'>
            <Header />
            <SubredditCategory />
        </div>
  );
}

export default App;
