// imports
import './App.css'
// import hooks
import { useState } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

// import components
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'

function App() {
  const [movieData, setMovieData] = useState(null)


  async function search(searchTerm){
    try {
      
      // make an api call using axios and save response in variable
      let response = await axios.get(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_apiKey}&t=${searchTerm}`)
      // save into state
      setMovieData(response.data) 
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <>
     <Form movieSearch={search} />
     {movieData? <MovieDisplay movie={movieData} /> : <p>Nothing to show</p>}
    </>
  )
}

export default App
