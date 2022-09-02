import React from "react";
import "./SearchBar.css";

export function SearchBar () {

    return (
        <div className="search-bar-container">
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    id="searchBar"
                    aria-label="Search posts"
                />
                <button id="search-button" type="submit" aria-label="Search">Search</button>
            </form>
        </div>
    )
}