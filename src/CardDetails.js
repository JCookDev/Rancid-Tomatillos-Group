import React, {Component} from 'react'

class CardDetails extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      movie: this.props.movie,
      id: this.props.movie.id
    }
  }
  
  componentDidMount = ()  => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
    .then(response => response.json())
    .then(data => this.setState({movie: data.movie}))
  }

  render() {
    console.log(this.state.movie.id)
  return (
    <div className='card'>
      {/* style={{backgroundImage: `url(${props.movie.backdrop_path})`, width: '150vh', height: '100vh'}}>  */}
      <button className="home-button" onClick={this.props.handleChange}>Home</button>
      <h1>{this.state.movie.title}</h1> <br/>
      Rating: {this.state.movie.average_rating}/10
      <img src={this.state.movie.poster_path} /> <br/>
      <h4>Genres: {this.state.movie.genres}</h4> 
      {this.state.movie.overview}
    </div>
  )
}
}



export default CardDetails;