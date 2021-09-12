import logo from './logo.svg';
import './App.css';
import React from 'react'

import Movie from './Movie'
import CreateMovie from './CreateMovie';




class App extends React.Component {

  state = {
    movies: [
      { id: 1, name: 'movie1', rating: 4, genre: 'comedy' },
      { id: 2, name: 'movie2', rating: 3, genre: 'horror' }
    ],
    newMovie: {
      name: '',
      rating: 0
    },
    favoriteMovies: [],
    showFavorite: true,
    showMovies: true
  }

  showHideButtonEventHandler = () => {
    this.setState({ showFavorite: !this.state.showFavorite })
  }
  showHideMovieButtonEventHandler = () => {
    this.setState({ showMovies: !this.state.showMovies })
  }


  addFavoriteMovieButtonClickHandler = (id) => {
    let movie = this.state.movies.find((item) => {
      return item.id === id
    })

    this.setState({ favoriteMovies: this.state.favoriteMovies.concat(movie) })
  }

  newMovieNameChange = (event) => {
    this.setState({
      newMovie: {
        name: event.target.value,
        rating: this.state.newMovie.rating
      }
    })
  }

  newMovieRatingChange = (event) => {
    this.setState({
      newMovie: {
        name: this.state.newMovie.name,
        rating: event.target.value
      }
    })
  }

  onSaveMovie = () => {
    console.log(this.state.newMovie)
    this.setState({ movies: this.state.movies.concat(this.state.newMovie) })
  }

  deleteMovie = (id) => {
    let result = this.state.movies.filter((item) => {
      return id !== item.id
    })
    this.setState({ movies: result })
  }



  movieNameChangeEventHandler = (id, event) => {
    let result = this.state.movies.map((item) => {
      if (item.id === id) {
        let copy = { ...item };
        copy.name = event.target.value;
        return copy;
      }
      return item;
    });
    this.setState({ movies: result })
  }

  movieRatingChangeEventHandler = (id, event) => {
    let result = this.state.movies.map((item) => {
      if (item.id === id) {
        let copy = { ...item };
        copy.rating = event.target.value;
        return copy;
      }
      return item;
    });
    this.setState({ movies: result })
  }

  // <div id='myDiv' class='App'>
  //   Hello
  // </div>



  render() {

    let favorites = this.state.favoriteMovies.map((item) => {
      return (
        <Movie
          key={item.id}
          movieName={item.name}
          movieRating={item.rating}
          movieGenre={item.genre}
        ></Movie>
      )
    })

    let movies = this.state.movies.map((item) => {
      return (
        <Movie
          key={item.id}
          movieName={item.name}
          movieRating={item.rating}
          movieGenre={item.genre}
          deleteMovieEventHandler={() => { this.deleteMovie(item.id) }}
          movieNameChangeEventHandler=
          {(event) => { this.movieNameChangeEventHandler(item.id, event) }}
          addFavorite={() => { this.addFavoriteMovieButtonClickHandler(item.id) }}
        >
        </Movie>
      )
    })

    return (

      <div>
        <input
          type='button'
          value='Show / Hide'
          onClick={this.showHideMovieButtonEventHandler} />
          
        {
          this.state.showMovies ? movies : null
        }

        <div>Create Movie</div>
        <CreateMovie
          name={this.state.newMovie.name}
          rating={this.state.newMovie.rating}
          nameChanged={(e) => { this.newMovieNameChange(e) }}
          ratingChanged={(e) => { this.newMovieRatingChange(e) }}
          onSave={() => { this.onSaveMovie() }}
        >

        </CreateMovie>

        <div>==================</div>
        <input
          type='button'
          value='Show / Hide Favorite Movies'
          onClick={this.showHideButtonEventHandler}
        />
        <div>Favorite Movies</div>

        {
          this.state.showFavorite ? favorites : null
        }
      </div>

    )
  }
}



export default App;
