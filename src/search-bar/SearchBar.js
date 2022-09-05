import React from "react";
import "./SearchBar.css";
import {useDispatch, useSelector} from "react-redux";
import { setSearchTerm, selectSearchTerm} from "../home/posts-container/postsSlice";

export function SearchBar () {

    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const handleSearchTermChange = event => {
        dispatch(setSearchTerm(event.target.value))
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
            </form>
        </div>
    )
}