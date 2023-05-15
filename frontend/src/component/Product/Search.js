
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import { getSearchInput } from "../../actions/searchAction";
import { useDispatch  } from "react-redux";

const Search = () => {
    const dispatch=useDispatch();
    
    const navigate = useNavigate();
	const searchSubmitHandler = (e) => {
		e.preventDefault();
		
        navigate("/products");
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
