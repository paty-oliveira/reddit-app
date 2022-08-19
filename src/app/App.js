import React from "react";
import './App.css';
import { Header } from "../header/Header";
import { SubredditContainer } from "../subreddit-container/SubredditContainer";

function App() {

    return (
        <div className='App'>
            <Header />
            <SubredditContainer />
        </div>
  );
}

export default App;
