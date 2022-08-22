import React from "react";
import "./SearchBar.css";

export function SearchBar () {

    return (
        <div className="search-bar-container">
            <form>
                <input
                    type="text"
                    id="searchBar"
                    name="searchBar"
                    value="Search Reddit posts"
                />
                <button id="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}