import React from "react";
import './App.css';
import { Header } from "../header/Header";
import { SubredditContainer } from "../subreddit-container/SubredditContainer";
import { PostsContainer } from "../posts-container/PostsContainer";

function App() {

    return (
        <div className='App'>
            <Header />
            <div className="app-container">
                <SubredditContainer />
                <PostsContainer />
            </div>
        </div>
  );
}

export default App;
