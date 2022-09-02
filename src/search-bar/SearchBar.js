import React, {useState} from "react";
import "./SearchBar.css";

export function SearchBar () {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = event => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="search-bar-container">
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    id="searchBar"
                    aria-label="Search posts"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <button id="search-button" type="submit" aria-label="Search">Search</button>
            </form>
        </div>
    )
}