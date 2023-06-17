
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import { getSearchInput } from "../../actions/searchAction";
import { useDispatch ,useSelector  } from "react-redux";

const Search = () => {
    const dispatch=useDispatch();
    const {searchInput}=useSelector((state)=>state.searchProduct);
    const navigate = useNavigate();
	const searchSubmitHandler = (e) => {
		e.preventDefault();
		
        navigate(`/products/${searchInput}`);
	};
	return (
		<>
			<MetaData title="Search A Product -- ECOMMERCE" />
			<form className="searchBox" onSubmit={searchSubmitHandler}>
				<input
					type="text"
					placeholder="Search a Product ..."
					onChange={(e) => dispatch( getSearchInput(e.target.value))}
				/>
				<input type="submit" value="Search" />
			</form>
		</>
	);
};
export default Search;
