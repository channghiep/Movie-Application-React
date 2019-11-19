import React, { Component } from 'react'
import { getMovies } from '../services/api'
import Movies from '../Components/movies'

class MoviesContainer extends Component{
 
    state = {
        movies: []
    }
    
    componentDidMount(){
        // sort='now_playing'
        this.fetchData(this.props.sort)
        
    }
    fetchData = (sort) => {
        getMovies(sort).then(movies => {
            this.setState({
                movies: movies
            })
        })
    }

    render(){
        // const { movies } = this.state.movies
        return(
            <div>
                <Movies
                    // title = {title}
                    movies = {this.state.movies}
                    />
            </div>
        )
    }
}
export default MoviesContainer