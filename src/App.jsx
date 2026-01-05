import ResultGrid from "./component/ResultGrid"
import SearchBar from "./component/searchBar"
import Tab from "./component/Tab"


const App = () => {



  return (
    <div className="min-h-screen w-full text-white bg-gray-950">

    <SearchBar />

    <Tab />

    <ResultGrid />

    </div>
  )
}

export default App