import MOVIES from './MoviesData';
import Movies from './Movies';
import CardDetails from './CardDetails';
import React, { useState } from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = { movies: [], selectedMovie: null, visible: true }
  }


  componentDidMount = () => {
    this.setState({ visible: true })
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => { this.setState({ movies: data.movies }) })
  }

  handleChange = (event) => {

    const findMovie = this.state.movies.find(movie => movie.id === parseInt(event.target.id))

    this.setState({ selectedMovie: findMovie, visible: !this.state.visible })
  }



  render() {
    const getMovies = this.state.movies.map((movie) => {
      return <Movies key={movie.id} movie={movie} handleChange={this.handleChange} />

    })
    return (
      <div>
        <h1 className="site-title">Rancid Tomatillos</h1>
        {this.state.visible ? <div className='all-movies-container'>{getMovies}</div> : <CardDetails movie={this.state.selectedMovie} handleChange={this.handleChange} />}
      </div>
    )
  }
}


export default App;






