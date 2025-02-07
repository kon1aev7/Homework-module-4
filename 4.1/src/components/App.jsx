import { useEffect } from "react";
import Header from "./Header/Header";
import axios from "axios";
import { useState } from "react";
import { fetchArticles } from "../services/api";
import Articles from "./Articles/Articles";
import SearchBar from "./SearchBar";
import toast from "react-hot-toast";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(20);
  useEffect(() => {
    // axios.get("http://hn.algolia.com/api/v1/search?query=react")
    // .then((res) => setArticles(res.data.hits));
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        // eslint-disable-next-line no-undef
        const { hits } = await fetchArticles(query, page, perPage);
        setArticles(hits);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page, perPage]);

  const handleSetQuery = (newQuery) => {
    console.log(newQuery);
    setQuery(newQuery);
    setArticles([]);
    setPage(0);
  };
  const handleChangeLimit = (e) => {
    setArticles([]);
    setPerPage(e.target.value);
    toast.success(`You change visibility filter to ${e.target.value}`);
  };
  return (
    <>
      <Header />
      <SearchBar handleSetQuery={handleSetQuery} />

      <select value={perPage} onChange={handleChangeLimit}>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <Articles articles={articles} />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong! Try again later...</h2>}
      <button onClick={() => setPage((prev) => prev + 1)}>Load more </button>
    </>
  );
};
export default App;
