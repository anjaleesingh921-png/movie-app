import { useState, useEffect ,useRef } from "react";
import MovieCard from "./MovieCard";

function SearchBar(){
  const [search, setSearch] = useState("");
  const [movie, setMovie] =
  useState([]);
  const[loading, setLoading] =
  useState(false);
  const[error, setError] =
  useState("");
  const inputRef =
  useRef(null);
  async function fetchMovie(movieName = search) {
    setLoading(true);
    const url=`https://www.omdbapi.com/?apikey=79bd503&s=${movieName}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "True") {
      setMovie(data.Search);
      setError("");
    }else {
      setMovie([]);
      setError(data.Error);
    }


    setLoading(false);
  }
  useEffect(() => {
    if(search.trim()===""){
    fetchMovie('Marvel');
  }
  else{
    fetchMovie(search);}
  },[search]);

  useEffect( () => {
 inputRef.current.focus();
  },[]);
  
  return (
    <div className="search-box">
      <input 
      ref={inputRef}type="text"
      placeholder="Search movie..."
      onChange={(e) =>
        setSearch(e.target.value)}
      />
      <button className="search-btn" onClick={() =>fetchMovie(search)}>Search
      </button>
     <p>You typed: {search}</p>
     {loading && <h2>
      Loading...</h2>}
      {error && (
        <div className="error-container">
      <h2> {error}</h2>
      </div>)}
      {movie.length > 0 && (
        movie.map((item) => (
        <MovieCard
        key={item.imdbID}
        title={item.Title}
        year={item.Year}
        poster={item.Poster}
        rating={item.imdbRating}
        />
        ))
      )}
    </div>
  );
}
export default SearchBar;