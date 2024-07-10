const MovieDisplay = ({movie}) => {
  const loading = () => { 
    return <h1>No movie to display</h1>
  }
  const loaded = () => {
    return (
      <>
      <h1>{movie.Title}</h1>
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Year}</h2>
    </>
    )
  })
  // return (
  //   <>
  //     <h1>{movie.Title}</h1>
  //     <h2>{movie.Genre}</h2>
  //     <img src={movie.Poster} alt={movie.Title} />
  //     <h2>{movie.Year}</h2>
  //   </>
  // )
  return movie? loaded : loading
}

export default MovieDisplay