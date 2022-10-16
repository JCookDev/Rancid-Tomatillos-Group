import React from 'react';
import './Movies.css'

class Movies extends React.Component {
  render() {
    return (
        <section className="movie-container"> 
      <div>
        <img className="movie-poster" src={this.props.movie.poster_path} alt="movie poster" />
        <p>{this.props.movie.title} <br/>
          {`Release Date ${this.props.movie.release_date} ~  ${this.props.movie.runtime} min `}
        </p>
      </div>
      </section>
    );
  }
}

export default Movies;
