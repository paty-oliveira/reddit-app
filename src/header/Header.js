import './Header.css';
import { FcReddit } from "react-icons/fc";
import { SearchBar } from "../search-bar/SearchBar";

export function Header() {

    return (
        <header className="App-header">
            <div className="logo-container" >
                <FcReddit id="logo-icon" />
                <p>Reddit</p>
            </div>
            <SearchBar />
        </header>
    )
}

