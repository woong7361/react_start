// import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies:movies.data.data.movies, isLoading: false});
  }
  
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return <section class="container">
      {isLoading 
        ? (<div>
            <span class="loadder__text">Loadding</span>
          </div>)
        : movies.map(movie => {
            return (
              <div class="movies" key={movie.id}>
                <Movie 
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              </div>
            )
    })}</section>
  }

}


export default App;
