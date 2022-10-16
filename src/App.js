import MOVIES from './MoviesData';
import Movies from './Movies';
import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = { movies: MOVIES }
  }

  render() {
    const getMovies = this.state.movies.map((movie) => {
      return <Movies key={movie.movie.id} movie={movie.movie} />
    })
    return (
      <div>
        <h1 className="site-title">Rancid Tomatillos</h1>
        {getMovies} {getMovies}
      </div>
    )
  }
}


export default App;




// class Movies extends React.Component {
//    render() {
//     return (
//       <div>
//         <p>{this.props.movieee.title} <br/></p>
//         <img src={this.props.movieee.poster_path}/>
//       </div>
//     );
//   }
// }



