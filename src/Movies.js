import React from 'react';
import CardDetails from './CardDetails';
import './Movies.css'

class Movies extends React.Component {
  render() {
    return (
      <section className="movie-container">
        <div>
          <img onClick={(event) => this.props.handleChange(event)} id={this.props.movie.id}  className="movie-poster" src={this.props.movie.poster_path} alt="movie poster" />
          <p>{this.props.movie.title} <br />
            {`Release Date ${this.props.movie.release_date} ~  ${this.props.movie.average_rating} rating `}
          </p>
        </div>
      </section>
    );
  }
}

export default Movies;
