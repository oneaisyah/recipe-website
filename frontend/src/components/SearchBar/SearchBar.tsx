import searchIcon from "../../assets/images/icons/search-icon.png";
import "./SearchBar.css";

const SearchBar = () => {
    return (
        <form className="search-container">
            <input className="search-input" placeholder="Search" />
            <button className="search-button" type="submit">
                <img src={searchIcon} alt="search icon" />
            </button>
        </form>
    );
};

export default SearchBar;
