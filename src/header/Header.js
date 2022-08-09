import './Header.css';
import { FcReddit } from "react-icons/fc";

export function Header() {

    return (
        <header className="App-header">
            <div className="logo" >
                <FcReddit className="logo-icon" />
                <p>Reddit</p>
            </div>
            <form>
                <input type="text" id="search" name="searchBar" value="Search" />
            </form>
        </header>
    )
}

