function MovieCard(props) {
  return(
    <div className="movie-card">
    <img src={props.poster}
    alt={props.title} />
    <h2>{props.title}</h2>
      <p>Year: {props.year}</p>
      <p>IMDb Rating: 
        {props.rating}
      </p>
      </div>
  );
}
export default MovieCard;