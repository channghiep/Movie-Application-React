import React, { Component } from 'react'
import { getSearchesMovies } from '../services/api'
import SearchesTvs from '../Components/SearchesTvs'

class SearchMoviesContainer extends Component{
    state = {
        movies: [],
        sort: ''
    }
    
    // constructor(props){

    //     super(props)
    //     this.state = {
    //         isFetching: false,
    //         movies: [],
    //         sort: ''
            
    //     }
    // }


    handleInputChange = () => {
        this.setState({
          sort: this.search.value

        })
        this.fetchData(this.state.sort, this.props.filter)

      }
    // sort='now_playing'
    // componentDidMount(){
    //     // sort='popular'
        
    // }
    
    fetchData = (sort, filter) => {
        getSearchesMovies(sort,filter).then(movies => {
            this.setState({
                movies: movies
            })
        })
    }

    render(){
        // const { movies } = this.state.movies
        return(
            <div>
 <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.sort}</p>
      </form>
      <SearchesTvs
                    // title = {title}
                    movies = {this.state.movies}
                    />
            </div>
           
            // <div>
            //     {/* <h1>top rated</h1> */}
                
            // </div>
        )
    }
}
export default SearchMoviesContainer