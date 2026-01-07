import { useSelector } from "react-redux";
import ResultGrid from "../component/ResultGrid";
import SearchBar from "../component/searchBar";
import Tab from "../component/Tab";



const HomePage = () => {
  const { query } = useSelector((state) => state.search);

  return (
    <div>
      <SearchBar />
      {query != '' ? <div><Tab />
      <ResultGrid /></div>:''}
    </div>
  );
};

export default HomePage;
