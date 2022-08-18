import React from "react";
import "./Header.css";
import { FcReddit } from "react-icons/fc";
import { SearchBar } from "../search-bar/SearchBar";
import { CgProfile } from "react-icons/cg";

export function Header() {

    return (
        <header className="App-header">
            <div className="header-container" >
                <FcReddit id="logo-icon" />
                <p>Reddit</p>
            </div>
            <SearchBar />
            <div className="header-container">
                <CgProfile id="profile-icon" />
            </div>
        </header>
    )
}

