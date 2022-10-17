import React from 'react'

const CardDetails = (props) => {
  console.log(props)
  return (
    <div className='card'>
      <button className="home-button" onClick={props.handleChange}>Home</button>
      <img src={props.movie.poster_path} />
      <h2>{props.movie.title}</h2>
    </div>
  )
}



export default CardDetails;